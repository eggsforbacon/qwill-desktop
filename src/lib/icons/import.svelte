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
        d="M12.0933 15.2399L15.5065 18.6532L18.9199 15.2399M15.5067 5V18.56M26.3333 15.9065C26.3333 21.7999 22.3333 26.5732 15.6667 26.5732C9 26.5732 5 21.7999 5 15.9065"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-neutral-900! dark:stroke-neutral-200! {className}"
    />
</svg>
