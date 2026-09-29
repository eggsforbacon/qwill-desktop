use std::collections::HashMap;
use std::sync::Mutex;
use tauri::State;
use tauri_plugin_log::log::info;

use crate::config;
use crate::store::Store;

#[tauri::command]
pub fn set_is_menu_bar_open(state: State<'_, Mutex<Store>>, is_open: bool) -> bool {
    let mut store = state.lock().unwrap();
    store.is_menu_bar_open = is_open;
    store.is_menu_bar_open
}

#[tauri::command]
pub fn get_is_menu_bar_open(state: State<'_, Mutex<Store>>) -> bool {
    let store = state.lock().unwrap();
    store.is_menu_bar_open
}

#[tauri::command]
pub fn get_registered_hotkeys() -> Result<HashMap<String, config::shortcuts::Shortcut>, String> {
    Ok(config::parse_config())
}

#[tauri::command]
pub fn set_registered_hotkeys(
    map: HashMap<String, config::shortcuts::Shortcut>,
) -> Result<(), String> {
    let shortcuts: Vec<config::shortcuts::Shortcut> =
        map.into_iter().map(|(_, shortcut)| shortcut).collect();
    config::parse_shortcuts(&shortcuts);
    Ok(())
}

#[tauri::command]
pub fn create_shortcut(
    command: String,
    description: String,
    keys: Vec<String>,
    label: String,
    mutable: bool,
) -> config::shortcuts::Shortcut {
    let shortcut = config::shortcuts::Shortcut::new(command, keys, label, mutable);
    shortcut
}

#[tauri::command]
pub fn rust_info(message: String) {
    info!("INFO(R) >>> {:?}", message);
}
