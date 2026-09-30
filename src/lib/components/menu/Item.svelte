<script lang="ts">
    import { Arrow } from "$lib/icons";
    import { windowStore } from "$lib/runes/window.svelte";

    let {
        label,
        shortcut = "UNASSIGNED",
        toggle = false,
        value = undefined,
        submenu = false,
        child = false,
        padDecoration = false,
    } = $props();
</script>

<button
    class={`relative flex items-center justify-between w-full gap-8 ${
        submenu ? "" : "py-1.5 px-2.5 hover:dark:bg-neutral-600 rounded"
    }`}
    onmouseenter={() => {
      if (!submenu && !child) {
        windowStore.setActiveSubmenu("");
      }
    }}
>
    <p class="text-sm font-normal text-nowrap">{label}</p>
    <div
        class={`flex items-center justify-end ${submenu ? "flex-row-reverse" : ""}`}
    >
        <p class="font-normal text-neutral-400 text-nowrap">
            {shortcut !== "UNASSIGNED" ? shortcut : ""}
            {#if !toggle && value !== undefined}
                <span class="font-bold">{value}</span>
            {/if}
        </p>
        {#if padDecoration}
            <span class="aspect-square w-6 flex items-center justify-center">
                {#if toggle && value === undefined}
                    <Arrow size={16} orientation="right" />
                {/if}
            </span>
        {/if}
    </div>
</button>
