import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape } from "./ssr.js";
import { w as writable } from "./index.js";
const css$1 = {
  code: "div.svelte-tj6j8h{box-sizing:border-box;padding:var(--pad);border-radius:var(--rad);background-color:var(--back-1)}div.selected.svelte-tj6j8h{background-color:var(--back-2);border:var(--line) solid var(--text);padding:calc(var(--pad) - var(--line))}",
  map: '{"version":3,"file":"Card.svelte","sources":["Card.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let selected = false;\\n<\/script>\\n\\n<div class:selected>\\n\\t<slot></slot>\\n</div>\\n\\n<style>\\n\\tdiv {\\n\\t\\tbox-sizing: border-box;\\n\\t\\tpadding: var(--pad);\\n\\t\\tborder-radius: var(--rad);\\n\\t\\tbackground-color: var(--back-1);\\n\\t}\\n\\tdiv.selected {\\n\\t\\tbackground-color: var(--back-2);\\n\\t\\tborder: var(--line) solid var(--text);\\n\\t\\tpadding: calc(var(--pad) - var(--line));\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAQC,iBAAI,CACH,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,KAAK,CAAC,CACnB,aAAa,CAAE,IAAI,KAAK,CAAC,CACzB,gBAAgB,CAAE,IAAI,QAAQ,CAC/B,CACA,GAAG,uBAAU,CACZ,gBAAgB,CAAE,IAAI,QAAQ,CAAC,CAC/B,MAAM,CAAE,IAAI,MAAM,CAAC,CAAC,KAAK,CAAC,IAAI,MAAM,CAAC,CACrC,OAAO,CAAE,KAAK,IAAI,KAAK,CAAC,CAAC,CAAC,CAAC,IAAI,MAAM,CAAC,CACvC"}'
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selected = false } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  $$result.css.add(css$1);
  return `<div class="${["svelte-tj6j8h", selected ? "selected" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``} </div>`;
});
const challenges = [
  {
    title: "spiciest food",
    description: "Go to a restaurant and ask for the spiciest thing on the menu. You must take a photo of the item and send it to your opponents. You must finish the entire food before proceeding. It must be described by the restaurant as spicy/hot",
    points: { tag: "number", amount: 300 }
  },
  {
    title: "break any law",
    description: "Break a law. The law can be from any level of jurisdiction and does not have to be a law in California.",
    points: { tag: "number", amount: 100 }
  },
  {
    title: "break any law",
    description: "Break a law. The law can be from any level of jurisdiction and does not have to be a law in California.",
    points: { tag: "number", amount: 100 }
  },
  {
    title: "break any law",
    description: "Break a law. The law can be from any level of jurisdiction and does not have to be a law in California.",
    points: { tag: "number", amount: 100 }
  },
  {
    title: "break any law",
    description: "Break a law. The law can be from any level of jurisdiction and does not have to be a law in California.",
    points: { tag: "number", amount: 100 }
  },
  {
    title: "break any law",
    description: "Break a law. The law can be from any level of jurisdiction and does not have to be a law in California.",
    points: { tag: "number", amount: 100 }
  },
  {
    title: "break any law",
    description: "Break a law. The law can be from any level of jurisdiction and does not have to be a law in California.",
    points: { tag: "number", amount: 100 }
  },
  {
    title: "break any law",
    description: "Break a law. The law can be from any level of jurisdiction and does not have to be a law in California.",
    points: { tag: "number", amount: 100 }
  },
  {
    title: "break any law",
    description: "Break a law. The law can be from any level of jurisdiction and does not have to be a law in California.",
    points: { tag: "number", amount: 100 }
  },
  {
    title: "break any law",
    description: "Break a law. The law can be from any level of jurisdiction and does not have to be a law in California.",
    points: { tag: "number", amount: 100 }
  },
  {
    title: "lie",
    description: "Complete any other card but your proof must be invalid in some way. It may not be arguably valid. If the other teams sus you out, you get no coins. If no one susses you out after 10 minutes, you get double the coins of the other card. ",
    points: { tag: "special", description: "double the coins of the other card" }
  }
];
const curses = [
  {
    title: "no phone",
    description: "You cannot use your phone for 24 hours.",
    cost: 100
  },
  {
    title: "no phone",
    description: "You cannot use your phone for 24 hours.",
    cost: 100
  },
  {
    title: "no phone",
    description: "You cannot use your phone for 24 hours.",
    cost: 100
  },
  {
    title: "no phone",
    description: "You cannot use your phone for 24 hours.",
    cost: 100
  }
];
const state = writable(null);
state.subscribe((value) => {
  if (typeof window === "undefined")
    return;
  if (value == null)
    return;
  localStorage.setItem("state", JSON.stringify(value));
});
function completeChallenge(index) {
  state.update((value) => {
    if (value == null)
      return value;
    value.challenges[index].complete = true;
    const points = challenges[index].points;
    if (points.tag === "number") {
      value.points += points.amount;
    }
    return value;
  });
}
function uncompleteChallenge(index) {
  state.update((value) => {
    if (value == null)
      return value;
    value.challenges[index].complete = false;
    const points = challenges[index].points;
    if (points.tag === "number") {
      if (confirm("Also remove points?")) {
        value.points -= points.amount;
      }
    }
    return value;
  });
}
function completeMandatoryChallenge(index) {
  state.update((value) => {
    if (value == null)
      return value;
    value.mandatoryChallenges[index].complete = true;
    return value;
  });
}
function uncompleteMandatoryChallenge(index) {
  state.update((value) => {
    if (value == null)
      return value;
    value.mandatoryChallenges[index].complete = false;
    return value;
  });
}
function buyCurse(index) {
  state.update((value) => {
    if (value == null)
      return value;
    const curse = curses[index];
    if (value.points < curse.cost) {
      alert("Not enough points!");
      return value;
    }
    if (!confirm(`This curse will cost ${curse.cost} pts. Are you sure?`))
      return value;
    value.points -= curse.cost;
    return value;
  });
}
function layerClass(layer) {
  return "layer-" + layer.toString();
}
function paletteClass(palette) {
  return "palette-" + palette;
}
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link = null } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `${link == null ? `${slots.default ? slots.default({}) : ``}` : `<a${add_attribute("href", link, 0)}>${slots.default ? slots.default({}) : ``}</a>`}`;
});
const css = {
  code: "button.svelte-1sfxedb{box-sizing:border-box;padding:var(--pad);border-radius:var(--rad);background-color:var(--l-back);color:var(--text);height:calc(1rem + var(--pad) * 2);font-size:var(--font-size);border:none;text-align:center;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;flex-direction:row;gap:var(--pad-small)}button.svelte-1sfxedb:hover{background-color:var(--l-back-hover)}button.svelte-1sfxedb:active,button.selected.svelte-1sfxedb{background-color:var(--l-back-active)}",
  map: '{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { layerClass, paletteClass } from \\"$lib/style\\";\\nimport Link from \\"./Link.svelte\\";\\nexport let link = null;\\nexport let selected = false;\\nexport let layer = 1;\\nexport let palette = \\"plain\\";\\n<\/script>\\n\\n<Link {link}>\\n\\t<button class:selected class=\\"{layerClass(layer)} {paletteClass(palette)}\\" on:click>\\n\\t\\t<slot></slot>\\n\\t</button>\\n</Link>\\n\\n<style>\\n\\tbutton {\\n\\t\\tbox-sizing: border-box;\\n\\t\\tpadding: var(--pad);\\n\\t\\tborder-radius: var(--rad);\\n\\t\\tbackground-color: var(--l-back);\\n\\t\\tcolor: var(--text);\\n\\t\\theight: calc(1rem + var(--pad) * 2);\\n\\n\\t\\tfont-size: var(--font-size);\\n\\t\\tborder: none;\\n\\t\\ttext-align: center;\\n\\t\\ttext-decoration: none;\\n\\n\\t\\tdisplay: inline-flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tflex-direction: row;\\n\\t\\tgap: var(--pad-small);\\n\\t}\\n\\tbutton:hover {\\n\\t\\tbackground-color: var(--l-back-hover);\\n\\t}\\n\\tbutton:active,\\n\\tbutton.selected {\\n\\t\\tbackground-color: var(--l-back-active);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAeC,qBAAO,CACN,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,KAAK,CAAC,CACnB,aAAa,CAAE,IAAI,KAAK,CAAC,CACzB,gBAAgB,CAAE,IAAI,QAAQ,CAAC,CAC/B,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAEnC,SAAS,CAAE,IAAI,WAAW,CAAC,CAC3B,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,IAAI,CAErB,OAAO,CAAE,WAAW,CACpB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,IAAI,WAAW,CACrB,CACA,qBAAM,MAAO,CACZ,gBAAgB,CAAE,IAAI,cAAc,CACrC,CACA,qBAAM,OAAO,CACb,MAAM,wBAAU,CACf,gBAAgB,CAAE,IAAI,eAAe,CACtC"}'
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link = null } = $$props;
  let { selected = false } = $$props;
  let { layer = 1 } = $$props;
  let { palette = "plain" } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.layer === void 0 && $$bindings.layer && layer !== void 0)
    $$bindings.layer(layer);
  if ($$props.palette === void 0 && $$bindings.palette && palette !== void 0)
    $$bindings.palette(palette);
  $$result.css.add(css);
  return `${validate_component(Link, "Link").$$render($$result, { link }, {}, {
    default: () => {
      return `<button class="${[
        escape(layerClass(layer), true) + " " + escape(paletteClass(palette), true) + " svelte-1sfxedb",
        selected ? "selected" : ""
      ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</button>`;
    }
  })}`;
});
export {
  Button as B,
  Card as C,
  challenges as a,
  buyCurse as b,
  completeChallenge as c,
  curses as d,
  completeMandatoryChallenge as e,
  uncompleteMandatoryChallenge as f,
  state as s,
  uncompleteChallenge as u
};
