<script lang="ts">
    import { ArrowRight } from "$lib/icons";
    import Item from "./Item.svelte";
    import { windowStore } from "$lib/runes/window.svelte";

    let { children, label, shortcut = "UNASSIGNED" } = $props();

</script>

<button
    onmouseenter={() => windowStore.setActiveSubmenu(label)}
    class="flex w-full items-stretch relative"
>
    <Item {label} {shortcut} />
    <div class="aspect-square w-6 flex items-center justify-center">
        <ArrowRight size={16} />
        {#if windowStore.getActiveSubmenu() === label}
            <div
                class="flex flex-col items-stretch gap-3 isolate top-1/2 -translate-y-[calc(50%-0.75rem)] left-[calc(100%+1.25rem)] absolute px-4 py-2 rounded-xl shadow-lg backdrop-blur-2xl bg-linear-180 dark:from-neutral-700/40 dark:to-neutral-800/40 ring dark:ring-white/15 min-w-72"
            >
                {@render children()}
            </div>
        {/if}
    </div>
</button>
