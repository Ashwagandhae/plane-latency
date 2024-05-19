import { c as create_ssr_component, b as subscribe, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { s as state, B as Button, c as completeChallenge, u as uncompleteChallenge, a as challenges } from "../../../chunks/Button.js";
import { I as Icon, A as ActivityView, a as Activity } from "../../../chunks/ActivityView.js";
const css = {
  code: ".top.svelte-9lh4wi{height:100%;display:flex;flex-direction:column;gap:var(--pad)}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { challenges } from \\"$lib/data/challenge\\";\\nimport { completeChallenge, state, uncompleteChallenge } from \\"$lib/state\\";\\nimport Button from \\"../Button.svelte\\";\\nimport Activity from \\"../Activity.svelte\\";\\nimport Icon from \\"../Icon.svelte\\";\\nimport ActivityView from \\"../ActivityView.svelte\\";\\nlet selectedIndex = null;\\nfunction randomChallenge() {\\n  if ($state == null)\\n    return;\\n  let challenges2 = $state.challenges;\\n  let nonCompletedCount = challenges2.filter((challenge) => !challenge.complete).length;\\n  if (nonCompletedCount === 0) {\\n    alert(\\"All challenges are completed!\\");\\n    return;\\n  }\\n  let randomIndex = Math.floor(Math.random() * nonCompletedCount);\\n  let i = 0;\\n  for (let j = 0; j < challenges2.length; j++) {\\n    if (!challenges2[j].complete) {\\n      if (i === randomIndex) {\\n        selectedIndex = j;\\n        break;\\n      }\\n      i++;\\n    }\\n  }\\n}\\n<\/script>\\n\\n<div class=\\"top\\">\\n\\t<div class=\\"bar\\">\\n\\t\\t<Button on:click={randomChallenge}><Icon name=\\"dots\\"></Icon>random</Button>\\n\\t</div>\\n\\t<ActivityView>\\n\\t\\t{#each challenges as challenge, index}\\n\\t\\t\\t<Activity\\n\\t\\t\\t\\ttitle={challenge.title}\\n\\t\\t\\t\\tdescription={challenge.description}\\n\\t\\t\\t\\tpoints={challenge.points}\\n\\t\\t\\t\\t{index}\\n\\t\\t\\t\\tselected={selectedIndex === index}\\n\\t\\t\\t\\tcomplete={$state?.challenges[index].complete ?? false}\\n\\t\\t\\t\\tcompleteActivity={() => {\\n\\t\\t\\t\\t\\tcompleteChallenge(index);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t\\tuncompleteActivity={() => {\\n\\t\\t\\t\\t\\tuncompleteChallenge(index);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t/>\\n\\t\\t{/each}\\n\\t</ActivityView>\\n</div>\\n\\n<style>\\n\\t.top {\\n\\t\\theight: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tgap: var(--pad);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAuDC,kBAAK,CACJ,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,KAAK,CACf"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let selectedIndex = null;
  $$result.css.add(css);
  $$unsubscribe_state();
  return `<div class="top svelte-9lh4wi"><div class="bar">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Icon, "Icon").$$render($$result, { name: "dots" }, {}, {})}random`;
    }
  })}</div> ${validate_component(ActivityView, "ActivityView").$$render($$result, {}, {}, {
    default: () => {
      return `${each(challenges, (challenge, index) => {
        return `${validate_component(Activity, "Activity").$$render(
          $$result,
          {
            title: challenge.title,
            description: challenge.description,
            points: challenge.points,
            index,
            selected: selectedIndex === index,
            complete: $state?.challenges[index].complete ?? false,
            completeActivity: () => {
              completeChallenge(index);
            },
            uncompleteActivity: () => {
              uncompleteChallenge(index);
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
