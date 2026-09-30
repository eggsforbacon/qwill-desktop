<script lang="ts">
    import "/src/app.css";
    import {
        MacMaximize,
        MacMinimize,
        MacClose,
        WinMaximize,
        WinMinimize,
        WinRestore,
        WinClose,
    } from "$lib/icons";
    import AppIcon from "../../../src-tauri/icons/32x32.png";
    import TrafficRed from "../../images/macos/Close_Button.png";
    import TrafficYellow from "../../images/macos/Minimize_Button.png";
    import TrafficGreen from "../../images/macos/Maximize_Button.png";
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
    class="z-50 text-neutral-900 dark:text-neutral-100 font-bold select-none flex items-stretch fixed top-0 left-0 right-0 {windowStore.getOs() === 'macos' ? 'flex-row-reverse justify-start' : 'justify-between'}"
>
    <div class="flex items-center gap-3 px-3 w-full">
        <img src={AppIcon} alt="Qwill" class="h-4 w-4" />
        <MenuBar />
        <h1
            class="text-sm font-normal {windowStore.getIsMenuBarOpen()
                ? 'opacity-0'
                : ''}"
        >
            Qwill
        </h1>
        <div data-tauri-drag-region class="w-full h-full"></div>
    </div>
    <ul class="flex items-stretch {windowStore.getOs() === 'macos' ? 'gap-2 px-4 py-2' : ''}">
        <li
            class="appearance-none p-0 m-0 border-none inline-flex justify-center items-center bg-transparent"
        >
            {#if windowStore.getOs() === "macos"}
                <button
                    onclick={windowStore.close}
                    class="rounded-full aspect-square w-4.5 relative flex items-center hover:bg-red-200"
                    title="Close"
                >
                    <div class="relative w-full h-full">
                        <img
                            src={TrafficRed}
                            alt="close"
                            class="w-full h-full object-cover"
                        />
                        <div
                            class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                        >
                            <MacClose size={17} />
                        </div>
                    </div>
                </button>
            {:else}
                <button
                    onclick={windowStore.minimize}
                    class="py-2.5 px-3 hover:bg-black/5 dark:hover:bg-white/5"
                    aria-labelledby="Minimize"
                >
                    <WinMinimize size={14} />
                </button>
            {/if}
        </li>
        <li
            class="appearance-none p-0 m-0 border-none inline-flex justify-center items-center bg-transparent"
        >
            {#if windowStore.getOs() === "macos"}
                <button
                    onclick={windowStore.minimize}
                    class="rounded-full aspect-square w-4.5 relative flex items-center hover:bg-red-200"
                    title="Minimize"
                >
                    <div class="relative w-full h-full">
                        <img
                            src={TrafficYellow}
                            alt="close"
                            class="w-full h-full object-cover"
                        />
                        <div
                            class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                        >
                            <MacMinimize size={17} />
                        </div>
                    </div>
                </button>
            {:else}
                <button
                    onclick={windowStore.toggleMaximize}
                    class="py-2.5 px-3 hover:bg-black/5 dark:hover:bg-white/5"
                    title="{windowStore.getIsMaximized() ? 'Restore' : 'Maximize'}"
                >
                    {#if windowStore.getIsMaximized()}
                        <WinRestore size={14} />
                    {:else}
                        <WinMaximize size={14} />
                    {/if}
                </button>
            {/if}
        </li>
        <li
            class="appearance-none p-0 m-0 border-none inline-flex justify-center items-center bg-transparent"
        >
            {#if windowStore.getOs() === "macos"}
                <button
                    onclick={windowStore.toggleMaximize}
                    class="rounded-full aspect-square w-4.5 relative flex items-center hover:bg-red-200"
                    title="Maximize"
                >
                    <div class="relative w-full h-full">
                        <img
                            src={TrafficGreen}
                            alt="close"
                            class="w-full h-full object-cover"
                        />
                        <div
                            class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                        >
                            <MacMaximize size={17} />
                        </div>
                    </div>
                </button>
            {:else}
                <button
                    onclick={windowStore.close}
                    class="py-2.5 px-3 hover:bg-[#e81420]"
                    title="Close"
                >
                    <WinClose size={14} />
                </button>
            {/if}
        </li>
    </ul>
</header>
