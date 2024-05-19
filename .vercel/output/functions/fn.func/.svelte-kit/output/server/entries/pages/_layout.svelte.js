import { c as create_ssr_component, e as escape, a as add_attribute, b as subscribe, d as each, v as validate_component } from "../../chunks/ssr.js";
import { s as state, B as Button, C as Card } from "../../chunks/Button.js";
import { p as page } from "../../chunks/stores.js";
const css$1 = {
  code: "input.svelte-1bxfxqy{box-sizing:border-box;width:8ch;text-align:right;padding:0}",
  map: '{"version":3,"file":"MutNumber.svelte","sources":["MutNumber.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let val;\\nexport let label = null;\\n<\/script>\\n\\n<div>\\n\\t{#if label}\\n\\t\\t<label\\n\\t\\t\\t>{label}\\n\\t\\t\\t<input type=\\"number\\" bind:value={val} />\\n\\t\\t</label>\\n\\t{:else}\\n\\t\\t<input type=\\"number\\" bind:value={val} />\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\tinput {\\n\\t\\tbox-sizing: border-box;\\n\\t\\twidth: 8ch;\\n\\t\\ttext-align: right;\\n\\t\\tpadding: 0;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgBC,oBAAM,CACL,UAAU,CAAE,UAAU,CACtB,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,CACV"}'
};
const MutNumber = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { val } = $$props;
  let { label = null } = $$props;
  if ($$props.val === void 0 && $$bindings.val && val !== void 0)
    $$bindings.val(val);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css$1);
  return `<div>${label ? `<label>${escape(label)} <input type="number" class="svelte-1bxfxqy"${add_attribute("value", val, 0)}></label>` : `<input type="number" class="svelte-1bxfxqy"${add_attribute("value", val, 0)}>`} </div>`;
});
const css = {
  code: "main.svelte-1m9wv44{width:100vw;height:100vh;padding:var(--pad);background-color:var(--back-0);box-sizing:border-box;display:flex;flex-direction:column;gap:var(--pad)}.main.svelte-1m9wv44{height:100%;overflow:scroll}.bar.svelte-1m9wv44{display:flex;justify-content:space-between;gap:var(--pad)}.buttons.svelte-1m9wv44{display:flex;gap:var(--pad)}.tabs.svelte-1m9wv44{display:flex;gap:var(--pad);flex-direction:row}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Card from \\"./Card.svelte\\";\\nimport { onMount } from \\"svelte\\";\\nimport { initState, state } from \\"$lib/state\\";\\nimport \\"./global.css\\";\\nimport MutNumber from \\"./MutNumber.svelte\\";\\nimport Button from \\"./Button.svelte\\";\\nimport { page } from \\"$app/stores\\";\\nimport { dev } from \\"$app/environment\\";\\nonMount(() => {\\n  const theme = localStorage.getItem(\\"theme\\");\\n  if (theme) {\\n    if (theme == \\"dark\\") {\\n      document.documentElement.classList.add(\\"dark\\");\\n    }\\n  } else {\\n    if (window.matchMedia(\\"(prefers-color-scheme: dark)\\").matches) {\\n      document.documentElement.classList.add(\\"dark\\");\\n    }\\n  }\\n  const stored = localStorage.getItem(\\"state\\");\\n  if (stored) {\\n    $state = JSON.parse(stored);\\n  } else {\\n    $state = initState();\\n  }\\n});\\nfunction toggleTheme() {\\n  if (document.documentElement.classList.contains(\\"dark\\")) {\\n    document.documentElement.classList.remove(\\"dark\\");\\n    localStorage.setItem(\\"theme\\", \\"light\\");\\n  } else {\\n    document.documentElement.classList.add(\\"dark\\");\\n    localStorage.setItem(\\"theme\\", \\"dark\\");\\n  }\\n}\\nfunction reset() {\\n  if (dev || confirm(\\"Are you sure you want to reset?\\") && confirm(\\"Are you really sure?\\")) {\\n    $state = null;\\n    $state = initState();\\n    localStorage.setItem(\\"state\\", JSON.stringify($state));\\n  }\\n}\\nconst tabs = [\\"mchallenges\\", \\"challenges\\", \\"curses\\"];\\n<\/script>\\n\\n<main>\\n\\t<div class=\\"tabs\\">\\n\\t\\t{#each tabs as tab}\\n\\t\\t\\t<Button link=\\"./{tab}\\" layer={0} selected={$page.url.pathname == `/${tab}`}>{tab}</Button>\\n\\t\\t{/each}\\n\\t</div>\\n\\t<div class=\\"main\\"><slot></slot></div>\\n\\t<div class=\\"bar\\">\\n\\t\\t{#if $state != null}\\n\\t\\t\\t<Card><MutNumber bind:val={$state.points} label=\\"points\\"></MutNumber></Card>\\n\\t\\t\\t<div class=\\"buttons\\">\\n\\t\\t\\t\\t<Button on:click={reset}>reset</Button>\\n\\t\\t\\t\\t<Button on:click={toggleTheme}>theme</Button>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n</main>\\n\\n<style>\\n\\tmain {\\n\\t\\twidth: 100vw;\\n\\t\\theight: 100vh;\\n\\t\\tpadding: var(--pad);\\n\\t\\tbackground-color: var(--back-0);\\n\\t\\tbox-sizing: border-box;\\n\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tgap: var(--pad);\\n\\t}\\n\\t.main {\\n\\t\\theight: 100%;\\n\\t\\toverflow: scroll;\\n\\t}\\n\\t.bar {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\tgap: var(--pad);\\n\\t}\\n\\t.buttons {\\n\\t\\tdisplay: flex;\\n\\t\\tgap: var(--pad);\\n\\t}\\n\\n\\t.tabs {\\n\\t\\tdisplay: flex;\\n\\t\\tgap: var(--pad);\\n\\t\\tflex-direction: row;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgEC,mBAAK,CACJ,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,KAAK,CAAC,CACnB,gBAAgB,CAAE,IAAI,QAAQ,CAAC,CAC/B,UAAU,CAAE,UAAU,CAEtB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,KAAK,CACf,CACA,oBAAM,CACL,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MACX,CACA,mBAAK,CACJ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,GAAG,CAAE,IAAI,KAAK,CACf,CACA,uBAAS,CACR,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,KAAK,CACf,CAEA,oBAAM,CACL,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,KAAK,CAAC,CACf,cAAc,CAAE,GACjB"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  let $page, $$unsubscribe_page;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const tabs = ["mchallenges", "challenges", "curses"];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<main class="svelte-1m9wv44"><div class="tabs svelte-1m9wv44">${each(tabs, (tab) => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          link: "./" + tab,
          layer: 0,
          selected: $page.url.pathname == `/${tab}`
        },
        {},
        {
          default: () => {
            return `${escape(tab)}`;
          }
        }
      )}`;
    })}</div> <div class="main svelte-1m9wv44">${slots.default ? slots.default({}) : ``}</div> <div class="bar svelte-1m9wv44">${$state != null ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(MutNumber, "MutNumber").$$render(
          $$result,
          { label: "points", val: $state.points },
          {
            val: ($$value) => {
              $state.points = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} <div class="buttons svelte-1m9wv44">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `reset`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `theme`;
      }
    })}</div>` : ``}</div> </main>`;
  } while (!$$settled);
  $$unsubscribe_state();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Layout as default
};
