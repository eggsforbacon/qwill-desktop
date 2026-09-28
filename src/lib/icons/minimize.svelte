<script lang="ts">
    let { size = 800, className = "fill-neutral-900 dark:fill-neutral-200" } = $props();
</script>

<svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
        class="{className}"
    />
</svg>
