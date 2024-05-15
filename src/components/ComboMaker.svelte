<script lang="ts">
  import {
    Buttons,
    svgForButton,
    shortCodeForButton,
    sequenceSvgForButton,
  } from "@lib/types";
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

<div
  class="flex flex-wrap items-start content-start gap-2 p-4 border rounded-lg border-slate-800 bg-slate-900 min-h-60"
>
  {#each combo.sequence as button}
    <img
      src={`/${sequenceSvgForButton(button)}`}
      alt={button}
      class="h-8 sm:h-10"
    />
  {/each}
</div>

<div class="flex my-8 justify-between sm:justify-center sm:gap-10 flex-wrap">
  <div class="grid grid-cols-3 grid-rows-3 gap-2 max-w-36">
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.upBack)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.upBack)}`}
          alt={Buttons.upBack}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.up)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.up)}`}
          alt={Buttons.up}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.upForward)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.upForward)}`}
          alt={Buttons.upForward}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.back)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.back)}`}
          alt={Buttons.back}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.neutral)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.neutral)}`}
          alt={Buttons.neutral}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.forward)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.forward)}`}
          alt={Buttons.forward}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.downBack)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.downBack)}`}
          alt={Buttons.downBack}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.down)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.down)}`}
          alt={Buttons.down}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.downForward)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.downForward)}`}
          alt={Buttons.downForward}
          class="w-10"
        />
      </button>
    </div>
  </div>
  <div class="grid grid-cols-4 grid-rows-3 gap-2">
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.light)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.light)}`}
          alt={Buttons.light}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.medium)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.medium)}`}
          alt={Buttons.medium}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.heavy)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.heavy)}`}
          alt={Buttons.heavy}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.tag)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.tag)}`}
          alt={Buttons.tag}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.special1)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.special1)}`}
          alt={Buttons.special1}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.special2)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.special2)}`}
          alt={Buttons.special2}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.dash)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.dash)}`}
          alt={Buttons.dash}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.parry)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.parry)}`}
          alt={Buttons.parry}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.and)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.and)}`}
          alt={Buttons.and}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.then)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.then)}`}
          alt={Buttons.then}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.hold)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.hold)}`}
          alt={Buttons.hold}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Buttons.or)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Buttons.or)}`}
          alt={Buttons.or}
          class="w-10"
        />
      </button>
    </div>
  </div>
  <div class="grid grid-rows-3 gap-2 flex-grow sm:mt-0 mt-10">
    <div class="flex gap-2">
      <button
        type="button"
        class="rounded-md p-2 border-2 flex-grow border-slate-700 hover:border-slate-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-95"
        on:click={copyShortCode}
      >
        Copy as <span class="text-lime-400">text</span>
      </button>
      <div>
        <select
          id="location"
          name="location"
          class="block w-full h-full bg-transparent rounded-md border-0 ring-2 ring-inset ring-slate-700 focus:ring-2 focus:ring-indigo-600"
        >
          <option>236</option>
          <option selected>QCF</option>
        </select>
      </div>
    </div>

    <button
      type="button"
      class="rounded-md p-2 border-2 flex-grow border-slate-700 hover:border-slate-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-95"
      on:click={copyShortCode}
    >
      Copy as <span class="text-lime-400">emoji</span>
    </button>
    <button
      type="button"
      class="rounded-md p-2 border-2 flex-grow border-slate-700 hover:border-slate-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-95"
      on:click={copyShortCode}
    >
      Copy as <span class="text-lime-400">image</span>
    </button>
  </div>
</div>
