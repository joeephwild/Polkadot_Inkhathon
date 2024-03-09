#![cfg_attr(not(feature = "std"), no_std)]

#[ink::contract]
mod pack_contract {
    use std::process::id;

    use ink::prelude::string::String;
    use ink::prelude::vec::Vec;
    use ink::prelude::collections::BTreeMap;
    use ink::storage::Mapping;

    #[derive(Debug, Clone, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub struct PackContract {
       game_address: AccountId,
       pack_namme: String,
       pack_desc: String,
       quanity: u128,
       price: u128
    }
 
    #[ink(storage)]
    pub struct Packs {
        all_pack: Vec<PackContract>,
        address_to_pack: BTreeMap<AccountId, PackContract>,
        id_to_pack: BTreeMap<u128, PackContract>
    }

    pub type Result<T> = core::result::Result<T, Error>;

    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
  pub enum Error {
    FailedToInsert,
  }  

    #[ink(event)]
    pub struct Pacs {}

    impl Packs {
        #[ink(constructor)]
        pub fn default() -> Self {
            Self{
                address_to_pack: BTreeMap::new(),
                all_pack: Vec::new(),
                id_to_pack: BTreeMap::new()
            }
        }

        #[ink(message)]
        pub fn create_pack(&mut self, _pack_address: AccountId, desc: String, _name: String, amount: u128, _quanity: u128)  -> Result<()> {
            let caller: AccountId = self.env().caller();
            let pack: Option<PackContract> = self.address_to_pack.insert(caller, PackContract{
                game_address: _pack_address,
                pack_desc: desc,
                pack_namme: _name,
                price: amount,
                quanity: _quanity
            });
            if let Some(pack_to_push) = pack {
                self.all_pack.push(pack_to_push);
                return  Ok(());
            } else {
                // Handle the case where the pack was not inserted, if necessary
                return Err(Error::FailedToInsert)
            }
        }

        #[ink(message, payable)]
        pub fn buy_pack(&self, _quantity: u128, _id: u128) {
            let caller: ink::primitives::AccountId = self.env().caller();

        }
    }
}