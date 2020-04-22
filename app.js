// Require the IOTA library
const Iota = require('@iota/core');
const Converter = require('@iota/converter');

// Create a new instance of the IOTA API object
// Use the `provider` field to specify which node to connect to
const iota = Iota.composeAPI({
  provider: 'https://nodes.comnet.thetangle.org:443'
});

const depth = 3;
const minimumWeightMagnitude = 10;

// Note this is NOT a real seed - its just used here since its required but not used as this is a zero value transaction
const seed = 'MLWKWPZNGL9NMFXGRHMEIQHSBQR9PKQQMFATCPHQOSWCKC9HNORLAJNOXVB9KPGTCTWLLIFYGPDKFLBHH'
// This address does not have to belong to anyone. To be valid, the address just needs to consist of 81 trytes.
// You might like to put your own addresss here to test this out
const sendToAddress =
'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D';

const message = JSON.stringify({"message": "Hello world"});
const messageInTrytes = Converter.asciiToTrytes(message);

const transfers = [
  {
      value: 0,
      address: sendToAddress,
      message: messageInTrytes
  }
];

iota.prepareTransfers(seed, transfers)
  .then(trytes => {
      return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
  })
  .then(bundle => {
      console.log(bundle[0].hash)
  })
  .catch(err => {
      console.error(err)
  });