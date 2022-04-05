const Web3 = require('web3');
// const web3 = new Web3("https://rinkeby.infura.io/v3/8fa0de39a4b84dba8145373c9b4864d6");
const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/8fa0de39a4b84dba8145373c9b4864d6'
)
// const provider = new Web3.providers.HttpProvider(
//     'http://127.0.0.1:9545'
// )
const web3 = new Web3(provider)
const contractFunc = require('truffle-contract');

let ExoC = require('./build/contracts/ExoFour.json');
const Exo = contractFunc(ExoC)


Exo.setProvider(web3.currentProvider)

// CoinFlip.setProvider(web3.currentProvider)
//let contract = new web3.eth.Contract(Exo.abi, "0xfeE3647dcE803732c2df9E2A5f7D9efDdBFC21b7")
// console.log(contract)
// contract.setProvider(web3.currentProvider)
let contractAddress = "0x4E60E9526F4adBF90C3dbCfA5F447820aF922Da9";
let MainAccountAddress = "0xf63C073Fb0A9aeb8C708dEe86A6Eb0ac0c7A9886";
async function makeTx(exo){
    web3.eth.getBlock("latest", false, (error, result) => {
        let contractInst = new web3.eth.Contract(ExoC.abi, contractAddress)
        var _gasLimit = result.gasLimit;
    
        web3.eth.getGasPrice(function (error, result) {
            var _gasPrice = result;
            try {
                const Tx = require('ethereumjs-tx').Transaction;
                const privateKey = ""
                const privateKeyBuffer = Buffer.from(privateKey, 'hex')
                console.log(privateKeyBuffer)
                var _hex_gasLimit = web3.utils.toHex((_gasLimit + 1000000).toString());
                var _hex_gasPrice = web3.utils.toHex(_gasPrice.toString());
                var _hex_Gas = web3.utils.toHex('60000');
    
                web3.eth.getTransactionCount(MainAccountAddress).then(
                    nonce => {
                        var _hex_nonce = web3.utils.toHex(nonce); 
    
                        const rawTx =
                        {
                            nonce: _hex_nonce,
                            from: MainAccountAddress,
                            to: contractAddress,
                            gasPrice: _hex_gasPrice,
                            gasLimit: _hex_gasLimit,
                            gas: _hex_Gas,
                            value: '0x0',
                            data: contractInst.methods.takeOwnership(MainAccountAddress).encodeABI()
                        };
    
                        const tx = new Tx(rawTx, { 'chain': 'rinkeby' });
                        tx.sign(privateKeyBuffer);
    
                        var serializedTx = '0x' + tx.serialize().toString('hex');
                        web3.eth.sendSignedTransaction(serializedTx.toString('hex'), function (err, hash) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                console.log(hash);
                            }
                        })
                    });                                
            } catch (error) {
                console.log(error);
            }
        });
    });
        
}

async function callFunc(){
    let exo = await Exo.deployed()
    console.log('exo loaded')
    let x = await makeTx(exo)
    console.log(x)
    //let r = await exo.takeOwnership("0xf63C073Fb0A9aeb8C708dEe86A6Eb0ac0c7A9886", {from: "0xf63C073Fb0A9aeb8C708dEe86A6Eb0ac0c7A9886"})
    console.log('ownership took')
}
callFunc()