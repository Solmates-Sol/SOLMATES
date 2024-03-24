"use client";
// imports methods relevant to the react framework
import * as React from "react";
// library we use to interact with the solana json rpc api
import * as web3 from "@solana/web3.js";
// allows us access to methods and components which give us access to the solana json rpc api and user's wallet data
import * as walletAdapterReact from "@solana/wallet-adapter-react";
// allows us to choose from the available wallets supported by the wallet adapter
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
// imports a component which can be rendered in the browser
import {
	WalletModalProvider,
	WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
// applies the styling to the components which are rendered on the browser
require("@solana/wallet-adapter-react-ui/styles.css");
// imports methods for deriving data from the wallet's data store
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const Wallet = () => {
	// allows us to add the wallet account balance to our react function component
	const [balance, setBalance] = React.useState<number | null>(0);
	// we specify which network we want to connect to
	const endpoint = web3.clusterApiUrl("devnet");
	// we specify which wallets we want our wallet adapter to support
	const wallets = [new walletAdapterWallets.PhantomWalletAdapter()];

	// connection context object that is injected into the browser by the wallet
	const { connection } = useConnection();
	// user's public key of the wallet they connected to our application
	const { publicKey } = useWallet();

	// when the status of `connection` or `publicKey` changes, we execute the code block below
	React.useEffect(() => {
		const getInfo = async () => {
			if (connection && publicKey) {
				// we get the account info for the user's wallet data store and set the balance in our application's state
				const info = await connection.getAccountInfo(publicKey);
				setBalance(info!.lamports / web3.LAMPORTS_PER_SOL);
			}
		};
		getInfo();
		// the code above will execute whenever these variables change in any way
	}, [connection, publicKey]);

	return (
		<>
			{/* provides a connection to the solana json rpc api */}
			<walletAdapterReact.ConnectionProvider endpoint={endpoint}>
				{/* makes the wallet adapter available to the entirety of our application (wrapped in this component) */}
				<walletAdapterReact.WalletProvider wallets={wallets}>
					{/* provides components to the wrapped application */}
					<WalletModalProvider>
						{/* button component for connecting to solana wallet */}

						<WalletMultiButton
							style={{
								borderRadius: "40px",
							}}
						/>
					</WalletModalProvider>
				</walletAdapterReact.WalletProvider>
			</walletAdapterReact.ConnectionProvider>
		</>
	);
};

export default Wallet;
