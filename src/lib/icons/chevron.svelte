<script lang="ts">
    let {
        size = 800,
        class: className = "",
        orientation = "right",
    }: {
        size: number;
        class: string;
        orientation: "left" | "right" | "up" | "down";
    } = $props();
</script>

<svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
>
    {#if orientation === "up"}
        <path
            d="M7 20.3333L16.3333 11L25.6667 20.3333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-neutral-900! dark:stroke-neutral-200! {className}"
        />
    {:else if orientation === "right"}
        <path
            d="M10.6667 7L20 16.3333L10.6667 25.6667"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-neutral-900! dark:stroke-neutral-200! {className}"
        />
    {:else if orientation === "down"}
        <path
            d="M26 10.6667L16.6667 20L7.33333 10.6667"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-neutral-900! dark:stroke-neutral-200! {className}"
        />
    {:else if orientation === "left"}
        <path
            d="M20.3333 26L11 16.6667L20.3333 7.33333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-neutral-900! dark:stroke-neutral-200! {className}"
        />
    {/if}
</svg>
