<script lang="ts">
  import html2canvas from "html2canvas";
  import { onMount } from "svelte";
  import {
    Glyph,
    svgForButton,
    shortCodeForButton,
    buttonForShortCode,
    numberNotationForButton,
    letterNotationForButton,
    unicodeNotationForButton,
  } from "@lib/types";
  import type { Combo } from "@lib/types";
  import GlyphComponent from "@components/glyphs/Glyph.svelte";

  let textModes = [
    { id: 1, text: `URL` },
    { id: 2, text: `Text (236)` },
    { id: 3, text: `Text (QCF)` },
    { id: 4, text: `Emoji` },
  ];

  let combo: Combo = {
    characterId: 0,
    gameVersion: "1.0.0",
    sequence: [],
  };

  let alertText = "";

  function closeAlert() {
    alertText = "";
  }

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const comboQuery = urlParams.get("combo");
    if (comboQuery) {
      const decodedCombo = urlSafeBase64Decode(comboQuery);
      const sequence = decodedCombo.split("");
      combo.sequence = sequence.map((button) => buttonForShortCode(button));
    }
  });

  $: disableActions = combo.sequence.length === 0;
  let selectedTextMode = 1;

  function add(glyph: Glyph) {
    combo.sequence = [...combo.sequence, glyph];
  }

  function publicUrl(): string {
    const url = new URL(window.location.href);
    const shortCode = combo.sequence.map(shortCodeForButton).join("");
    url.searchParams.set("combo", urlSafeBase64Encode(shortCode));
    return url.toString();
  }

  function urlSafeBase64Encode(str: string): string {
    let encoded = btoa(str);
    return encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  function urlSafeBase64Decode(encoded: string): string {
    let padded = encoded.replace(/-/g, "+").replace(/_/g, "/");
    // Add padding back if necessary
    while (padded.length % 4) {
      padded += "=";
    }
    return atob(padded);
  }

  function copyAsText() {
    let text = "";
    switch (selectedTextMode) {
      case 1:
        text = publicUrl();
        break;
      case 2:
        text = combo.sequence
          .map((button) => numberNotationForButton(button))
          .join("");
        break;
      case 3:
        text = combo.sequence
          .map((button) => letterNotationForButton(button))
          .join("");
        break;
      case 4:
        text = combo.sequence
          .map((button) => unicodeNotationForButton(button))
          .join("");
        break;
    }

    navigator.clipboard.writeText(text);

    alertText =
      selectedTextMode !== 1
        ? text
        : "A public URL to view this combo has been generated.";

    if (selectedTextMode === 1) {
      history.pushState(null, "", publicUrl());
    }

    setTimeout(() => {
      alertText = "";
    }, 5000);
  }

  function copyAsImage() {
    let combo = document.querySelector("#combo") as HTMLElement;

    html2canvas(combo, {
      backgroundColor: null,
      windowWidth: 300,
    }).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "combo.png";
      a.click();
    });
  }

  function undo() {
    if (combo.sequence.length === 0) return;
    combo.sequence = combo.sequence.slice(0, -1);
  }

  function clearAll() {
    combo.sequence = [];
  }
</script>

<div
  class="flex flex-wrap items-start content-start gap-2 p-4 border rounded-lg border-slate-800 bg-slate-900 min-h-60"
  id="combo"
>
  {#each combo.sequence as button}
    <GlyphComponent shortCode={shortCodeForButton(button)} />
  {/each}
</div>

<div class="flex my-8 justify-between sm:justify-center sm:gap-10 flex-wrap">
  <div class="grid grid-cols-3 grid-rows-3 gap-2 max-w-36">
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.upBack)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.upBack)}`}
          alt={Glyph.upBack}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.up)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img src={`/${svgForButton(Glyph.up)}`} alt={Glyph.up} class="w-10" />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.upForward)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.upForward)}`}
          alt={Glyph.upForward}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.back)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.back)}`}
          alt={Glyph.back}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.neutral)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.neutral)}`}
          alt={Glyph.neutral}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.forward)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.forward)}`}
          alt={Glyph.forward}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.downBack)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.downBack)}`}
          alt={Glyph.downBack}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.down)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.down)}`}
          alt={Glyph.down}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.downForward)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.downForward)}`}
          alt={Glyph.downForward}
          class="w-10"
        />
      </button>
    </div>
  </div>
  <div class="grid grid-cols-4 grid-rows-3 gap-2">
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.light)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.light)}`}
          alt={Glyph.light}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.medium)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.medium)}`}
          alt={Glyph.medium}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.heavy)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.heavy)}`}
          alt={Glyph.heavy}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.tag)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img src={`/${svgForButton(Glyph.tag)}`} alt={Glyph.tag} class="w-10" />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.special1)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.special1)}`}
          alt={Glyph.special1}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.special2)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.special2)}`}
          alt={Glyph.special2}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.dash)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.dash)}`}
          alt={Glyph.dash}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.parry)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.parry)}`}
          alt={Glyph.parry}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.and)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img src={`/${svgForButton(Glyph.and)}`} alt={Glyph.and} class="w-10" />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.then)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.then)}`}
          alt={Glyph.then}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.hold)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img
          src={`/${svgForButton(Glyph.hold)}`}
          alt={Glyph.hold}
          class="w-10"
        />
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        on:click={() => add(Glyph.or)}
        class="rounded-full bg-white/10 shadow-sm hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90 w-10"
      >
        <img src={`/${svgForButton(Glyph.or)}`} alt={Glyph.or} class="w-10" />
      </button>
    </div>
  </div>
  <div class="grid grid-rows-3 gap-2 flex-grow sm:mt-0 mt-10">
    <div class="flex gap-2">
      <button
        type="button"
        class="rounded-md p-2 border-2 flex-grow border-slate-700 enabled:hover:border-slate-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 enabled:active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        on:click={undo}
        disabled={disableActions}
      >
        Undo
      </button>
      <button
        type="button"
        class="rounded-md p-2 border-2 flex-grow border-slate-700 enabled:hover:border-slate-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 enabled:active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        on:click={clearAll}
        disabled={disableActions}
      >
        Clear All
      </button>
    </div>

    <div class="flex gap-2">
      <button
        type="button"
        class="rounded-md p-2 border-2 flex-grow border-slate-700 enabled:hover:border-slate-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 enabled:active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        on:click={copyAsText}
        disabled={disableActions}
      >
        Copy as
      </button>
      <div>
        <select
          id="location"
          name="location"
          class="block w-full text-lime-400 h-full bg-transparent rounded-md border-0 ring-2 ring-inset ring-slate-700 focus:ring-2 focus:ring-indigo-600"
          bind:value={selectedTextMode}
        >
          {#each textModes as mode}
            <option value={mode.id} selected={mode.id === selectedTextMode}
              >{mode.text}</option
            >
          {/each}
        </select>
      </div>
    </div>

    <button
      type="button"
      class="rounded-md p-2 border-2 flex-grow border-slate-700 enabled:hover:border-slate-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 enabled:active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      on:click={copyAsImage}
      disabled={disableActions}
    >
      Save as <span class="text-lime-400">image</span>
    </button>
  </div>
</div>

<div
  aria-live="assertive"
  class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
>
  <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
    {#if alertText !== ""}
      <div
        class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5"
      >
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg
                class="h-6 w-6 text-lime-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5 font-mono">
              <p class="text-sm font-medium">Combo copied!</p>
              <p class="mt-1 text-sm text-gray-400">
                {alertText}
              </p>
            </div>
            <div class="ml-4 flex flex-shrink-0">
              <button
                type="button"
                class="inline-flex rounded-md bg-black text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                on:click={closeAlert}
              >
                <span class="sr-only">Close</span>
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
