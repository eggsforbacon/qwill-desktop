<script lang="ts">
    let { size = 800, class: className = "" } = $props();
</script>

<svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
>
    <rect
        x="4"
        y="15"
        width="24"
        height="2"
        fill="white"
        class="fill-neutral-900! dark:fill-neutral-200! {className}"
    />
</svg>
