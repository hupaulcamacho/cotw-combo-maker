<script lang="ts">
  import { Buttons, svgForButton, shortCodeForButton } from "@lib/types";
  import type { Combo } from "@lib/types";

  const buttons = Object.values(Buttons);

  let combo: Combo = {
    characterId: 0,
    gameVersion: "1.0.0",
    sequence: [],
  };

  function add(button: Buttons) {
    combo.sequence = [...combo.sequence, button];
  }

  function copyShortCode() {
    navigator.clipboard.writeText(
      combo.sequence.map(shortCodeForButton).join(""),
    );
  }
</script>

<div class="flex flex-wrap gap-2">
  {#each combo.sequence as button}
    <img src={`/${svgForButton(button)}`} alt={button} />
  {/each}
</div>

<div class="flex">
  {#each buttons as button}
    <button
      on:click={() => add(button)}
      class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <img src={`/${svgForButton(button)}`} alt={button} class="w-10" />
    </button>
  {/each}
</div>

<button
  on:click={copyShortCode}
  class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
  Copy
</button>
<button
  type="button"
  class="mr-2 inline-flex items-center gap-x-1.5 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-stone-800 dark:text-white dark:ring-gray-600 dark:hover:bg-stone-700"
  on:click={copyShortCode}
>
  Copy
</button>
