# IOTA Message Example: Hello World App

## A simple hello world app using IOTA

This application is essentailly [following this tutorial](https://docs.iota.org/docs/client-libraries/0.1/how-to-guides/js/send-your-first-bundle) from the IOTA docs. In this app we are sending a _zero value tranaction_ to publish a message onto the Tangle.

## Run the application

To run this application, install the dependencies and then use node to run the application. This has been tested using Node v12.14.1.

```
npm install
node app.js
```

The output should be a transaction hash something similar to this:

```
DPXSKIOAKMIQWDIHDXGDLAXVHCC9CGVPKUGMULHHAQULZCOSFSRTKM9KXEDSTXDMSHHADTAL9PDVSC999
```

## View the message on the Tangle Explorer

If you used a real address in the app then you can view this transaction using the [Tangle Explorer](https://comnet.thetangle.org/). Make a note of the hash value that was output from the app and use that to look up your transaction. Additionally, if you are using your own address you will be able to see this transaction in your local IOTA Wallet.

### Issue Reporting

If you experience any bugs or need further improvement, please create a new issue under [Issues](https://github.com/jensendarren/iota-message-example/issues).

### Disclaimer

This application is part of a _research assignment_ and is most definitely __not__ suitable for Production use! :)