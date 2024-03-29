#![cfg_attr(not(feature = "std"), no_std)]

#[ink::contract]
mod pack_contract {
    use ink::prelude::string::String;
    use ink::prelude::collections::BTreeMap;
    use ink::storage::Mapping;
    use ink::contract_ref;
    use ink::{
        prelude::vec::Vec,
    };
    use psp34::{Id, PSP34};

    #[ink::trait_definition]
    pub trait PSP34Mintable {
    /// Mints a token to the sender's account.
    ///
    /// # Events
    ///
    /// On success a `Transfer` event is emitted with `None` sender.
    ///
    /// # Errors
    ///
    /// Reverts with `TokenExists`` if token id is already in the library.
    /// 
    /// Reverts with `Custom (max supply exceeded)` if the incremented by 1 total
    /// supply exceeds maximal value of `u128` type.
    #[ink(message)]
    fn mint(&mut self, id: Id) -> Result<()>;
   }


    #[derive(Debug, Clone, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub struct PackContract {
       game_address: AccountId,
       pack_namme: String,
       pack_desc: String,
       quanity: u128,
       price: u128,
       owner: AccountId
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
        pub fn create_pack(&mut self, _pack_address: AccountId, desc: String, _name: String, amount: u128, _quanity: u128, _receiver: AccountId)  {
            let _caller: AccountId = self.env().caller();
            let pack = PackContract {
                game_address: _pack_address,
                pack_desc: desc,
                pack_namme: _name,
                price: amount,
                quanity: _quanity,
                owner: _receiver
            };
            self.address_to_pack.insert(_caller, pack.clone());
            self.all_pack.push(pack.clone());
            self.id_to_pack.insert(self.all_pack.len() as u128, pack.clone());

        }

        #[ink(message, payable)]
        pub fn buy_pack(&self, _quantity: u128, _id: u128) -> u128 {
            let money_sent: u128 = self.env().transferred_value();
            let pack: PackContract = match self.id_to_pack.get(&_id) {
                Some(pack) => pack.clone(),
                None => panic!("Pack does not exist"),
            };
            assert!(money_sent >= pack.price, "Insufficient Funds");

            // send required money to the pack owner
            if self.env().transfer(pack.owner, money_sent).is_err() {
                panic!("Error transferring");
            }

            pack.quanity -_quantity
        }

        #[ink(message)]
        pub fn retrive_all_pack(&mut self) -> Vec<PackContract> {
            return self.all_pack.clone();
        }
    }
}