
# RPC_Testing

A collection holding all the Ethereum JSON RPC API calls

## Indices

* [debug](#debug)

  * [accountRange](#1-accountrange)
  * [getModifiedAccountsByHash](#2-getmodifiedaccountsbyhash)
  * [getModifiedAccountsByNumber](#3-getmodifiedaccountsbynumber)
  * [storageRangeAt](#4-storagerangeat)
  * [traceTransaction](#5-tracetransaction)

* [deprecated/db](#deprecateddb)

  * [getHex (deprecated)](#1-gethex-(deprecated))
  * [getString (deprecated)](#2-getstring-(deprecated))
  * [putHex (deprecated)](#3-puthex-(deprecated))
  * [putString (deprecated)](#4-putstring-(deprecated))

* [deprecated/eth](#deprecatedeth)

  * [accounts (deprecated)](#1-accounts-(deprecated))
  * [compileLLL (deprecated)](#2-compilelll-(deprecated))
  * [compileSerpent (deprecated)](#3-compileserpent-(deprecated))
  * [compileSolidity (deprecated)](#4-compilesolidity-(deprecated))
  * [getCompilers (deprecated)](#5-getcompilers-(deprecated))
  * [sign (deprecated)](#6-sign-(deprecated))

* [deprecated/shh](#deprecatedshh)

  * [addToGroup (deprecated)](#1-addtogroup-(deprecated))
  * [getFilterChanges (deprecated)](#2-getfilterchanges-(deprecated))
  * [getMessages (deprecated)](#3-getmessages-(deprecated))
  * [hasIdentity (deprecated)](#4-hasidentity-(deprecated))
  * [newFilter (deprecated)](#5-newfilter-(deprecated))
  * [newGroup (deprecated)](#6-newgroup-(deprecated))
  * [newIdentity (deprecated)](#7-newidentity-(deprecated))
  * [post (deprecated)](#8-post-(deprecated))
  * [uninstallFilter (deprecated)](#9-uninstallfilter-(deprecated))
  * [version (deprecated)](#10-version-(deprecated))

* [eth/accounts](#ethaccounts)

  * [getBalance](#1-getbalance)
  * [getCode](#2-getcode)
  * [getStorageAt](#3-getstorageat)
  * [getTransactionCount](#4-gettransactioncount)

* [eth/blocks](#ethblocks)

  * [getBlockByHash](#1-getblockbyhash)
  * [getBlockByNumber](#2-getblockbynumber)
  * [getBlockTransactionCountByHash](#3-getblocktransactioncountbyhash)
  * [getBlockTransactionCountByNumber](#4-getblocktransactioncountbynumber)

* [eth/call](#ethcall)

  * [call](#1-call)
  * [estimateGas](#2-estimategas)
  * [getProof](#3-getproof)
  * [sendRawTransaction](#4-sendrawtransaction)
  * [sendTransaction](#5-sendtransaction)

* [eth/filters](#ethfilters)

  * [getFilterChanges](#1-getfilterchanges)
  * [getLogs](#2-getlogs)
  * [newBlockFilter](#3-newblockfilter)
  * [newFilter](#4-newfilter)
  * [newPendingTransactionFilter](#5-newpendingtransactionfilter)
  * [uninstallFilter](#6-uninstallfilter)

* [eth/mining](#ethmining)

  * [coinbase](#1-coinbase)
  * [getWork](#2-getwork)
  * [hashrate](#3-hashrate)
  * [mining](#4-mining)
  * [submitHashrate](#5-submithashrate)
  * [submitWork](#6-submitwork)

* [eth/system](#ethsystem)

  * [blockNumber](#1-blocknumber)
  * [chainId](#2-chainid)
  * [gasPrice](#3-gasprice)
  * [protocolVersion](#4-protocolversion)
  * [syncing](#5-syncing)

* [eth/txs](#ethtxs)

  * [getTransactionByBlockHashAndIndex](#1-gettransactionbyblockhashandindex)
  * [getTransactionByBlockNumberAndIndex](#2-gettransactionbyblocknumberandindex)
  * [getTransactionByHash](#3-gettransactionbyhash)
  * [getTransactionReceipt](#4-gettransactionreceipt)

* [eth/uncles](#ethuncles)

  * [getUncleByBlockHashAndIndex](#1-getunclebyblockhashandindex)
  * [getUncleByBlockNumberAndIndex](#2-getunclebyblocknumberandindex)
  * [getUncleCountByBlockHash](#3-getunclecountbyblockhash)
  * [getUncleCountByBlockNumber](#4-getunclecountbyblocknumber)

* [net](#net)

  * [listening](#1-listening)
  * [peerCount](#2-peercount)
  * [version](#3-version)

* [tg](#tg)

  * [forks](#1-forks)
  * [getHeaderByHash](#2-getheaderbyhash)
  * [getHeaderByNumber](#3-getheaderbynumber)
  * [getLogsByHash](#4-getlogsbyhash)
  * [issuance](#5-issuance)

* [trace](#trace)

  * [block](#1-block)
  * [call](#2-call)
  * [callMany](#3-callmany)
  * [filter](#4-filter)
  * [get](#5-get)
  * [rawTransaction](#6-rawtransaction)
  * [replayBlockTransactions](#7-replayblocktransactions)
  * [replayTransaction](#8-replaytransaction)
  * [transaction](#9-transaction)

* [web3](#web3)

  * [clientVersion](#1-clientversion)
  * [sha3](#2-sha3)


--------


## debug



### 1. accountRange


Returns a range of accounts involved in the given block range

**Parameters**

TAG - Integer block number or one of "earliest", "latest" or "pending"

DATAARRAY - an array of prefixs against which to match account addresses (report only on accounts addresses that begin with this prefix, default matches all accounts)

QUANTITY, 8 bytes - the maximum number of accounts to retreive

Boolean - if true, do not return byte code from the address, if false return the byte code (if any)

Boolean - if true, do not return storage from the address, if false return storage (if any)

Boolean - if true, do not return missing preimages, if false do return them

**Returns**

Object - An object of type IteratorDump which is defined as

root: string - IteratorDump

accounts: map[common.Address]DumpAccount - IteratorDump

next: []byte - IteratorDump

balance: string - DumpAccount

nonce: uint64 - DumpAccount

root: string - DumpAccount

codeHash: string - DumpAccount

code: string - DumpAccount

storage: map[string]string - DumpAccount

address: common.Address - (optional) DumpAccount

secureKey: hexutil.Bytes - DumpAccount




***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"debug_accountRange",
	"params":[
		"0xaaaaa", 
		[1],
    1,
    true,
    true,
    true
	],
	"id":"1"
}
```



### 2. getModifiedAccountsByHash


Returns a list of accounts modified in the given block.

**Parameters**

DATA, 32 Bytes - the first hash of block at which to retreive data

DATA, 32 Bytes - the last hash of block at which to retreive data. Optional, defaults to startHash

**Returns**

Array of DATA, 20 Bytes - Array of addresses modifed in the given block range


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"debug_getModifiedAccountsByHash",
	"params":[
		"0x2a1af018e33bcbd5015c96a356117a5251fcccf94a9c7c8f0148e25fdee37aec",
		"0x4e3d3e7eee350df0ee6e94a44471ee2d22cfb174db89bbf8e6c5f6aef7b360c5"
	],
	"id":"1"
}
```



### 3. getModifiedAccountsByNumber


Returns a list of accounts modified in the given block.

**Parameters**

TAG - Integer block number or one of "earliest", "latest" or "pending"

TAG - Integer block number or one of "earliest", "latest" or "pending". Optional, defaults to startNum

**Returns**

Array of DATA, 20 Bytes - Array of addresses modifed in the given block range


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"debug_getModifiedAccountsByNumber",
	"params":[
		"0xccccd",
		"0xcccce"
	],
	"id":"1"
}
```



### 4. storageRangeAt


Returns information about a range of storage locations (if any) for the given address.

**Parameters**

DATA, 32 Bytes - Hash of block at which to retreive data

QUANTITY, 8 bytes - Transaction index in the give block

DATA, 20 Bytes - Contract address from which to retreive storage data

DATA, 32 Bytes - Storage key to retreive

QUANTITY, 8 bytes - The number of values to retreive

**Returns**

Object - An object of type StorageRangeResult which is defined as

pair: KEY/VALUE - A key value pair of the storage location

nextKey: DATA, 32 Bytes - (optional) Hash pointing to next storage pair or empty


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"debug_storageRangeAt",
	"params":[
		"0xd3f1853788b02e31067f2c6e65cb0ae56729e23e3c92e2393af9396fa182701d", 
    1,
    "0xb734c74ff4087493373a27834074f80acbd32827",
		"0x00",
    2
	],
	"id":"1"
}
```



### 5. traceTransaction


Returns Geth style transaction traces.

**Parameters**

DATA, 32 Bytes - hash of transaction to trace.

**Returns**

STACK_TRACE - An array of stack traces as per Geth


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"debug_traceTransaction",
	"params":[
		"0x893c428fed019404f704cf4d9be977ed9ca01050ed93dccdd6c169422155586f"
	],
	"id":"1"
}
```



## deprecated/db



### 1. getHex (deprecated)


Returns binary data from the local database.

**Deprecated** This function will be removed in the future.

**Parameters**

String - Database name

String - Key name

**Returns**

DATA - The previously stored data


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"db_getHex"
	,"params":[
		"testDB",
		"myKey"
	],
	"id":"1"
}
```



### 2. getString (deprecated)


Returns string from the local database.

**Deprecated** This function will be removed in the future.

**Parameters**

String - Database name

String - Key name

**Returns**

STRING - The previously stored string


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"db_getString",
	"params":[
		"testDB",
		"myKey"
	],
	"id":"1"
}
```



### 3. putHex (deprecated)


Stores binary data in the local database.

**Deprecated** This function will be removed in the future.

**Parameters**

String - Database name

String - Key name

DATA - The data to store

**Returns**

Boolean - true if the value was stored, false otherwise


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"db_putHex",
	"params":[
		"testDB",
		"myKey",
		"0x68656c6c6f20776f726c64"
	],
	"id":"1"
}
```



### 4. putString (deprecated)


Stores a string in the local database.

**Deprecated** This function will be removed in the future.

**Parameters**

String - Database name

String - Key name

String - String to store

**Returns**

Boolean - true if the value was stored, false otherwise


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"db_putString",
	"params":[
		"testDB",
		"myKey",
		"myString"
	],
	"id":"1"
}
```



## deprecated/eth



### 1. accounts (deprecated)


Returns a list of addresses owned by the client.

**Deprecated** This function will be removed in the future.

**Parameters**

None

**Returns**

Array of DATA, 20 Bytes - addresses owned by the client


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_accounts",
	"params":[],
	"id":"1"
}
```



### 2. compileLLL (deprecated)


Returns compiled LLL code.

**Deprecated** This function will be removed in the future.

**Parameters**

String - The source code

**Returns**

DATA - The compiled source code


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_compileLLL",
	"params":[
		"(returnlll (suicide (caller)))"
	],
	"id":"1"
}
```



### 3. compileSerpent (deprecated)


Returns compiled serpent code.

**Deprecated** This function will be removed in the future.

**Parameters**

String - The source code

**Returns**

DATA - The compiled source code


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_compileSerpent",
	"params":["/* some serpent */"],
	"id":"1"
}
```



### 4. compileSolidity (deprecated)


Returns compiled solidity code.

**Deprecated** This function will be removed in the future.

**Parameters**

String - The source code

**Returns**

DATA - The compiled source code


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_compileSolidity",
	"params":[
		"contract test { function multiply(uint a) returns(uint d) {   return a * 7;   } }"
	],
	"id":"1"
}
```



### 5. getCompilers (deprecated)


Returns a list of available compilers in the client.

**Deprecated** This function will be removed in the future.

**Parameters**

None

**Returns**

Object - An object of type StringArray of available compilers


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getCompilers",
	"params":[],
	"id":"1"
}
```



### 6. sign (deprecated)


Calculates an Ethereum specific signature with: sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))).

**Deprecated** This function will be removed in the future.

**Parameters**

DATA, 20 Bytes - address

DATA - message to sign

**Returns**

DATA - The signature


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_sign",
	"params":[
		"0x9b2055d370f73ec7d8a03e965129118dc8f5bf83", 
		"0xdeadbeef"
	],
	"id":"1"
}
```



## deprecated/shh



### 1. addToGroup (deprecated)


Add to a group.

**Deprecated** This function will be removed in the future.

**Parameters**

DATA, 60 Bytes - The identity address to add to a group

**Returns**

Boolean - true if the identity was successfully added to the group, false otherwise


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"shh_addToGroup",
	"params":[
		"0x04f96a5e25610293e42a73908e93ccc8c4d4dc0edcfa9fa872f50cb214e08ebf61a03e245533f97284d442460f2998cd41858798ddfd4d661997d3940272b717b1"
	],
	"id":"1"
}
```



### 2. getFilterChanges (deprecated)


Polling method for whisper filters. Returns new messages since the last call of this method.

**Deprecated** This function will be removed in the future.

**Parameters**

QUANTITY - The filter id

**Returns**

Object - An object of type MessageArray received since last poll


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"shh_getFilterChanges",
	"params":[
		"0x7"
	],
	"id":"1"
}
```



### 3. getMessages (deprecated)


Get all messages matching a filter. Unlike shh_getFilterChanges this returns all messages.

**Deprecated** This function will be removed in the future.

**Parameters**

QUANTITY - The filter id

**Returns**

Object - An object of type MessageArray received since last poll


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"shh_getMessages",
	"params":[
		"0x7"
	],
	"id":"1"
}
```



### 4. hasIdentity (deprecated)


Checks if the client hold the private keys for a given identity.

**Deprecated** This function will be removed in the future.

**Parameters**

DATA, 60 Bytes - The identity address to check

**Returns**

Boolean - true if the client holds the privatekey for that identity, false otherwise


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"shh_hasIdentity",
	"params":[
		"0x04f96a5e25610293e42a73908e93ccc8c4d4dc0edcfa9fa872f50cb214e08ebf61a03e245533f97284d442460f2998cd41858798ddfd4d661997d3940272b717b1"
	],
	"id":"1"
}
```



### 5. newFilter (deprecated)


Creates filter to notify, when client receives whisper message matching the filter options.

**Deprecated** This function will be removed in the future.

**Parameters**

Object - An object of type Filter

**Returns**

QUANTITY - The newly created filter id


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"shh_newFilter",
	"params":[{
		"topics": [
			"0x12341234bf4b564f"
		],
		"to": "0x2341234bf4b2341234bf4b564f..."
	}],
	"id":"1"
}
```



### 6. newGroup (deprecated)


Create a new group.

**Deprecated** This function will be removed in the future.

**Parameters**

None

**Returns**

DATA, 60 Bytes - The address of the new group


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"shh_newGroup",
	"params":[],
	"id":"1"
}
```



### 7. newIdentity (deprecated)


Creates new whisper identity in the client.

**Deprecated** This function will be removed in the future.

**Parameters**

None

**Returns**

DATA, 60 Bytes - The address of the new identiy


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"shh_newIdentity",
	"params":[],
	"id":"1"
}
```



### 8. post (deprecated)


Sends a whisper message.

**Deprecated** This function will be removed in the future.

**Parameters**

Object - An object of type Post

**Returns**

Boolean - true if the message was send, false otherwise


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"shh_post",
	"params":[{
		"from":"0xc931d93e97ab07fe42d923478ba2465f2..",
		"topics": [
			"0x68656c6c6f20776f726c64"
		],
		"payload":"0x68656c6c6f20776f726c64",
		"ttl":"0x64",
		"priority":"0x64"
	}],
	"id":"1"
}
```



### 9. uninstallFilter (deprecated)


Uninstalls a filter with given id.

**Deprecated** This function will be removed in the future.

**Parameters**

QUANTITY - The filter id

**Returns**

Boolean - true if the filter was successfully uninstalled, false otherwise


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"shh_uninstallFilter",
	"params":[
		"0x7"
	],
	"id":"1"
}
```



### 10. version (deprecated)


Returns the current whisper protocol version.

**Deprecated** This function will be removed in the future.

**Parameters**

None

**Returns**

STRING - The current whisper protocol version


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"shh_version",
	"params":[],
	"id":"1"
}
```



## eth/accounts



### 1. getBalance


Returns the balance of an account for a given address.

**Parameters**

DATA, 20 Bytes - Address to check for balance

TAG - Integer block number or one of "earliest", "latest" or "pending"

**Returns**

QUANTITY - Integer of the current balance in wei


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getBalance",
	"params":[
		"0x5df9b87991262f6ba471f09758cde1c0fc1de734", 
		"0xb443"
	],
	"id":"1"
}
```



### 2. getCode


Returns the byte code at a given address (if it's a smart contract).

**Parameters**

DATA, 20 Bytes - Address from which to retreive byte code

TAG - Integer block number or one of "earliest", "latest" or "pending"

**Returns**

DATA - The byte code (if any) found at the given address


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getCode",
	"params":[
		"0x109c4f2ccc82c4d77bde15f306707320294aea3f", 
		"0xc443"
	],
	"id":"1"
}
```



### 3. getStorageAt


Returns the value from a storage position at a given address.

**Parameters**

DATA, 20 Bytes - Address of the contract whose storage to retreive

QUANTITY - Integer of the position in the storage

TAG - Integer block number or one of "earliest", "latest" or "pending"

**Returns**

DATA - The value at this storage position


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0", 
	"method": "eth_getStorageAt", 
	"params": [
		"0x109c4f2ccc82c4d77bde15f306707320294aea3f", 
		"0x0",
		"0xc443"
	], 
	"id": "1"
}
```



### 4. getTransactionCount


Returns the number of transactions sent from an address (the nonce).

**Parameters**

DATA, 20 Bytes - Address from which to retrieve nonce

TAG - Integer block number or one of "earliest", "latest" or "pending"

**Returns**

QUANTITY - Integer of the number of transactions sent from this address


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionCount",
	"params":[
		"0xfd2605a2bf58fdbb90db1da55df61628b47f9e8c", 
		"0xc443"
	],
	"id":"1"
}

```



## eth/blocks



### 1. getBlockByHash


Returns information about a block given the block's hash.

**Parameters**

DATA, 32 Bytes - Hash of a block

Boolean - If true it returns the full transaction objects, if false only the hashes of the transactions

**Returns**

Object - An object of type Block as described at eth_getBlockByNumber, or null when no block was found


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockByHash",
	"params":[
		"0x0b4c6fb75ded4b90218cf0346b0885e442878f104e1b60bf75d5b6860eeacd53", 
		false
	],
	"id":"1"
}
```



### 2. getBlockByNumber


Returns information about a block given the block's number.

**Parameters**

TAG - Integer block number or one of "earliest", "latest" or "pending"

Boolean - If true it returns the full transaction objects, if false only the hashes of the transactions

**Returns**

Object - An object of type Block defined as:

number: QUANTITY - The block number or null when pending

hash: DATA, 32 Bytes - Hash of the block or null when pending

parentHash: DATA, 32 Bytes - Hash of the parent block

nonce: DATA, 8 bytes - Hash of the proof of work or null when pending

sha3Uncles: DATA, 32 Bytes - SHA3 of the uncles data in the block

logsBloom: DATA, 256 Bytes - The bloom filter for the block's logs or null when pending

transactionsRoot: DATA, 32 Bytes - The root of the transaction trie of the block

stateRoot: DATA, 32 Bytes - The root of the final state trie of the block

receiptsRoot: DATA, 32 Bytes - The root of the receipts trie of the block

miner: DATA, 20 Bytes - The address of the beneficiary to whom the mining rewards were given

difficulty: QUANTITY - Integer of the difficulty for this block

totalDifficulty: QUANTITY - Integer of the total difficulty of the chain until this block

extraData: DATA - The extra data field of this block

size: QUANTITY - Integer the size of this block in bytes

gasLimit: QUANTITY - The maximum gas allowed in this block

gasUsed: QUANTITY - The total used gas by all transactions in this block

timestamp: QUANTITY - The unix timestamp for when the block was collated

transactions: ARRAY - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter

uncles: ARRAY - Array of uncle hashes




***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockByNumber",
	"params":[
		"0xf4629", 
		false
	],
	"id":"1"
}
```



### 3. getBlockTransactionCountByHash


Returns the number of transactions in a block given the block's block hash.

**Parameters**

DATA, 32 Bytes - hash of a block

**Returns**

QUANTITY - Integer of the number of transactions in this block


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockTransactionCountByHash",
	"params":[
		"0x0b4c6fb75ded4b90218cf0346b0885e442878f104e1b60bf75d5b6860eeacd53"
	],
	"id":"1"
}
```



### 4. getBlockTransactionCountByNumber


Returns the number of transactions in a block given the block's block number.

**Parameters**

TAG - Integer block number or one of "earliest", "latest" or "pending"

**Returns**

QUANTITY - Integer of the number of transactions in this block


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockTransactionCountByNumber",
	"params":[
		"0xf4629"
	],
	"id":"1"
}
```



## eth/call



### 1. call


Executes a new message call immediately without creating a transaction on the block chain.

**Parameters**

Object - An object of type Call

DATA, 20 Bytes - (optional) The address the transaction is sent from

DATA, 20 Bytes - The address the transaction is directed to

QUANTITY - (optional) Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be needed by some executions

QUANTITY - (optional) Integer of the gasPrice used for each paid gas

QUANTITY - (optional) Integer of the value sent with this transaction

DATA - (optional) Hash of the method signature and encoded parameters. For details see Ethereum Contract ABI

TAG - Integer block number or one of "earliest", "latest" or "pending"

**Returns**

DATA - The return value of executed contract


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_call",
	"params":[
    {
      "to": "0x08a2e41fb99a7599725190b9c970ad3893fa33cf",
      "data": "0x18160ddd"
    },
    "0xa2f2e0"
  ],
	"id":"1"
}
```



### 2. estimateGas


Returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain.

**Note**

The estimate may be significantly more than the amount of gas actually used by the transaction for a variety of reasons including EVM mechanics and node performance.

**Note**

If no gas limit is specified geth uses the block gas limit from the pending block as an upper bound. As a result the returned estimate might not be enough to executed the call/transaction when the amount of gas is higher than the pending block gas limit.

**Parameters**

Object - An object of type Call, see eth_call parameters, expect that all properties are optional

**Returns**

QUANTITY - The estimated amount of gas needed for the call


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_estimateGas",
	"params":[
    {
      "to": "0x3d597789ea16054a084ac84ce87f50df9198f415",
      "from": "0x3d597789ea16054a084ac84ce87f50df9198f415",
      "value": "0x1"
    }
  ],
	"id":"1"
}
```



### 3. getProof


See this EIP of more information: https://github.com/ethereum/EIPs/issues/1186

Possible implementation: https://github.com/vocdoni/eth-storage-proof

**Parameters**

DATA, 20 Bytes - The address of the storage locations being proved

DATAARRAY - one or more storage locations to prove

TAG - Integer block number or one of "earliest", "latest" or "pending"

**Returns**

DATA - The Merkel proof of the storage locations


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
  "id": "1",
  "jsonrpc": "2.0",
  "method": "eth_getProof",
  "params": [
    "0x7F0d15C7FAae65896648C8273B6d7E43f58Fa842",
    [  "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421" ],
    "latest"
  ]
}
```



### 4. sendRawTransaction


Creates new message call transaction or a contract creation for previously-signed transactions.

**Note**

Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.

**Parameters**

DATA - The signed transaction data

**Returns**

DATA, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_sendRawTransaction",
	"params":["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"],
	"id":"1"
}
```



### 5. sendTransaction


Creates new message call transaction or a contract creation if the data field contains code.

**Note**

Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract

**Parameters**

Object - An object of type SendTransaction

DATA, 20 Bytes - The address the transaction is send from

DATA, 20 Bytes - (optional when creating new contract) The address the transaction is directed to

QUANTITY - (optional, default 90000) Integer of the gas provided for the transaction execution. It will return unused gas

QUANTITY - (optional, default To-Be-Determined) Integer of the gasPrice used for each paid gas

QUANTITY - (optional) Integer of the value sent with this transaction

DATA - The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI

QUANTITY - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce

**Returns**

DATA, 32 Bytes - The transaction hash, or the zero hash if the transaction is not yet available


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_sendTransaction",
  "params": [
    {
      "from": " 0xb60e8dd61c5d32be8058bb8eb970870f07233155",
      "to": " 0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      "gas": "0x76c0",
      "gasPrice": "0x9184e72a000",
      "value": "0x9184e72a",
      "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
    }
  ],
	"id":"1"
}
```



## eth/filters



### 1. getFilterChanges


Returns an array of objects of type Log, an array of block hashes (for eth_newBlockFilter) or an array of transaction hashes (for eth_newPendingTransactionFilter) or an empty array if nothing has changed since the last poll.

**Note**

In solidity: The first topic is the hash of the signature of the event (if you have not declared the event anonymous.

**Parameters**

QUANTITY - The filter id

**Returns**

Object - An object of type FilterLog is defined as

removed: BOOLEAN - true when the log was removed, due to a chain reorganization. false if its a valid log

logIndex: QUANTITY - Integer of the log index position in the block. null when its pending log

transactionIndex: QUANTITY - Integer of the transactions index position log was created from. null when its pending log

transactionHash: DATA, 32 Bytes - hash of the transactions this log was created from. null when its pending log

blockHash: DATA, 32 Bytes - hash of the block where this log was in. null when its pending. null when its pending log

blockNumber: QUANTITY - The block number where this log was in. null when its pending. null when its pending log

address: DATA, 20 Bytes - address from which this log originated

data: DATA - contains one or more 32 Bytes non-indexed arguments of the log

topics: Array of DATA - Array of 0 to 4 32 Bytes DATA of indexed log arguments.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getFilterChanges",
	"params":[
		"0xdeadbeef"
	],
	"id":"1"
}
```



### 2. getLogs


Returns an array of logs matching a given filter object.

**Parameters**

Object - An object of type Filter, see eth_newFilter parameters

**Returns**

Object - An object of type LogArray or an empty array if nothing has changed since last poll. See eth_getFilterChanges


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getLogs",
	"params":[{
		"topics":[
			"0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"
		]
	}],
	"id":"1"
}
```



### 3. newBlockFilter


Creates a block filter in the node, to notify when a new block arrives. To check if the state has changed, call eth_getFilterChanges.

**Parameters**

None

**Returns**

QUANTITY - A filter id


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_newBlockFilter",
	"params":[],
	"id":"1"
}
```



### 4. newFilter


Creates an arbitrary filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call eth_getFilterChanges.

**Example**

A note on specifying topic filters

Topics are order-dependent. A transaction with a log with topics [A, B] will be matched by the following topic filters

[] "anything"

[A] "A in first position (and anything after)"

[null, B] "anything in first position AND B in second position (and anything after)"

[A, B] "A in first position AND B in second position (and anything after)"

[[A, B], [A, B]] "(A OR B) in first position AND (A OR B) in second position (and anything after)"

**Parameters**

Object - An object of type Filter

QUANTITY|TAG - (optional, default "latest") Integer block number, or "earliest", "latest" or "pending" for not yet mined transactions

QUANTITY|TAG - (optional, default "latest") Integer block number, or "earliest", "latest" or "pending" for not yet mined transactions

DATA|Array of DATA, 20 Bytes - (optional) Contract address or a list of addresses from which logs should originate

Array of DATA, - (optional) Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with "or" options

**Returns**

QUANTITY - A filter id


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_newFilter",
	"params": [
    {
      "fromBlock": "0x1",
      "toBlock": "0x2",
      "address": " 0x8888f1f195afa192cfee860698584c030f4c9db1",
      "topics": [
        "0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        null,
        ["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b", "0x0000000000000000000000000aff3454fce5edbc8cca8697c15331677e6ebccc"]
      ]
    }
  ],
	"id":"1"
}
```



### 5. newPendingTransactionFilter


Creates a pending transaction filter in the node. To check if the state has changed, call eth_getFilterChanges.

**Parameters**

None

**Returns**

QUANTITY - A filter id


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_newPendingTransactionFilter",
	"params":[],
	"id":"1"
}
```



### 6. uninstallFilter


Uninstalls a previously-created filter given the filter's id. Always uninstall filters when no longer needed.

**Note**

Filters timeout when they are not requested with eth_getFilterChanges for a period of time.

**Parameters**

QUANTITY - The filter id

**Returns**

Boolean - true if the filter was successfully uninstalled, false otherwise


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_uninstallFilter",
	"params":[
		"0xdeadbeef"
	],
	"id":"1"
}
```



## eth/mining



### 1. coinbase


Returns the current client coinbase address.

**Parameters**

None

**Returns**

DATA, 20 Bytes - The current coinbase address


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_coinbase",
	"params":[],
	"id":"1"
}
```



### 2. getWork


Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target').

**Parameters**

None

**Returns**

Object - An object of type Work (an array of three hashes representing block header pow-hash, seed hash and boundary condition

current: DATA, 32 Bytes - current block header pow-hash

seed: DATA, 32 Bytes - The seed hash used for the DAG

boundary: DATA, 32 Bytes - The boundary condition ('target'), 2^256 / difficulty


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getWork",
	"params":[],
	"id":"1"
}
```



### 3. hashrate


Returns the number of hashes per second that the node is mining with.

**Parameters**

None

**Returns**

QUANTITY - Number of hashes per second


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_hashrate",
	"params":[],
	"id":"1"
}
```



### 4. mining


Returns true if client is actively mining new blocks.

**Parameters**

None

**Returns**

Boolean - true if the client is mining, false otherwise


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_mining",
	"params":[],
	"id":"1"
}
```



### 5. submitHashrate


Submit the mining hashrate to the blockchain.

**Parameters**

DATA, 32 Bytes - a hexadecimal string representation of the hash rate

String - A random hexadecimal ID identifying the client

**Returns**

Boolean - true if submitting went through succesfully, false otherwise


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0", 
	"method":"eth_submitHashrate", 
	"params":[
		"0x0000000000000000000000000000000000000000000000000000000000500000", 
		"0x59daa26581d0acd1fce254fb7e85952f4c09d0915afd33d3886cd914bc7d283c"
	],
	"id":"1"
}
```



### 6. submitWork


Submits a proof-of-work solution to the blockchain.

**Parameters**

DATA, 8 Bytes - The nonce found (64 bits)

DATA, 32 Bytes - The header's pow-hash (256 bits)

DATA, 32 Bytes - The mix digest (256 bits)

**Returns**

Boolean - true if the provided solution is valid, false otherwise


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0", 
	"method":"eth_submitWork", 
	"params":[
		"0x1", 
		"0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", 
		"0xD16E5700000000000000000000000000D16E5700000000000000000000000000"
	],
	"id":"1"
}
```



## eth/system



### 1. blockNumber


Returns the block number of most recent block.

**Parameters**

None

**Returns**

QUANTITY - Integer of the current highest block number the client is on


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_blockNumber",
	"params":[],
	"id":"1"
}
```



### 2. chainId


Returns the current ethereum chainId.

**Parameters**

None

**Returns**

QUANTITY - The current chainId


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_chainId",
	"params":[],
	"id":"1"
}
```



### 3. gasPrice


Returns the current price per gas in wei.

**Parameters**

None

**Returns**

QUANTITY - Integer of the current gas price in wei


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_gasPrice",
	"params":[],
	"id":"1"
}
```



### 4. protocolVersion


Returns the current ethereum protocol version.

**Parameters**

None

**Returns**

QUANTITY - The current ethereum protocol version


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_protocolVersion",
	"params":[],
	"id":"1"
}
```



### 5. syncing


Returns a data object detailing the status of the sync process or false if not syncing.

**Parameters**

None

**Returns**

Object - An object of type Syncing or false if not syncing.

startingBlock: QUANTITY - The block at which the import started (will only be reset, after the sync reached his head)

currentBlock: QUANTITY - The current block, same as eth_blockNumber

highestBlock: QUANTITY - The estimated highest block


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_syncing",
	"params":[],
	"id":"1"
}
```



## eth/txs



### 1. getTransactionByBlockHashAndIndex


Returns information about a transaction given the block's hash and a transaction index.

**Parameters**

DATA, 32 Bytes - hash of a block

QUANTITY - Integer of the transaction index position

**Returns**

Object - An object of type Transaction or null when no transaction was found. See eth_getTransactionByHash


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionByBlockHashAndIndex",
	"params":[
		"0x785b221ec95c66579d5ae14eebe16284a769e948359615d580f02e646e93f1d5", 
		"0x25"
	],
	"id":"1"
}
```



### 2. getTransactionByBlockNumberAndIndex


Returns information about a transaction given a block number and transaction index.

**Parameters**

TAG - Integer block number or one of "earliest", "latest" or "pending"

QUANTITY - The transaction index position

**Returns**

Object - An object of type Transaction or null when no transaction was found. See eth_getTransactionByHash


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionByBlockNumberAndIndex",
	"params":[
		"0x52a90b", 
		"0x25"
	],
	"id":"1"
}

```



### 3. getTransactionByHash


Returns information about a transaction given the transaction's hash.

**Parameters**

DATA, 32 Bytes - hash of a transaction

**Returns**

Object - An object of type Transaction or null when no transaction was found

hash: DATA, 32 Bytes - hash of the transaction

nonce: QUANTITY - The number of transactions made by the sender prior to this one

blockHash: DATA, 32 Bytes - hash of the block where this transaction was in. null when its pending

blockNumber: QUANTITY - block number where this transaction was in. null when its pending

transactionIndex: QUANTITY - Integer of the transactions index position in the block. null when its pending

from: DATA, 20 Bytes - address of the sender

to: DATA, 20 Bytes - address of the receiver. null when its a contract creation transaction

value: QUANTITY - value transferred in Wei

gasPrice: QUANTITY - gas price provided by the sender in Wei

gas: QUANTITY - gas provided by the sender

input: DATA - The data send along with the transaction


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionByHash",
	"params":[
		"0xb2fea9c4b24775af6990237aa90228e5e092c56bdaee74496992a53c208da1ee"
	],
	"id":"1"
}
```



### 4. getTransactionReceipt


Returns the receipt of a transaction given the transaction's hash.

**Note**

Receipts are not available for pending transactions.

**Parameters**

DATA, 32 Bytes - hash of a transaction

**Returns**

Object - An object of type TransactionReceipt or null when no receipt was found

transactionHash: DATA, 32 Bytes - hash of the transaction

transactionIndex: QUANTITY - Integer of the transactions index position in the block

blockHash: DATA, 32 Bytes - hash of the block where this transaction was in

blockNumber: QUANTITY - block number where this transaction was in

cumulativeGasUsed: QUANTITY - The total amount of gas used when this transaction was executed in the block

gasUsed: QUANTITY - The amount of gas used by this specific transaction alone

contractAddress: DATA, 20 Bytes - The contract address created, if the transaction was a contract creation, null otherwise

logs: Array - Array of log objects, which this transaction generated

logsBloom: DATA, 256 Bytes - Bloom filter for light clients to quickly retrieve related logs.

root: DATA 32 bytes - post-transaction stateroot (if the block is pre-Byzantium)

status: QUANTITY - either 1 = success or 0 = failure (if block is Byzatnium or later)


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionReceipt",
	"params":[
		"0xa3ece39ae137617669c6933b7578b94e705e765683f260fcfe30eaa41932610f"
	],
	"id":"1"
}
```



## eth/uncles



### 1. getUncleByBlockHashAndIndex


Returns information about an uncle given a block's hash and the index of the uncle.

**Parameters**

DATA, 32 Bytes - Hash of the block holding the uncle

QUANTITY - The uncle's index position

**Returns**

Object - An object of type Block (with zero transactions), or null when no uncle was found. See eth_getBlockByHash


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getUncleByBlockHashAndIndex",
	"params":[
		"0x3d6122660cc824376f11ee842f83addc3525e2dd6756b9bcf0affa6aa88cf741", 
		"0x0"
	],
	"id":"1"
}
```



### 2. getUncleByBlockNumberAndIndex


Returns information about an uncle given a block's number and the index of the uncle.

**Parameters**

TAG - Integer block number or one of "earliest", "latest" or "pending"

QUANTITY - The uncle's index position

**Returns**

Object - An object of type Block (with zero transactions), or null when no uncle was found. See eth_getBlockByHash


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getUncleByBlockNumberAndIndex",
	"params":[
		"0x3",
		"0x0"
	],
	"id":"1"
}
```



### 3. getUncleCountByBlockHash


Returns the number of uncles in the block, if any.

**Parameters**

DATA, 32 Bytes - Hash of the block containing the uncle

**Returns**

QUANTITY - The number of uncles in the block, if any


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getUncleCountByBlockHash",
	"params":[
		"0x3d6122660cc824376f11ee842f83addc3525e2dd6756b9bcf0affa6aa88cf741"
	],
	"id":"1"
}
```



### 4. getUncleCountByBlockNumber


Returns the number of uncles in the block, if any.

**Parameters**

TAG - Integer block number or one of "earliest", "latest" or "pending"

**Returns**

QUANTITY - The number of uncles in the block, if any


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"eth_getUncleCountByBlockNumber",
	"params":[
		"0x3"
  ],
	"id":"1"
}
```



## net



### 1. listening


Returns true if client is actively listening for network connections.

**TODO**

The code currently returns a hard coded true value. Remove hard coded value.

**Parameters**

None

**Returns**

Boolean - true when listening, false otherwise


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"net_listening",
	"params":[],
	"id":"1"
}
```



### 2. peerCount


Returns number of peers currently connected to the client.

**TODO**

This routine currently returns a hard coded value of '25'

**Parameters**

None

**Returns**

QUANTITY - Integer of the number of connected peers


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"net_peerCount",
	"params":[],
	"id":"1"
}
```



### 3. version


Returns the current network id.

**Parameters**

None

**Returns**

STRING - The current network id. One of BR  "1": Ethereum Mainnet BR  "2": Morden Testnet (deprecated) BR  "3": Ropsten Testnet BR  "4": Rinkeby Testnet BR  "42": Kovan Testnet BR


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"net_version",
	"params":[],
	"id":"1"
}
```



## tg



### 1. forks


Returns the genesis block hash and a sorted list of already passed fork block numbers as well as the next fork block (if applicable)

**Parameters**

None

**Returns**

Object - An object of type Fork

genesis: DATA, 32 Bytes - The hash of the genesis block

passed: ARRAY of QUANTITY - Array of block numbers passed by this client

next: QUANTITY - (optional) the next fork block


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"tg_forks",
	"params":[],
	"id":"1"
}
```



### 2. getHeaderByHash


Returns a block's header given a block's hash.

**Parameters**

DATA, 32 Bytes - Hash of a block

**Returns**

Object - An object of type BlockHeader or null when no block was found. See eth_getBlockByHash


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"tg_getHeaderByHash",
	"params":[
		"0x3d6122660cc824376f11ee842f83addc3525e2dd6756b9bcf0affa6aa88cf741"
	],
	"id":"1"
}
```



### 3. getHeaderByNumber


Returns a block's header given a block number ignoring the block's transaction and uncle list (may be faster).

**Parameters**

TAG - Integer block number or one of "earliest", "latest" or "pending"

**Returns**

Object - An object of type BlockHeader or null when no block was found. See eth_getBlockByHash


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"tg_getHeaderByNumber",
	"params":[
		"0x3"
	],
	"id":"1"
}
```



### 4. getLogsByHash


Returns an array of arrays of logs generated by the transactions in the block given by the block's hash.

**Note**

The returned value is an array of arrays of log entries. There is an entry for each transaction in the block. BR  BR If transaction X did not create any logs, the entry at result[X] will be null BR  BR If transaction X generated N logs, the entry at position result[X] will be an array of N log objects

**Parameters**

DATA, 32 Bytes - Hash of block at which to retreive data

**Returns**

Object - An object of type LogArray some of which may be null found in the block. See eth_getFilterChanges


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"tg_getLogsByHash",
	"params":[
		"0x2f244c154cbacb0305581295b80efa6dffb0224b60386a5fc6ae9585e2a140c4"
	],
	"id":"1"
}
```



### 5. issuance


Returns the total issuance (block reward plus uncle reward) for the given block.

**Parameters**

TAG - Integer block number or one of "earliest", "latest" or "pending"

**Returns**

Object - An object of type Issuance

blockReward: QUANTITY - The issuance to the miner of the block (includes nephew reward but not transaction fees)

uncleReward: QUANTITY - The issuance to miners of included uncle (if any)

issuance: QUANTITY - The sum of blockReward and uncleReward


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"tg_issuance",
	"params":[
		"0x3"
	],
	"id":"1"
}
```



## trace



### 1. block


Returns traces created at given block.

**Parameters**

TAG - Integer of a block number, or the string 'earliest', 'latest' or 'pending'.

**Returns**

Object - An object of type AdhocTraceArray.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"trace_block",
	"params":["0x3"],
	"id":"1"
}

```



### 2. call


Executes the given call and returns a number of possible traces for it.

**Parameters**

Object - An object of type TraceCall

from: DATA, 20 Bytes - (optional) 20 Bytes - The address the transaction is send from.

to: DATA, 20 Bytes - (optional when creating new contract) 20 Bytes - The address the transaction is directed to.

gas: QUANTITY - (optional) Integer formatted as a hex string of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be needed by some executions.

gasPrice: QUANTITY - (optional) Integer formatted as a hex string of the gas price used for each paid gas.

value: QUANTITY - (optional) Integer formatted as a hex string of the value sent with this transaction.

data: DATA - (optional) 4 byte hash of the method signature followed by encoded parameters. For details see Ethereum Contract ABI.

STRINGARRAY - An array of strings, one or more of: "vmTrace", "trace", "stateDiff".

TAG - (optional) Integer of a block number, or the string 'earliest', 'latest' or 'pending'.

**Returns**

Object - An object of type BlockTraceArray


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
  "jsonrpc":"2.0",
  "method":"trace_call",
  "params":[
    {
      "from":"0x407d73d8a49eeb85d32cf465507dd71d507100c1",
      "to":"0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
      "value":"0x186a0"
    },
    ["trace","vmTrace"],
    "latest"
  ],
  "id": "1"
}

```



### 3. callMany


Performs multiple call traces on top of the same block. i.e. transaction n will be executed on top of a pending block with all n-1 transactions applied (traced) first. Allows to trace dependent transactions.

**Parameters**

CALLARRAY - An array of Call objects plus strings, one or more of: "vmTrace", "trace", "stateDiff".

TAG - (optional) integer block number, or the string 'latest', 'earliest' or 'pending', see the default block parameter.

**Returns**

Object - An object of type BlockTraceArray


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"trace_callMany",
  "params": [
    [
      [
        {
          "from":"0x407d73d8a49eeb85d32cf465507dd71d507100c1",
          "to":"0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
          "value":"0x186a0"
        },
        ["trace"]
      ],
      [
        {
          "from":"0x407d73d8a49eeb85d32cf465507dd71d507100c1",
          "to":"0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
          "value":"0x186a0"
        },
        ["trace"]
      ]
    ],
    "latest"
  ],
	"id":"1"
}

```



### 4. filter


Returns traces matching given filter

**Parameters**

Object - An object of type TraceFilter

fromBlock: TAG - (optional) From this block.

toBlock: TAG - (optional) To this block.

fromAddress: DATA, 20 Bytes - (optional) Sent from these addresses.

toAddress: DATA, 20 Bytes - (optional) Sent to these addresses.

after: QUANTITY - (optional) The offset trace number

count: QUANTITY - (optional) Integer number of traces to display in a batch.

**Returns**
Object - An object of type AdHocTraceArray matching the given filter.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"trace_filter",
  "params":[
    {
      "fromBlock":"0x3",
      "toBlock":"0x3"
    }
  ],
	"id":"1"
}

```



### 5. get


Returns trace at given position.

**Parameters**

DATA, 32 Bytes - The transaction's hash.

QUANTITYARRAY - The index position of the trace.

**Returns**

Object - An object of type AdhocTraceArray, see trace_filter.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"trace_get",
  "params":[
    "0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",
    ["0x0"]
  ],
	"id":"1"
}

```



### 6. rawTransaction


Traces a call to eth_sendRawTransaction without making the call, returning the traces

**Parameters**
DATA - Raw transaction data.

STRINGARRAY - Type of trace, one or more of: "vmTrace", "trace", "stateDiff".

**Returns**
Object - An object of type BlockTrace.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"trace_rawTransaction",
	"params":["0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3", ["vmTrace"]],
	"id":"1"
}
```



### 7. replayBlockTransactions


Replays all transactions in a block returning the requested traces for each transaction.

**Parameters**

TAG - Integer of a block number, or the string 'earliest', 'latest' or 'pending'.

STRINGARRAY - Type of trace, one or more of: "vmTrace", "trace", "stateDiff".

**Returns**

Object - An object of type BlockTraceArray.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"trace_replayBlockTransactions",
	"params":["0x2",["trace"]],
	"id":"1"
}
```



### 8. replayTransaction


Replays a transaction, returning the traces.

**Parameters**
DATA, 32 Bytes - The transaction's hash.

STRINGARRAY - Type of trace, one or more of: "vmTrace", "trace", "stateDiff".

**Returns**
Object - An object of type BlockTrace.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"trace_replayTransaction",
  "params": [
    "0x02d4a872e096445e80d05276ee756cefef7f3b376bcec14246469c0cd97dad8f",
    ["trace"]
  ],
	"id":"1"
}
```



### 9. transaction


Returns traces for the given transaction

**Parameters**

DATA, 32 Bytes - The transaction's hash

**Returns**

Object - An object of type AdhocTraceArray, see trace_filter.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"trace_transaction",
  "params":["0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3"],
	"id":"1"
}

```



## web3



### 1. clientVersion


Returns the current client version.

**Parameters**

None

**Returns**

STRING - The current client version string including node name and version


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
    "jsonrpc": "2.0",
    "method": "web3_clientVersion",
    "params": [],
    "id": "1"
}
```



### 2. sha3


Returns Keccak-256 (not the standardized SHA3-256) of the given data.

**Parameters**

DATA - The data to convert into a SHA3 hash

**Returns**

DATA - The SHA3 result of the given input string


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{HOST}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"jsonrpc":"2.0",
	"method":"web3_sha3",
	"params":["0x68656c6c6f20776f726c64"],
	"id":"1"
}
```



---
[Back to top](#rpc_testing)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2021-01-08 22:34:09 by [docgen](https://github.com/thedevsaddam/docgen)
