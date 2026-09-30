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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 3.66667C5 2.19391 6.19391 1 7.66667 1H25C26.4728 1 27.6667 2.19391 27.6667 3.66667V29C27.6667 29.4816 27.4069 29.9259 26.9872 30.162C26.5675 30.3981 26.0529 30.3896 25.6413 30.1397L16.3333 24.4876L7.02537 30.1397C6.61371 30.3896 6.09921 30.3981 5.67948 30.162C5.25973 29.9259 5 29.4816 5 29V3.66667ZM25 3.66667H7.66667V26.6304L15.6413 21.788C16.0665 21.5299 16.6001 21.5299 17.0253 21.788L25 26.6304V3.66667Z"
        class="fill-neutral-900! dark:fill-neutral-200! {className}"
    />
</svg>
