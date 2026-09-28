#[derive(Default)]
pub struct Store {
    pub is_menu_bar_open: bool,
}

impl Store {
    pub fn new() -> Self {
        Self::default()
    }
}
