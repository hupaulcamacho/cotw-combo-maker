<script lang="ts">
  import { Buttons } from "@lib/types";
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
</script>

<div class="flex flex-wrap gap-2">
  {#each combo.sequence as button}
    <li class="text-white">{button}</li>
  {/each}
</div>

{#each buttons as button}
  <button
    on:click={() => add(button)}
    class="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    {button}
  </button>
{/each}
