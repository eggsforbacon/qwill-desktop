import type { Hotkeys } from "$lib/types";
import { invoke } from "@tauri-apps/api/core";

export const KEY_PRIORITY: Record<string, number> = {
  Ctrl: 1,
  Meta: 1,
  Alt: 2,
  Shift: 3,
};

export const hotkeysStore = $state({
  map: {} as Record<string, Hotkeys.Hotkey>,
  isLoaded: false,
  pressedKeys: [] as string[],

  getPressedKeys() {
    return this.pressedKeys;
  },
  updatePressedKeys(key: string) {
    if (this.pressedKeys.includes(key)) return;
    const updatedKeys = [...this.pressedKeys, key];
    updatedKeys.sort((a, b) => (KEY_PRIORITY[a] ?? 4) - (KEY_PRIORITY[b] ?? 4));
    this.pressedKeys = updatedKeys;
  },
  async initHotkeys() {
    try {
      this.map = await invoke<Record<string, Hotkeys.Hotkey>>(
        "get_registered_hotkeys",
      );
      this.isLoaded = true;
    } catch (error) {
      console.error("Failed to load hotkeys:", error);
    }
  },
  async updateHotkey(commandId: string, newKeys: string[]) {
    this.map[commandId] = { ...this.map[commandId], keys: newKeys };
    await invoke("set_registered_hotkeys", { map: this.map });
  },
  clearPressedKeys() {
    this.pressedKeys = [];
  },
  getShortcutString() {
    return this.pressedKeys.join(" + ");
  },
});
