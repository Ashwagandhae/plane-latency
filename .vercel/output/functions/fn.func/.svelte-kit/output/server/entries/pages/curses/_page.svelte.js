import { c as create_ssr_component, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { b as buyCurse, d as curses } from "../../../chunks/Button.js";
import { A as ActivityView, a as Activity } from "../../../chunks/ActivityView.js";
const css = {
  code: ".top.svelte-9lh4wi{height:100%;display:flex;flex-direction:column;gap:var(--pad)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { curses } from \\"$lib/data/curse\\";\\nimport { buyCurse } from \\"$lib/state\\";\\nimport Activity from \\"../Activity.svelte\\";\\nimport ActivityView from \\"../ActivityView.svelte\\";\\n<\/script>\\n\\n<div class=\\"top\\">\\n\\t<ActivityView>\\n\\t\\t{#each curses as curse, index}\\n\\t\\t\\t<Activity\\n\\t\\t\\t\\ttitle={curse.title}\\n\\t\\t\\t\\tdescription={curse.description}\\n\\t\\t\\t\\tpoints={{ tag: 'number', amount: -1 * curse.cost }}\\n\\t\\t\\t\\t{index}\\n\\t\\t\\t\\tselected={false}\\n\\t\\t\\t\\tcomplete={false}\\n\\t\\t\\t\\tcompleteActivity={() => {\\n\\t\\t\\t\\t\\tbuyCurse(index);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t/>\\n\\t\\t{/each}\\n\\t</ActivityView>\\n</div>\\n\\n<style>\\n\\t.top {\\n\\t\\theight: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tgap: var(--pad);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAyBC,kBAAK,CACJ,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,KAAK,CACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="top svelte-9lh4wi">${validate_component(ActivityView, "ActivityView").$$render($$result, {}, {}, {
    default: () => {
      return `${each(curses, (curse, index) => {
        return `${validate_component(Activity, "Activity").$$render(
          $$result,
          {
            title: curse.title,
            description: curse.description,
            points: { tag: "number", amount: -1 * curse.cost },
            index,
            selected: false,
            complete: false,
            completeActivity: () => {
              buyCurse(index);
            }
          },
          {},
          {}
        )}`;
      })}`;
    }
  })} </div>`;
});
export {
  Page as default
};
