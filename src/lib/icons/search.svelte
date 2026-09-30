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
        d="M26.3333 26.3333L18.3333 18.3333M19.6667 12.3333C19.6667 16.3835 16.3835 19.6667 12.3333 19.6667C8.28324 19.6667 5 16.3835 5 12.3333C5 8.28324 8.28324 5 12.3333 5C16.3835 5 19.6667 8.28324 19.6667 12.3333Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        class="stroke-neutral-900! dark:stroke-neutral-200! {className}"
    />
</svg>
