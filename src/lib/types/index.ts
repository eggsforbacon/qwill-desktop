export namespace MenuBar {
  export type Names = "Qwill" | "File" | "Edit" | "Tools" | "View" | "Help";
  export type SubmenuNames =
    | "Open Recent"
    | "Import"
    | "Export"
    | "Load Swadesh List"
    | "Example Languages";
}

export namespace Hotkeys {
  export type Hotkey = {
    command: string;
    name: string;
    keys: string[];
    label: string;
    mutable: boolean;
  };

  export const ACTIONS: string[] = [
    "editor_settings",
    "language_properties",
    "keyboard_shortcuts",
    "close_qwill",
    "new",
    "open",
    "open_recent",
    "save",
    "save_as",
    "close_tab",
    "close_window",
    "undo",
    "redo",
    "cut",
    "copy",
    "paste",
    "select_all",
    "find",
    "find_in_project",
    "import_lexicon",
    "export_lexicon_as",
    "export_as",
    "statistics",
    "evolution",
    "check_language",
    "auto_resize",
    "zoom_in",
    "zoom_out",
    "reset_zoom",
    "fullscreen",
    "documentation",
    "report_issue",
  ] as const;

  export type Action = (typeof ACTIONS)[number];
}
