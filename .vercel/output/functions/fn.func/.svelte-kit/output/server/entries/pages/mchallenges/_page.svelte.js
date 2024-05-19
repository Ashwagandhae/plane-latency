import { c as create_ssr_component, b as subscribe, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { s as state, e as completeMandatoryChallenge, f as uncompleteMandatoryChallenge } from "../../../chunks/Button.js";
import { A as ActivityView, a as Activity } from "../../../chunks/ActivityView.js";
const mandatoryChallenges = [
  { title: "eat cheese", description: "eat cheeesesefefsfasflkds fjdslfdskfjdasfdslkf" },
  { title: "eat cheese", description: "eat cheeesesefefsfasflkds fjdslfdskfjdasfdslkf" },
  { title: "eat cheese", description: "eat cheeesesefefsfasflkds fjdslfdskfjdasfdslkf" },
  { title: "eat cheese", description: "eat cheeesesefefsfasflkds fjdslfdskfjdasfdslkf" }
];
const css = {
  code: ".top.svelte-9lh4wi{height:100%;display:flex;flex-direction:column;gap:var(--pad)}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { mandatoryChallenges } from \\"$lib/data/mandatoryChallenge\\";\\nimport { completeMandatoryChallenge, state, uncompleteMandatoryChallenge } from \\"$lib/state\\";\\nimport Activity from \\"../Activity.svelte\\";\\nimport ActivityView from \\"../ActivityView.svelte\\";\\n<\/script>\\n\\n<div class=\\"top\\">\\n\\t<ActivityView>\\n\\t\\t{#each mandatoryChallenges as challenge, index}\\n\\t\\t\\t<Activity\\n\\t\\t\\t\\ttitle={challenge.title}\\n\\t\\t\\t\\tdescription={challenge.description}\\n\\t\\t\\t\\tpoints={null}\\n\\t\\t\\t\\t{index}\\n\\t\\t\\t\\tselected={false}\\n\\t\\t\\t\\tcomplete={$state?.mandatoryChallenges[index].complete ?? false}\\n\\t\\t\\t\\tcompleteActivity={() => completeMandatoryChallenge(index)}\\n\\t\\t\\t\\tuncompleteActivity={() => uncompleteMandatoryChallenge(index)}\\n\\t\\t\\t/>\\n\\t\\t{/each}\\n\\t</ActivityView>\\n</div>\\n\\n<style>\\n\\t.top {\\n\\t\\theight: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tgap: var(--pad);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwBC,kBAAK,CACJ,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,KAAK,CACf"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  $$result.css.add(css);
  $$unsubscribe_state();
  return `<div class="top svelte-9lh4wi">${validate_component(ActivityView, "ActivityView").$$render($$result, {}, {}, {
    default: () => {
      return `${each(mandatoryChallenges, (challenge, index) => {
        return `${validate_component(Activity, "Activity").$$render(
          $$result,
          {
            title: challenge.title,
            description: challenge.description,
            points: null,
            index,
            selected: false,
            complete: $state?.mandatoryChallenges[index].complete ?? false,
            completeActivity: () => completeMandatoryChallenge(index),
            uncompleteActivity: () => uncompleteMandatoryChallenge(index)
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
