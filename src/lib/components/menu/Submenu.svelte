<script lang="ts">
    import { Arrow } from "$lib/icons";
    import Item from "./Item.svelte";
    import { windowStore } from "$lib/runes/window.svelte";

    let { children, label, shortcut = "UNASSIGNED" } = $props();

</script>

<button
    onmouseenter={() => windowStore.setActiveSubmenu(label)}
    class="flex w-full items-stretch relative py-1.5 px-2.5 hover:dark:bg-neutral-600 rounded"
>
    <Item {label} {shortcut} submenu={true} />
    <div class="aspect-square w-6 flex items-center justify-center">
        <Arrow size={16} orientation="right" />
        {#if windowStore.getActiveSubmenu() === label}
            <div
                class="flex flex-col items-stretch gap-.5 top-1/2 -translate-y-[calc(50%-0.75rem)] left-[calc(100%+1.25rem)] absolute px-4 py-2 rounded-xl shadow-lg bg-linear-180 dark:from-neutral-800 dark:to-neutral-900 ring dark:ring-white/15 min-w-72"
            >
                {@render children()}
            </div>
        {/if}
    </div>
</button>
