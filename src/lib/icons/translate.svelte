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
        d="M7 11L13.6667 17.6667M5.66667 19L13.6667 11L16.3333 7M3 7H19M9.66667 3H11M17.5507 23H27.116M29.6667 28.3333L27.116 23L23.2956 15.012C22.9877 14.3684 22.8339 14.0465 22.6232 13.9448C22.4401 13.8564 22.2265 13.8564 22.0435 13.9448C21.8328 14.0465 21.6789 14.3684 21.3711 15.012L17.5507 23L15 28.3333"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-neutral-900! dark:stroke-neutral-200! {className}"
    />
</svg>
