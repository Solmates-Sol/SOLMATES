#![cfg_attr(feature = "strict", deny(warnings))]
#![cfg_attr(not(feature = "strict"), allow(dead_code, unused_imports))]

use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
};

solana_program::declare_id!("");

struct Expert {
    pubkey: Pubkey,
}

struct User {
    pubkey: Pubkey,
    sol_balance: u64, 
}

// Define the entry point for the program
#[entrypoint]
fn process(_program_id: &Pubkey, accounts: &[AccountInfo], _instruction_data: &[u8]) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();
    let user_account = next_account_info(accounts_iter)?;
    let expert_account = next_account_info(accounts_iter)?;

    let user_data = User {
        pubkey: *user_account.key,
        sol_balance: user_account.lamports(),
    };
    let expert_data = Expert {
        pubkey: *expert_account.key,
    };

    let sol_to_transfer = 1;// Amount of SOL to transfer
    if user_data.sol_balance >= sol_to_transfer {
        // Transfer SOL to the expert's account
        user_account.try_borrow_mut_lamports(sol_to_transfer)?;
        expert_account.try_borrow_mut_lamports(-sol_to_transfer)?;
        msg!("Transaction successful: {} SOL transferred to expert.", sol_to_transfer);
    } else {
        return Err(ProgramError::InsufficientFunds);
    }


    Ok(())
}

solana_program::entrypoint!(process);
