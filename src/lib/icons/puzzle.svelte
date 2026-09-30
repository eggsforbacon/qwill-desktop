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
        d="M16.3333 3L21.1333 7.8C24.3333 -0.6 33.2667 8.33333 24.8667 11.5333L29.6667 16.3333L24.8667 21.1333C21.6667 12.7333 12.7333 21.6667 21.1333 24.8667L16.3333 29.6667L11.5333 24.8667C8.33333 33.2667 -0.6 24.3333 7.8 21.1333L3 16.3333L7.8 11.5333C11 19.9333 19.9333 11 11.5333 7.8L16.3333 3Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-neutral-900! dark:stroke-neutral-200! {className}"
    />
</svg>
