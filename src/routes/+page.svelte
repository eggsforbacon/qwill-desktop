<script lang="ts">
    import "../app.css";

    import Titlebar from "$lib/components/Titlebar.svelte";
    import { onMount } from "svelte";
    import { hotkeysStore } from "$lib/runes/hotkeys.svelte";
    import { windowStore } from "$lib/runes/window.svelte";
    import { handleKeyDown, handleKeyUp } from "$lib/utils/hotkeys.svelte";

    onMount(async () => {
        await hotkeysStore.initHotkeys();
    });

    $effect(() => {
        if (!hotkeysStore.isLoaded) return;

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);


        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    });
</script>

<main
    class="relative bg-neutral-300 dark:bg-neutral-800 h-screen flex flex-col items-center justify-center p-6 gap-4"
>
    <Titlebar />
    <div
        class="aspect-square w-96 text-9xl text-center inline-flex items-center"
    >
        {hotkeysStore.getShortcutString()}
    </div>
    {#if windowStore.getIsMenuBarOpen()}
        <span
            aria-hidden="true"
            class="fixed w-full h-full"
            onclick={() => windowStore.setIsMenuBarOpen(false)}
        ></span>
    {/if}
</main>
