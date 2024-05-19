<script>
  import ButtonDash from "./ButtonDash.svelte";
  import ButtonParry from "./ButtonParry.svelte";
  import ButtonS1 from "./ButtonS1.svelte";
  import ButtonS2 from "./ButtonS2.svelte";
  import ButtonTag from "./ButtonTag.svelte";
  import ButtonL from "./ButtonL.svelte";
  import ButtonM from "./ButtonM.svelte";
  import ButtonH from "./ButtonH.svelte";
  import Direction1 from "./Direction1.svelte";
  import Direction2 from "./Direction2.svelte";
  import Direction3 from "./Direction3.svelte";
  import Direction4 from "./Direction4.svelte";
  import Direction5 from "./Direction5.svelte";
  import Direction6 from "./Direction6.svelte";
  import Direction7 from "./Direction7.svelte";
  import Direction8 from "./Direction8.svelte";
  import Direction9 from "./Direction9.svelte";
  import ModifierHold from "./ModifierHold.svelte";
  import ModifierOr from "./ModifierOr.svelte";
  import ModifierPlus from "./ModifierPlus.svelte";
  import ModifierThen from "./ModifierThen.svelte";

  export let shortCode;
</script>

{#if shortCode === "L"}
  <ButtonL />
{:else if shortCode === "M"}
  <ButtonM />
{:else if shortCode === "H"}
  <ButtonH />
{:else if shortCode === "1"}
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
{:else if shortCode === "X"}
  <ButtonS1 />
{:else if shortCode === "Y"}
  <ButtonS2 />
{:else if shortCode === "T"}
  <ButtonTag />
{:else if shortCode === "D"}
  <ButtonDash />
{:else if shortCode === "P"}
  <ButtonParry />
{:else if shortCode === "|"}
  <ModifierOr />
{:else if shortCode === "+"}
  <ModifierPlus />
{:else if shortCode === ">"}
  <ModifierThen />
{:else if shortCode === "h"}
  <ModifierHold />
{:else}
  <div>Unknown</div>
{/if}
