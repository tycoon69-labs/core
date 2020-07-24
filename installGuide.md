# Deploy Tycoon Node

1. Create new user(**root** user does not work) by following script. Replace **USER_NAME** with your new username.
    ```sh
    $ adduser USER_NAME
    $ usermod -aG sudo USER_NAME
    $ su USER_NAME
    ```
1. Execute the following script
    ```sh
    $ bash <(curl -s https://raw.githubusercontent.com/tycoon69-labs/core/chore/bridgechain-changes/install.sh)
    ```
1. Wait as the procedure runs.
1. You will be prompted to select **mainnet**, **devnet**, or **testnet**. Choose **mainnet**.
1. Confirm with Y.
1. You will be prompted to declare database credentials username, password, and database name. These are for internal server use and can be anything, including something like bridgechain, bridgechain and bridgechain.
1. The process will complete.
1. To start relay process execute
    ```sh
    $ tycoon relay:start
    ```
1. To see logs, execute

    ```sh
    $ tycoon relay:log
    ```

    or

    ```sh
    $ pm2 logs
    ```

1. Restart relay
    ```sh
    $ tycoon relay:restart
    ```
1. Stop relay
    ```sh
    $ tycoon relay:stop
    ```

# Start delegate

1. Register your wallet as delegate at mobile or desktop wallet.
2. Register delegate to node by run the following script.
    ```sh
    $ tycoon config:forger
    ```
3. You will be prompted to select **Encrypted BIP38**, or **Plain BIP39**.
    - Plain BIP39 requires only passphrase
    - Encryped BIP38 requires passphrase and password
4. Choose **BIP** method and follow the steps to complete forger configuration.
5. To start delegate process execute
    ```sh
    $ tycoon forger:start
    ```
6. To see logs, execute

    ```sh
    $ tycoon forger:log
    ```

    or

    ```sh
    $ pm2 logs
    ```

7. Restart delegate
    ```sh
    $ tycoon forger:restart
    ```
8. Stop delegate
    ```sh
    $ tycoon forger:stop
    ```
