use std::sync::Mutex;
use tauri::State;

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
