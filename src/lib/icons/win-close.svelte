<script lang="ts">
    let { size = 800, class: className = "" } = $props();
</script>

<svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M6 26L26 6M26 26L6 6"
        stroke-width="2"
        stroke-linecap="square"
        class="stroke-neutral-900! dark:stroke-neutral-200! {className}"
    />
</svg>
