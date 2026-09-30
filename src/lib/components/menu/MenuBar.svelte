<script lang="ts">
    import { Menu } from "$lib/icons";
    import { info } from "@tauri-apps/plugin-log";
    import { invoke } from "@tauri-apps/api/core";
    import NameButton from "./NameButton.svelte";
    import Item from "./Item.svelte";
    import Separator from "./Separator.svelte";
    import Submenu from "./Submenu.svelte";
    import { windowStore } from "$lib/runes/window.svelte";
</script>

<div class="relative {windowStore.getOs() === 'macos' ? 'hidden' : ''}">
    {#if windowStore.getIsMenuBarOpen()}
        <div class="relative flex px-2 gap-4 w-full h-full">
            <NameButton label="Qwill" mnemonic="Q">
                <Item label="About Qwill" />
                <Item label="Check for Updates" />
                <Separator />
                <Item
                    label="Editor Settings"
                    shortcut="Ctrl + Alt + Shift + S"
                />
                <Item
                    label="Language Properties"
                    shortcut="Ctrl + Alt + Shift + P"
                />
                <Item label="Keyboard Bindings" shortcut="Ctrl + K  Ctrl + B" />
                <Separator />
                <Item label="Select Theme" />
                <Separator />
                <Item label="Close Qwill" shortcut="Ctrl + Q" />
            </NameButton>
            <NameButton label="File" mnemonic="F">
                <Item label="New" shortcut="Ctrl + N" padDecoration />
                <Separator />
                <Item label="Open" shortcut="Ctrl + O" padDecoration />
                <Submenu label="Open Recent" shortcut="Ctrl + Shift + O">
                    <p
                        class="text-neutral-600 select-none text-nowrap text-left font-normal px-1.5"
                    >
                        Open a language to display recent files.
                    </p>
                </Submenu>
                <Separator />
                <Item label="Save" shortcut="Ctrl + S" padDecoration />
                <Item label="Save As" shortcut="Ctrl + Shift + S" padDecoration />
                <Separator />
                <Item label="Close Tab" shortcut="Ctrl + F4" padDecoration />
                <Item label="Close Project" padDecoration />
                <Item label="Close Window" shortcut="Ctrl + W" padDecoration />
            </NameButton>
            <NameButton label="Edit" mnemonic="E">
                <Item label="Undo" shortcut="Ctrl + Z" />
                <Item label="Redo" shortcut="Ctrl + Shift + Z" />
                <Separator />
                <Item label="Cut" shortcut="Ctrl + X" />
                <Item label="Copy" shortcut="Ctrl + C" />
                <Item label="Paste" shortcut="Ctrl + V" />
                <Separator />
                <Item label="Select All" shortcut="Ctrl + A" />
                <Item label="Find" shortcut="Ctrl + F" />
                <Item label="Find in Project" shortcut="Ctrl + Shift + F" />
            </NameButton>
            <NameButton label="Tools" mnemonic="T">
                <Submenu label="Import">
                    <Item label="Import from PDF" child padDecoration />
                    <Item label="Import from ODS (OpenDocument Spreadsheet)" child padDecoration />
                    <Item
                        label="Import Lexicon"
                        shortcut="Ctrl + Alt + Shift + I"
                        child
                        padDecoration
                    />
                </Submenu>
                <Submenu label="Export">
                    <Item label="Export to PDF" child padDecoration />
                    <Item label="Export to ODS (OpenDocument Spreadsheet)" child padDecoration />
                    <Item
                        label="Export Lexicon As"
                        shortcut="Ctrl + Shift + L"
                        child
                        padDecoration
                    />
                    <Item label="Export As " shortcut="Ctrl + Shift + E" child padDecoration />
                </Submenu>
                <Separator />
                <Item label="Statistics" shortcut="Alt + 9" padDecoration />
                <Item label="Evolution" shortcut="Alt + 8" padDecoration />
                <Submenu label="Load Swadesh List">
                    <Item label="Swadesh 100" child padDecoration />
                    <Item label="Swadesh 207" child padDecoration />
                    <Item label="Swadesh Yakhontov" child padDecoration />
                    <Separator />
                    <Item label="Create Custom List..." child padDecoration />
                    <p
                        class="text-sm text-neutral-600 select-none text-nowrap text-left font-normal px-2"
                    >
                        (No custom lists yet)
                    </p>
                </Submenu>
                <Separator />
                <Item label="Check Language" shortcut="F7" padDecoration />
                <Item label="Unpack Language" padDecoration />
                <Item label="Pack Language" padDecoration />
            </NameButton>
            <NameButton label="View" mnemonic="V">
                <Item label="Zoom In" shortcut="Ctrl + +" />
                <Item label="Zoom Out" shortcut="Ctrl + -" />
                <Item label="Reset Zoom" shortcut="Ctrl + 0" />
                <Item label="Auto Resize Window" shortcut="Ctrl + Alt + R" />
                <Item label="Font Size" value={"12pt"} />
                <Item label="Fullscreen" shortcut="F11" />
            </NameButton>
            <NameButton label="Help" mnemonic="H">
                <Item label="Documentation" shortcut="F1" padDecoration />
                <Item label="Repository" padDecoration />
                <Submenu label="Example Languages">
                    <Item label="Ilothwii" child padDecoration />
                    <Item label="Oqolaawak" child padDecoration />
                    <Item label="Nekāchti" child padDecoration />
                </Submenu>
                <Separator />
                <Item label="Report Issue" shortcut="F12" padDecoration />
                <Item label="Request Feature" padDecoration />
                <Item label="Special Thanks and Credits" padDecoration />
            </NameButton>
        </div>
    {:else}
        <button
            class="cursor-pointer p-1 hover:bg-neutral-700/50 rounded flex items-center"
            onclick={() => {
                windowStore.setIsMenuBarOpen(true);
                invoke("set_is_menu_bar_open", { value: true });
            }}
        >
            <Menu size={16} />
        </button>
    {/if}
</div>
