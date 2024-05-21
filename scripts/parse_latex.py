from pylatexenc.latexwalker import (
    LatexWalker,
    LatexEnvironmentNode,
    LatexCharsNode,
    LatexMacroNode,
    LatexGroupNode,
    LatexSpecialsNode,
    LatexNode,
)
from pylatexenc.latex2text import LatexNodes2Text

import orjson

from dataclasses import dataclass

walker = None
with open("./input.tex") as f:
    walker = LatexWalker(f.read())

to_text = LatexNodes2Text()


def split_into_sections(walker: LatexWalker) -> dict[str, list]:
    (node_list, _, _) = walker.get_latex_nodes()
    document = None
    for node in node_list:
        if (
            isinstance(node, LatexEnvironmentNode)
            and node.environmentname == "document"
        ):
            print("got document")
            document = node
    if document is None:
        print("no document")
        return {}

    ret = {}
    current_section = None
    for node in document.nodelist:
        if isinstance(node, LatexMacroNode) and node.macroname == "section":
            section_name = node.nodeargd.argnlist[2].nodelist[0].chars
            print("got section", section_name)
            ret[section_name] = []
            current_section = section_name
        elif current_section is not None:
            ret[current_section].append(node)
    return ret


def split_into_items(nodes: list) -> list[list]:
    ret = []
    current_item = None
    for node in nodes:
        if isinstance(node, LatexMacroNode) and node.macroname == "item":
            current_item = []
            ret.append(current_item)
        elif current_item is not None:
            current_item.append(node)

    return ret


def find_itemize(nodes: list) -> LatexEnvironmentNode:
    itemize = next(
        x
        for x in nodes
        if isinstance(x, LatexEnvironmentNode) and x.environmentname == "itemize"
    )
    return itemize


def find_enumerate(nodes: list) -> LatexEnvironmentNode:
    enumerate = next(
        x
        for x in nodes
        if isinstance(x, LatexEnvironmentNode) and x.environmentname == "enumerate"
    )
    return enumerate


def parse_rules(nodes: list) -> list[str]:
    itemize = find_itemize(nodes)
    items = split_into_items(itemize.nodelist)
    ret = []
    for item in items:
        ret.append(to_text.nodelist_to_text(item).strip())
    return ret


@dataclass
class MandatoryChallenge:
    title: str
    description: str


def parse_title_and_deescription(
    itemize: LatexEnvironmentNode,
) -> list[tuple[str, str]]:
    items = split_into_items(itemize.nodelist)
    ret = []
    for item in items:
        it = iter(item)
        title_node = next(
            x for x in it if isinstance(x, LatexMacroNode) and x.macroname == "textbf"
        )
        title = to_text.node_to_text(title_node)
        description = ""
        for node in it:
            description += to_text.node_to_text(node)
        ret.append((title.lower(), description.strip()))

    return ret


def parse_title_and_description_and_points(
    itemize: LatexEnvironmentNode,
) -> list[tuple[str, str, str]]:
    items = split_into_items(itemize.nodelist)
    ret = []
    for item in items:
        it = iter(item)
        title_node = next(
            x for x in it if isinstance(x, LatexMacroNode) and x.macroname == "textbf"
        )
        title = to_text.node_to_text(title_node)
        description = ""
        points_node = None
        for node in it:
            if isinstance(node, LatexMacroNode) and node.macroname == "textbf":
                points_node = node
                break
            description += to_text.node_to_text(node)
        points = to_text.node_to_text(points_node)
        ret.append((title.lower(), description.strip(), points))
    return ret


def parse_mandatory_challenges(nodes: list) -> list[MandatoryChallenge]:
    return [
        MandatoryChallenge(x, y)
        for (x, y) in parse_title_and_deescription(find_itemize(nodes))
    ]


def parse_checkpoints(nodes: list) -> list[MandatoryChallenge]:
    return [
        MandatoryChallenge(x, y)
        for (x, y) in parse_title_and_deescription(find_enumerate(nodes))
    ]


@dataclass
class NumberPoints:
    tag: str
    amount: int


@dataclass
class SpecialPoints:
    tag: str
    description: str


Points = NumberPoints | SpecialPoints


@dataclass
class Challenge:
    title: str
    description: str
    points: Points


def parse_points(s: str) -> Points:
    words = s.split(" ")
    if len(words) == 2 and words[0].isdigit() and words[1] == "coins":
        return NumberPoints("number", int(words[0]))
    else:
        return SpecialPoints("special", s)


def parse_challenges(nodes: list) -> list[Challenge]:
    ret = []
    for title, description, points in parse_title_and_description_and_points(
        find_enumerate(nodes)
    ):
        ret.append(Challenge(title, description, parse_points(points)))
    return ret


@dataclass
class Curse:
    title: str
    description: str
    cost: int


def parse_curses(nodes: list) -> list[Curse]:
    return [
        Curse(x, y, int(z.split(" ")[0]))
        for (x, y, z) in parse_title_and_description_and_points(find_itemize(nodes))
    ]


sections = split_into_sections(walker)

rules = parse_rules(sections["rules"])
mandatory_challenges = parse_mandatory_challenges(sections["mandatory challenges"])
checkpoints = parse_checkpoints(sections["checkpoints"])
challenges = parse_challenges(sections["location-independent challenges"])
curses = parse_curses(sections["curses"])


out_str = """
import type { Challenge, Curse, MandatoryChallenge } from '$lib/challenge';
"""
out_str += """
export const rules: string[] = 
"""
out_str += orjson.dumps(rules).decode()
out_str += """
export const challenges: Challenge[] = 
"""
out_str += orjson.dumps(challenges).decode()

out_str += """
export const mandatoryChallenges: MandatoryChallenge[] =
"""
out_str += orjson.dumps(checkpoints + mandatory_challenges).decode()

out_str += """
export const curses: Curse[] =
"""
out_str += orjson.dumps(curses).decode()


out_str += """
export const transports: { [key: string]: number } = {
	BART: 250,
	muni: 300,
	bus: 350,
	walk: 400,
};
"""

with open("../src/lib/data/out.ts", "w") as f:
    f.write(out_str)
