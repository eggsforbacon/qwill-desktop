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
        d="M16 3V29M16 23C12.13 23 9 19.87 9 16C9 12.13 12.13 9 16 9M6.81 6.81L8.93 8.93M3 16H6M6.81 25.19L8.93 23.07M16 12.55C17.2 10.43 19.48 9 22.09 9C22.25 9 22.4 9.01 22.56 9.02C20.89 9.9 19.76 11.65 19.76 13.66C19.76 16.56 22.11 18.91 25.01 18.91C26.61 18.91 28.04 18.19 29 17.06C28.48 20.43 25.59 23 22.09 23C19.48 23 17.2 21.57 16 19.45"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-neutral-900! dark:stroke-neutral-200! {className}"
    />
</svg>
