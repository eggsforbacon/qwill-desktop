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

<div class="relative">
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
                <Item label="New" shortcut="Ctrl + N" />
                <Separator />
                <Item label="Open" shortcut="Ctrl + O" />
                <Submenu label="Open Recent" shortcut="Ctrl + Shift + O">
                    <p
                        class="text-neutral-600 select-none text-nowrap text-left font-normal"
                    >
                        Open a language to display recent files.
                    </p>
                </Submenu>
                <Separator />
                <Item label="Save" shortcut="Ctrl + S" />
                <Item label="Save As" shortcut="Ctrl + Shift + S" />
                <Separator />
                <Item label="Close Tab" shortcut="Ctrl + F4" />
                <Item label="Close Project" />
                <Item label="Close Window" shortcut="Ctrl + W" />
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
                    <Item label="Import from PDF" />
                    <Item label="Import from ODS (OpenDocument Spreadsheet)" />
                    <Item
                        label="Import Lexicon"
                        shortcut="Ctrl + Alt + Shift + I"
                    />
                </Submenu>
                <Submenu label="Export">
                    <Item label="Export to PDF" />
                    <Item label="Export to ODS (OpenDocument Spreadsheet)" />
                    <Item
                        label="Export Lexicon As"
                        shortcut="Ctrl + Shift + L"
                    />
                    <Item label="Export As " shortcut="Ctrl + Shift + E" />
                </Submenu>
                <Separator />
                <Item label="Statistics" shortcut="Alt + 9" />
                <Item label="Evolution" shortcut="Alt + 8" />
                <Submenu label="Load Swadesh List">
                    <Item label="Swadesh 100" />
                    <Item label="Swadesh 207" />
                    <Item label="Swadesh Yakhontov" />
                    <Separator />
                    <Item label="Create Custom List..." />
                    <p
                        class="text-sm text-neutral-600 select-none text-nowrap text-left font-normal"
                    >
                        (No custom lists yet)
                    </p>
                </Submenu>
                <Separator />
                <Item label="Check Language" shortcut="F7" />
                <Item label="Unpack Language" />
                <Item label="Pack Language" />
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
                <Item label="Documentation" shortcut="F1" />
                <Item label="Repository" />
                <Submenu label="Example Languages">
                    <Item label="Ilothwii" />
                    <Item label="Oqolaawak" />
                    <Item label="Nekāchti" />
                </Submenu>
                <Separator />
                <Item label="Report Issue" shortcut="F12" />
                <Item label="Request Feature" />
                <Item label="Special Thanks and Credits" />
            </NameButton>
        </div>
    {:else}
        <button
            class="cursor-pointer p-1 hover:bg-neutral-700/50 rounded"
            onclick={() => {
                windowStore.setIsMenuBarOpen(true);
                invoke("set_is_menu_bar_open", { value: true });
            }}
        >
            <Menu size={14} className="w-6 h-6" />
        </button>
    {/if}
</div>
