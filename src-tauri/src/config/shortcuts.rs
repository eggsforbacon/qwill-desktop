use std::collections::HashMap;

#[derive(serde::Deserialize, serde::Serialize)]
pub struct ShortcutConfig {
    pub shortcuts: Vec<Shortcut>,
}

impl ShortcutConfig {
    pub fn new(shortcuts: Vec<Shortcut>) -> Self {
        Self { shortcuts }
    }

    pub fn get_shortcuts(&self) -> &[Shortcut] {
        &self.shortcuts
    }
}

#[derive(serde::Deserialize, serde::Serialize, Clone)]
pub struct Shortcut {
    pub command: String,
    pub keys: Vec<String>,
    pub label: String,
    pub mutable: bool,
}

impl Shortcut {
    pub fn new(command: String, keys: Vec<String>, label: String, mutable: bool) -> Self {
        Self {
            command,
            keys,
            label,
            mutable,
        }
    }

    pub fn get_command(&self) -> &str {
        &self.command
    }

    pub fn get_keys(&self) -> &[String] {
        &self.keys
    }

    pub fn reassign_keys(&mut self, keys: Vec<String>) {
        if !self.mutable {
            return;
        }
        self.keys = keys;
    }

    pub fn get_label(&self) -> &str {
        &self.label
    }

    pub fn reassign_label(&mut self, label: String) {
        if !self.mutable {
            return;
        }
        self.label = label;
    }

    pub fn is_mutable(&self) -> bool {
        self.mutable
    }
}

pub fn parse_config() -> HashMap<String, Shortcut> {
    let data = std::fs::read_to_string("src/../data/gs.json").unwrap();
    let json: ShortcutConfig = serde_json::from_str(&data).unwrap();
    json.get_shortcuts()
        .into_iter()
        .map(|s| (s.get_command().to_string(), s.clone()))
        .collect::<HashMap<_, _>>()
}

pub fn parse_shortcuts(shortcuts: &[Shortcut]) -> bool {
    let json = serde_json::to_string(shortcuts).unwrap();
    if !json.is_empty() {
        std::fs::write("src/../data/gs.json", json).unwrap();
        true
    } else {
        false
    }
}
