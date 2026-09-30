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
        d="M16 3V6M6.81 6.81L8.93 8.93M3 16H6M6.81 25.19L8.93 23.07M16 29V26M25.19 25.19L23.07 23.07M29 16H26M25.19 6.81L23.07 8.93M23 16C23 19.866 19.866 23 16 23C12.134 23 9 19.866 9 16C9 12.134 12.134 9 16 9C19.866 9 23 12.134 23 16Z"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-neutral-900! dark:stroke-neutral-200! {className}"
    />
</svg>
