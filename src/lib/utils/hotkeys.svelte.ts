import { invoke } from "@tauri-apps/api/core";
import type { Hotkeys } from "../types";
import { hotkeysStore } from "$lib/runes/hotkeys.svelte";
import { windowStore } from "$lib/runes/window.svelte";

export function handleKeyDown(event: KeyboardEvent) {
  let keyName = event.key;
  if (keyName === " ") keyName = "Space";

  if (event.ctrlKey) hotkeysStore.updatePressedKeys("Ctrl");
  if (event.metaKey) hotkeysStore.updatePressedKeys("Meta");
  if (event.altKey) hotkeysStore.updatePressedKeys("Alt");
  if (event.shiftKey) hotkeysStore.updatePressedKeys("Shift");

  if (
    !["Control", "Meta", "Shift", "Alt"].includes(keyName) &&
    !hotkeysStore.getPressedKeys().includes(keyName.toUpperCase())
  ) {
    hotkeysStore.updatePressedKeys(keyName.toUpperCase());
  }
}

export function handleKeyUp(event: KeyboardEvent) {
  const shortcutString = hotkeysStore.getShortcutString();

  const action = Object.keys(hotkeysStore.map).find(
    (key) => hotkeysStore.map[key].label === shortcutString,
  );

  if (action) {
    event.preventDefault();
    executeAction(action as Hotkeys.Action);
  }
  hotkeysStore.clearPressedKeys();
}

function executeAction(action: Hotkeys.Action) {
  switch (action) {
    case "focus_menu_bar":
      break;
    case "editor_settings":
      invoke("rust_info", { message: "editor_settings" });
      break;
    case "language_properties":
      break;
    case "keyboard_shortcuts":
      break;
    case "close_qwill":
      break;
    case "new":
      break;
    case "open":
      break;
    case "open_recent":
      break;
    case "save":
      break;
    case "save_as":
      break;
    case "close_tab":
      break;
    case "close_window":
      break;
    case "undo":
      break;
    case "redo":
      break;
    case "cut":
      break;
    case "copy":
      break;
    case "paste":
      break;
    case "select_all":
      break;
    case "find":
      break;
    case "find_in_project":
      break;
    case "import_lexicon":
      break;
    case "export_lexicon_as":
      break;
    case "export_as":
      break;
    case "statistics":
      break;
    case "evolution":
      break;
    case "check_language":
      break;
    case "auto_resize":
      break;
    case "zoom_in":
      break;
    case "zoom_out":
      break;
    case "reset_zoom":
      break;
    case "fullscreen":
      break;
    case "documentation":
      break;
    case "report_issue":
      break;
    default:
      break;
  }
}
