<script lang="ts">
    import "../app.css";

    import Titlebar from "$lib/components/Titlebar.svelte";
    import { windowStore } from "$lib/runes/window.svelte";
</script>

<main
    class="relative bg-neutral-300 dark:bg-neutral-800 h-screen flex flex-col items-center justify-center p-6 gap-4"
>
    <Titlebar />
    <!-- <div class="aspect-square w-96 absolute bg-amber-900 top-6 left-8"></div> -->
    {#if windowStore.getIsMenuBarOpen()}
        <span
            aria-hidden="true"
            class="fixed w-full h-full"
            onclick={() => windowStore.setIsMenuBarOpen(false)}
        ></span>
    {/if}
</main>
