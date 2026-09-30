<script lang="ts">
    import "../app.css";

    import Titlebar from "$lib/components/Titlebar.svelte";
    import { onMount } from "svelte";
    import { hotkeysStore } from "$lib/runes/hotkeys.svelte";
    import { windowStore } from "$lib/runes/window.svelte";
    import { handleKeyDown, handleKeyUp } from "$lib/utils/hotkeys.svelte";
    import StatusBar from "$lib/components/status/StatusBar.svelte";
    import { invoke } from "@tauri-apps/api/core";

    onMount(async () => {
        await hotkeysStore.initHotkeys();
        invoke<string>("get_os").then((os) => windowStore.setOs(os));
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
    class="relative bg-neutral-300/50 dark:bg-neutral-800/50 h-screen flex flex-col items-center justify-center p-6 gap-4"
>
    <Titlebar />
    <div
        class="aspect-square w-96 text-9xl text-center inline-flex items-center debug"
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
    <StatusBar />
</main>

<style>
    :global(body, html) {
        background: transparent
    }
</style>
