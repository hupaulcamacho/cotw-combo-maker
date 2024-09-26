<script>
  import Direction1 from "./Direction1.svelte";
  import Direction2 from "./Direction2.svelte";
  import Direction3 from "./Direction3.svelte";
  import Direction4 from "./Direction4.svelte";
  import Direction5 from "./Direction5.svelte";
  import Direction6 from "./Direction6.svelte";
  import Direction7 from "./Direction7.svelte";
  import Direction8 from "./Direction8.svelte";
  import Direction9 from "./Direction9.svelte";
  import HeavyKick from "./HeavyKick.svelte";
  import HeavyPunch from "./HeavyPunch.svelte";
  import Kick from "./Kick.svelte";
  import LightKick from "./LightKick.svelte";
  import LightPunch from "./LightPunch.svelte";
  import MediumKick from "./MediumKick.svelte";
  import MediumPunch from "./MediumPunch.svelte";
  import ModifierHold from "./ModifierHold.svelte";
  import ModifierOr from "./ModifierOr.svelte";
  import ModifierPlus from "./ModifierPlus.svelte";
  import ModifierThen from "./ModifierThen.svelte";
  import Punch from "./Punch.svelte";

  export let shortCode;
</script>

{#if shortCode === "1"}
  <Direction1 />
{:else if shortCode === "2"}
  <Direction2 />
{:else if shortCode === "3"}
  <Direction3 />
{:else if shortCode === "4"}
  <Direction4 />
{:else if shortCode === "5"}
  <Direction5 />
{:else if shortCode === "6"}
  <Direction6 />
{:else if shortCode === "7"}
  <Direction7 />
{:else if shortCode === "8"}
  <Direction8 />
{:else if shortCode === "9"}
  <Direction9 />
{:else if shortCode === "q"}
  <LightPunch />
{:else if shortCode === "w"}
  <MediumPunch />
{:else if shortCode === "e"}
  <HeavyPunch />
{:else if shortCode === "p"}
  <Punch />
{:else if shortCode === "a"}
  <LightKick />
{:else if shortCode === "s"}
  <MediumKick />
{:else if shortCode === "d"}
  <HeavyKick />
{:else if shortCode === "k"}
  <Kick />
{:else if shortCode === "|"}
  <ModifierOr />
{:else if shortCode === "+"}
  <ModifierPlus />
{:else if shortCode === ">"}
  <ModifierThen />
{:else if shortCode === "h"}
  <ModifierHold />
{:else}
  <div class="text-red-500">{shortCode}</div>
{/if}
