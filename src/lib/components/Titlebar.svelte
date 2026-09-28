<script lang="ts">
    import "/src/app.css";
    import { Close, Maximize, Minimize, TabWindow } from "$lib/icons";
    import AppIcon from "../../../src-tauri/icons/32x32.png";
    import { onMount } from "svelte";

    import { windowStore } from "$lib/runes/window.svelte";
    import MenuBar from "./menu/MenuBar.svelte";

    onMount(async () => {
        const appWindow = windowStore.getAppWindow();

        appWindow.listen("tauri://resize", async () => {
            windowStore.setIsMaximized(await appWindow.isMaximized());
        });
    });
</script>

<header
    class="z-50 bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 font-bold select-none flex items-stretch justify-between fixed top-0 left-0 right-0"
>
    <div class="flex items-center gap-3 px-3">
        <img src={AppIcon} alt="Qwill" class="h-4 w-4" />
        <MenuBar />
        <h1 class="text-sm {windowStore.getIsMenuBarOpen() ? 'opacity-0' : ''}">Qwill</h1>
    </div>
    <div data-tauri-drag-region class="w-full"></div>
    <ul class="flex items-stretch">
        <li
            class="appearance-none p-0 m-0 border-none inline-flex justify-center items-center bg-transparent"
        >
            <button
                onclick={windowStore.minimize}
                class="py-2.5 px-3 hover:bg-black/5 dark:hover:bg-white/5"
                aria-labelledby="minimize"
            >
                <Minimize size={14} />
            </button>
            <button
                onclick={windowStore.toggleMaximize}
                class="py-2.5 px-3 hover:bg-black/5 dark:hover:bg-white/5"
                title="maximize"
            >
                {#if windowStore.getIsMaximized()}
                    <TabWindow size={12} />
                {:else}
                    <Maximize size={14} />
                {/if}
            </button>
            <button
                onclick={windowStore.close}
                class="py-2.5 px-3 hover:bg-[#e81420]"
                title="close"
            >
                <Close size={14} />
            </button>
        </li>
    </ul>
</header>
