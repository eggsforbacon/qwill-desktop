import type { MenuBar } from "$lib/types";
import { getCurrentWindow } from "@tauri-apps/api/window";

function createWindow() {
  let isMaximized = $state(false);
  let isMenuBarOpen = $state(false);
  let activeName = $state<MenuBar.Names>("Qwill");
  let activeSubmenu = $state<MenuBar.SubmenuNames | "">("");
  let appWindow = getCurrentWindow();

  function minimize() {
      appWindow.minimize();
  }

  function toggleMaximize() {
      appWindow.toggleMaximize();
      isMaximized = !isMaximized;
  }

  function close() {
      appWindow.close();
  }

  return {
    setIsMaximized: (value: boolean) => isMaximized = value,
    getIsMaximized: () => isMaximized,
    setIsMenuBarOpen: (value: boolean) => isMenuBarOpen = value,
    getIsMenuBarOpen: () => isMenuBarOpen,
    setActiveName: (value: MenuBar.Names) => activeName = value,
    getActiveName: () => activeName,
    setActiveSubmenu: (value: MenuBar.SubmenuNames | "") => activeSubmenu = value,
    getActiveSubmenu: () => activeSubmenu,
    getAppWindow: () => appWindow,
    minimize,
    toggleMaximize,
    close,
  };
}

export const windowStore = createWindow();
