# Note for local tests

launch ganache
- port 8545
- gas limit 30000000

Copy mnemonic in env

`truffle deploy --network development --f 2 --to 2`

Copy address in BountyFactory.json
Copy networks in EncryptionVerifier.json
Copy circuitaddress in 1.SubmitBouty.jsx
  - const [verifierAddress, setVerifierAddress] = React.useState("0x3E3a6A20857F201499b1feE52eFEd21453C4e763");

Invalid encryption error
  ```
  [ethjs-query] while formatting outputs from RPC '{"value":{"code":-32603,"data":{"message":"VM Exception while processing transaction: revert Invalid encryption","stack":"RuntimeError: VM Exception while processing transaction: revert Invalid encryption\n at EIP1559FeeMarketTransaction.fillFromResult (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:12745)\n at Miner.<anonymous> (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:36703)\n at async Miner.<anonymous> (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:35116)\n at async Miner.mine (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:39680)\n at async Blockchain.mine (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:60063)\n at async Promise.all (index 0)\n at async TransactionPool.emit (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/node_modules/emittery/index.js:303:3)","code":-32000,"name":"RuntimeError","data":{"hash":"0xc194b9af0a810c7ad1e84924a0bf984372d0ea4a6121f4f7faa5623beccd7c3f","programCounter":43,"result":"0xc194b9af0a810c7ad1e84924a0bf984372d0ea4a6121f4f7faa5623beccd7c3f","reason":"Invalid encryption","message":"revert"}}}}'
  ```

  Other error
  ```
  [ethjs-query] while formatting outputs from RPC '{"value":{"code":-32603,"data":{"message":"VM Exception while processing transaction: revert","stack":"RuntimeError: VM Exception while processing transaction: revert\n at EIP1559FeeMarketTransaction.fillFromResult (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:12745)\n at Miner.<anonymous> (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:36703)\n at async Miner.<anonymous> (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:35116)\n at async Miner.mine (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:39680)\n at async Blockchain.mine (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:60063)\n at async Promise.all (index 0)\n at async TransactionPool.emit (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/node_modules/emittery/index.js:303:3)","code":-32000,"name":"RuntimeError","data":{"hash":"0xecefafd87c5fbe17dce7130f57bf21f9d739800d16de21b88cd1ff0d1910fcec","programCounter":43,"result":"0xecefafd87c5fbe17dce7130f57bf21f9d739800d16de21b88cd1ff0d1910fcec","reason":null,"message":"revert"}}}}'
  ```

  ```
  [ethjs-query] while formatting outputs from RPC '{"value":{"code":-32603,"data":{"message":"VM Exception while processing transaction: revert","stack":"RuntimeError: VM Exception while processing transaction: revert\n at EIP1559FeeMarketTransaction.fillFromResult (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:12745)\n at Miner.<anonymous> (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:36703)\n at async Miner.<anonymous> (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:35116)\n at async Miner.mine (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:39680)\n at async Blockchain.mine (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/dist/node/1.js:2:60063)\n at async Promise.all (index 0)\n at async TransactionPool.emit (/tmp/.mount_ganach3oZ9hv/resources/static/node/node_modules/ganache/node_modules/emittery/index.js:303:3)","code":-32000,"name":"RuntimeError","data":{"hash":"0xe8480d9a469a8bdf539a472f740c3c82bf16e32410d9587508ef1c87fa6f8174","programCounter":43,"result":"0xe8480d9a469a8bdf539a472f740c3c82bf16e32410d9587508ef1c87fa6f8174","reason":null,"message":"revert"}}}}'
  ```

