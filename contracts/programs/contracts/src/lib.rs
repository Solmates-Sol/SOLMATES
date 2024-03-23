use anchor_lang::prelude::*;

declare_id!("Au9X2TaJ3Sn8Eg2MmPCzz5U2BLEFfQttqyCLQ2zduH1j");

#[program]
pub mod contracts {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
