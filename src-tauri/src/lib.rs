mod commands;
mod config;
mod store;

pub use crate::store::Store;
use std::sync::Mutex;
use tauri::{Builder, Manager};
use tauri_plugin_log;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    Builder::default()
        .setup(|app| {
            app.manage(Mutex::new(Store::default()));
            // let window = app.get_webview_window("main").unwrap();
            // ui::setup_window_effects(&window).expect("Failed to apply window effects");

            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_log::Builder::new().build())
        .manage(Store::new())
        .invoke_handler(tauri::generate_handler![
            commands::set_is_menu_bar_open,
            commands::get_is_menu_bar_open,
            commands::set_registered_hotkeys,
            commands::get_registered_hotkeys,
            commands::create_shortcut,
            commands::rust_info,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
