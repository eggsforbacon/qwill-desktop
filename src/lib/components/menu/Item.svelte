<script lang="ts">
    import { ArrowRight } from "$lib/icons";

    let {
        label,
        shortcut = "UNASSIGNED",
        toggle = false,
        value = undefined,
    } = $props();
</script>

<button class="flex items-center justify-between w-full gap-8">
    <p class="text-sm font-normal text-nowrap">{label}</p>
    <div class="flex items-center justify-end">
        <p class="font-normal text-neutral-400 text-nowrap">
            {shortcut !== "UNASSIGNED" ? shortcut : ""}
        </p>
        <span class="aspect-square w-6 flex items-center justify-center">
            {#if toggle && value === undefined}
                <ArrowRight size={16} />
            {:else if !toggle && value !== undefined}
                <div>
                    {value}
                </div>
            {/if}
        </span>
    </div>
</button>
