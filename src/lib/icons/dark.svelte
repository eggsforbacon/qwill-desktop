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
        d="M12 13V15M11 14H13M17 4C16.73 4 16.46 4.02 16.2 4.04C19.05 5.55 21 8.55 21 12C21 16.97 16.97 21 12 21C9.26 21 6.81 19.77 5.15 17.83C6.04 23.59 11 28 17 28C23.63 28 29 22.63 29 16C29 9.37 23.63 4 17 4ZM11 8C8.42 8.62 7.62 9.42 7 12C6.38 9.42 5.58 8.62 3 8C5.58 7.38 6.38 6.58 7 4C7.62 6.58 8.42 7.38 11 8Z"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-neutral-900! dark:stroke-neutral-200! {className}"
    />
</svg>
