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
        d="M16.3333 25.6667V7M25.6667 16.3333H7"
        stroke-width="2"
        stroke-linecap="round"
        class="stroke-neutral-900! dark:stroke-neutral-200! {className}"
    />
</svg>
