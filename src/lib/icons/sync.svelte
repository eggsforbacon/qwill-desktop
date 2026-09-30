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
        d="M25.0332 12.9467C25.4423 13.9965 25.6667 15.1388 25.6667 16.3333C25.6667 21.488 21.488 25.6667 16.3333 25.6667H12.3333M16.3333 29.6667L12.3333 25.6667L16.3333 21.6667M7.63343 19.72C7.22443 18.6701 7 17.5279 7 16.3333C7 11.1787 11.1787 7 16.3333 7H20.3333M16.3333 11L20.3333 7L16.3333 3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-neutral-900! dark:stroke-neutral-200! {className}"
    />
</svg>
