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
        d="M7.6 4C5.61177 4 4 5.61177 4 7.6V24.4C4 26.3882 5.61177 28 7.6 28H24.4C26.3882 28 28 26.3882 28 24.4V7.6C28 5.61177 26.3882 4 24.4 4H7.6ZM7.6 6.4H24.4C25.0626 6.4 25.6 6.93726 25.6 7.6V24.4C25.6 25.0626 25.0626 25.6 24.4 25.6H7.6C6.93726 25.6 6.4 25.0626 6.4 24.4V7.6C6.4 6.93726 6.93726 6.4 7.6 6.4Z"
        class="fill-neutral-900! dark:fill-neutral-200! {className}"
    />
</svg>
