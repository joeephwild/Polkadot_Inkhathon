#![cfg_attr(not(feature = "std"), no_std)]

#[ink::contract]
mod store_contract {
    use ink::prelude::string::String;
    use ink::prelude::vec::Vec;
    use ink::prelude::collections::BTreeMap;
    use ink::storage::Mapping;

    #[derive(Debug, Clone, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub struct App {
        uri: String,
        owner: AccountId,
        price: Balance,
        app_id: u128,
    }

    #[ink(storage)]
    pub struct StoreContract {
        all_app: Vec<App>,
        address_app_count: Mapping<AccountId, u64>,
        id_to_app: BTreeMap<u64, App>,
        app_count: u128,
        address_to_app: BTreeMap<AccountId, Vec<App>>,
    }

    #[ink(event)]
    pub struct AppUploaded {
        #[ink(topic)]
        app_id: u64,
        uri: String,
        owner: AccountId,
        price: Balance,
    }

    #[ink(event)]
    pub struct AppInstalled {
        #[ink(topic)]
        app_id: u64,
        buyer: AccountId,
        owner: AccountId,
        price: Balance,
    }

    impl StoreContract {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
                all_app: Vec::new(),
                address_app_count: Mapping::new(),
                id_to_app: BTreeMap::new(),
                app_count: 0,
                address_to_app: BTreeMap::new()
            }
        }

        #[ink(message)]
        pub fn upload_an_app(&mut self, _app_uri: String, _amount: Balance) -> u128 {
            let caller: ink::primitives::AccountId = self.env().caller();
            let mut count: u128 = self.app_count;

            // Create a new App instance
            let new_app: App = App {
                uri: _app_uri.clone(),
                owner: caller,
                price: _amount,
                app_id: count
            };
              
              // push new app to the all_app vec
            self.all_app.push(new_app.clone());
            
            count += 1;
            count
        }

        #[ink(message, payable)]
        pub fn install_app(&mut self, app_id: u64) {
            let caller: ink::primitives::AccountId = self.env().caller();
            let app: &App = self.id_to_app.get(&app_id).expect("App does not exist");
            assert!(self.env().transferred_value() >= app.price, "Insufficient Funds");
            assert_ne!(caller, app.owner, "Owner can't download");
            
            if self.env().transfer(app.owner, self.env().transferred_value()).is_err() {
                panic!("error transferring")
            }

            self.env().emit_event(AppInstalled {
                app_id,
                buyer: caller,
                owner: app.owner,
                price: app.price,
            });
        }

        #[ink(message)]
        pub fn get_app(&self, app_id: u64) -> Option<App> {
            self.id_to_app.get(&app_id).cloned()
        }

        #[ink(message)]
        pub fn get_all_apps(&self) -> Vec<App> {
            self.all_app.clone()
        }

        #[ink(message)]
        pub fn get_all_app_uris(&self) -> Vec<String> {
            self.all_app.iter().map(|app: &App| app.uri.clone()).collect()
        }

        #[ink(message)]
        pub fn get_user_app_uri(&self, user: AccountId, index: u64) -> Option<String> {
            let mut count = 0;
            for app in &self.all_app {
                if app.owner == user {
                    if count == index {
                        return Some(app.uri.clone());
                    }
                    count += 1;
                }
            }
            None
        }
    }

  
}