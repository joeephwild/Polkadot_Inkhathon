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
    }

    #[ink(storage)]
    pub struct StoreContract {
        all_app: Vec<App>,
        address_app_count: Mapping<AccountId, u64>,
        id_to_app: BTreeMap<u64, App>,
        app_count: u128,
        address_to_app: Mapping<AccountId, Vec<App>>,
    }

    impl StoreContract {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
                all_app: Vec::new(),
                address_app_count: Mapping::new(),
                id_to_app: BTreeMap::new(),
                app_count: 0,
                address_to_app: Mapping::new()
            }
        }

        #[ink(message)]
        pub fn upload_an_app(&mut self, app_uri: String, amount: Balance) {
           
        }

        #[ink(message, payable)]
        pub fn install_app(&mut self, app_id: u64) {
            let caller = self.env().caller();
            let app = self.id_to_app.get(&app_id).expect("App does not exist");
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

        // #[ink(message)]
        // pub fn get_owner_app_count(&self, owner: AccountId) -> u64 {
        //     self.address_app_count.get(&owner).copied().unwrap_or(0)
        // }

        #[ink(message)]
        pub fn get_all_app_uris(&self) -> Vec<String> {
            self.all_app.iter().map(|app| app.uri.clone()).collect()
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
}