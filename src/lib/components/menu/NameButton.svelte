<script lang="ts">
    import { windowStore } from "$lib/runes/window.svelte";
    import type { MenuBar } from "$lib/types";
    import { invoke } from "@tauri-apps/api/core";

    let {
        label,
        children,
        mnemonic,
    }: { label: MenuBar.Names; children: any; mnemonic?: string } = $props();
</script>

<div class="relative">
    <button
        class="text-sm font-normal rounded p-1 cursor-pointer {windowStore.getActiveName() ===
        label
            ? 'dark:bg-neutral-700 dark:text-amber-300'
            : ''}"
        onmouseenter={() => {
            windowStore.setActiveName(label);
        }}
        onclick={() => {
            windowStore.setIsMenuBarOpen(false);
            windowStore.setActiveName("Qwill");
            invoke("set_is_menu_bar_open", { value: false });
        }}
    >
        {label}
    </button>
    {#if windowStore.getActiveName() === label}
        <div
            class="flex flex-col items-stretch gap-1.5 isolate top-9 -left-4 absolute px-4 py-2 rounded-xl shadow-lg bg-linear-180 dark:from-neutral-800 dark:to-neutral-900 ring dark:ring-white/15 min-w-72"
        >
            {@render children()}
        </div>
    {/if}
</div>
