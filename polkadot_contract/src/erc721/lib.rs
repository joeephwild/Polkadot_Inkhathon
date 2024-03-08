#![cfg_attr(not(feature = "std"), no_std)]

// Define the NFT contract
#[ink::contract]
mod nft {
    // Import necessary types
    use ink::storage::Mapping;
    use ink::storage::Lazy;

    pub type TokenId = u64;

     // Define the data structure for token information
     #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
     #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
     pub struct TokenData {
         owner: AccountId,
         metadata: Vec<u8>,
     }

    // Define the NFT struct
    #[ink(storage)]
    pub struct NFT {
        owner: Lazy<AccountId>,
        tokens: Mapping<TokenId, TokenData>,
        token_count: u64,
    }

    pub enum Error {
        NotOwner,
        TokenNotFound,
        TokenAlreadyExists,
    }

    // Define the result type
    pub type Result<T> = core::result::Result<T, Error>;

    impl NFT {
     // Define the constructor for the NFT contract
    #[ink(constructor)]
    pub fn new(_initial_owner: AccountId) -> Self {
        Self {
            owner: Lazy::new(),
            tokens: Mapping::new(),
            token_count: 0,
        }
    }

    // Define a function to mint a new NFT
    #[ink(message)]
    pub fn mint(&mut self, token_id: TokenId, metadata: Vec<u8>) -> Result<()> {
        let caller = self.env().caller();
        if *self.owner != caller {
            return Err(Error::NotOwner);
        }

        if self.tokens.contains_key(&token_id) {
            return Err(Error::TokenAlreadyExists);
        }

        let token_data = TokenData {
            owner: caller,
            metadata,
        };

        self.tokens.insert(token_id, token_data);
        self.token_count += 1;

        Ok(())
    }

    // Define a function to transfer ownership of a token
    #[ink(message)]
    pub fn transfer(&mut self, token_id: TokenId, to: AccountId) -> Result<()> {
        let caller = self.env().caller();
        if !self.tokens.contains_key(&token_id) {
            return Err(Error::TokenNotFound);
        }

        let token_data = self.tokens.get_mut(&token_id).unwrap();
        if token_data.owner != caller {
            return Err(Error::NotOwner);
        }

        token_data.owner = to;

        Ok(())
    }

    // Define a function to get the metadata of a token
    #[ink(message)]
    pub fn get_metadata(&self, token_id: TokenId) -> Result<Vec<u8>> {
        if let Some(token_data) = self.tokens.get(&token_id) {
            Ok(token_data.metadata.clone())
        } else {
            Err(Error::TokenNotFound)
        }
    }

    // Define a function to get the owner of a token
    #[ink(message)]
    pub fn get_owner(&self, token_id: TokenId) -> Result<AccountId> {
        if let Some(token_data) = self.tokens.get(&token_id) {
            Ok(token_data.owner)
        } else {
            Err(Error::TokenNotFound)
        }
    }
    }

    
}
