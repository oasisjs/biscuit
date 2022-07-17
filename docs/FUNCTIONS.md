# Functions

  - [function enableCache(Session)](#function-enablecachesession)

  - [function enableCache(Session)](#function-enablecachesession)

  - [function processGlobalQueue(RestManager)](#function-processglobalqueuerestmanager)

  - [function checkRateLimits(RestManager, string)](#function-checkratelimitsrestmanager-string)

  - [function createRequestBody(RestManager, CreateRequestBodyOptions)](#function-createrequestbodyrestmanager-createrequestbodyoptions)

  - [function convertRestError(Error, RestRequestRejection)](#function-convertresterrorerror-restrequestrejection)

  - [function runMethod(RestManager, RequestMethod, string, unknown, )](#function-runmethodrestmanager-requestmethod-string-unknown-)

  - [function cleanupQueues(RestManager)](#function-cleanupqueuesrestmanager)

  - [function sendRequest(RestManager, RestSendRequestOptions)](#function-sendrequestrestmanager-restsendrequestoptions)

  - [function processRequestHeaders(RestManager, string, Headers)](#function-processrequestheadersrestmanager-string-headers)

  - [function processQueue(RestManager, string)](#function-processqueuerestmanager-string)

  - [function simplifyUrl(string, string)](#function-simplifyurlstring-string)

  - [function processRequest(RestManager, RestRequest, RestPayload)](#function-processrequestrestmanager-restrequest-restpayload)

  - [function processRateLimitedPaths(RestManager)](#function-processratelimitedpathsrestmanager)

  - [function createRestManager(CreateRestManagerOptions)](#function-createrestmanagercreaterestmanageroptions)

  - [function removeTokenPrefix(string, )](#function-removetokenprefixstring-)

  - [function getBotIdFromToken(string)](#function-getbotidfromtokenstring)

  - [function stop(GatewayManager, number, string)](#function-stopgatewaymanager-number-string)

  - [function createShardManager(CreateShardManager)](#function-createshardmanagercreateshardmanager)

  - [function calculateWorkerId(GatewayManager, number)](#function-calculateworkeridgatewaymanager-number)

  - [function tellWorkerToIdentify(GatewayManager, number, number, number)](#function-tellworkertoidentifygatewaymanager-number-number-number)

  - [function calculateTotalShards(GatewayManager)](#function-calculatetotalshardsgatewaymanager)

  - [function createGatewayManager(PickPartial)](#function-creategatewaymanagerpickpartial)

  - [function spawnShards(GatewayManager)](#function-spawnshardsgatewaymanager)

  - [function prepareBuckets(GatewayManager)](#function-preparebucketsgatewaymanager)

  - [function calculateSafeRequests(Shard)](#function-calculatesaferequestsshard)

  - [function stopHeartbeating(Shard)](#function-stopheartbeatingshard)

  - [function handleMessage(Shard, MessageEvent)](#function-handlemessageshard-messageevent)

  - [function close(Shard, number, string)](#function-closeshard-number-string)

  - [function connect(Shard)](#function-connectshard)

  - [function isOpen(Shard)](#function-isopenshard)

  - [function shutdown(Shard)](#function-shutdownshard)

  - [function startHeartbeating(Shard, number)](#function-startheartbeatingshard-number)

  - [function identify(Shard)](#function-identifyshard)

  - [function handleClose(Shard, CloseEvent)](#function-handlecloseshard-closeevent)

  - [function resume(Shard)](#function-resumeshard)

  - [function send(Shard, ShardSocketRequest, boolean)](#function-sendshard-shardsocketrequest-boolean)

  - [function createShard(CreateShard)](#function-createshardcreateshard)

  - [function embed(Embed)](#function-embedembed)

  - [function NewMessageReactionAdd(Session, DiscordMessageReactionAdd)](#function-newmessagereactionaddsession-discordmessagereactionadd)

  - [function NewTeam(Session, DiscordTeam)](#function-newteamsession-discordteam)

  - [function urlToBase64(string)](#function-urltobase64string)

  - [function encode()](#function-encode)

  - [function transformOasisInteractionDataOption(DiscordInteractionDataOption)](#function-transformoasisinteractiondataoptiondiscordinteractiondataoption)

  - [function NewInviteCreate(Session, DiscordInviteCreate)](#function-newinvitecreatesession-discordinvitecreate)
## [function enableCache(Session)](https://github.com/oasisjs/biscuit/tree/main/packages/cache/mod.ts#L26:0)

## [function enableCache(Session)](https://github.com/oasisjs/biscuit/tree/main/packages/cache/mod.ts#L26:0)

## [function processGlobalQueue(RestManager)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/processGlobalQueue.ts#L4:0)

## [function checkRateLimits(RestManager, string)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/checkRateLimits.ts#L4:0)
```
Check the rate limits for a url or a bucket.
```
## [function createRequestBody(RestManager, CreateRequestBodyOptions)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/createRequestBody.ts#L8:0)
```
Creates the request body and headers that are necessary to send a request. Will handle different types of methods and everything necessary for discord.
```
## [function convertRestError(Error, RestRequestRejection)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/convertRestError.ts#L3:0)

## [function runMethod(RestManager, RequestMethod, string, unknown, )](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/runMethod.ts#L5:0)

## [function cleanupQueues(RestManager)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/cleanupQueues.ts#L4:0)
```
Cleans up the queues by checking if there is nothing left and removing it.
```
## [function sendRequest(RestManager, RestSendRequestOptions)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/sendRequest.ts#L19:0)

## [function processRequestHeaders(RestManager, string, Headers)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/processRequestHeaders.ts#L4:0)
```
Processes the rate limit headers and determines if it needs to be rate limited and returns the bucket id if available
```
## [function processQueue(RestManager, string)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/processQueue.ts#L4:0)
```
Processes the queue by looping over each path separately until the queues are empty.
```
## [function simplifyUrl(string, string)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/simplifyUrl.ts#L7:0)
```
Split a url to separate rate limit buckets based on major/minor parameters.
```
## [function processRequest(RestManager, RestRequest, RestPayload)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/processRequest.ts#L6:0)
```
Processes a request and assigns it to a queue or creates a queue if none exists for it.
```
## [function processRateLimitedPaths(RestManager)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/processRateLimitedPaths.ts#L4:0)
```
This will create a infinite loop running in 1 seconds using tail recursion to keep rate limits clean. When a rate limit resets, this will remove it so the queue can proceed.
```
## [function createRestManager(CreateRestManagerOptions)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/rest/restManager.ts#L18:0)

## [function removeTokenPrefix(string, )](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/util/token.ts#L2:0)
```
Removes the Bot before the token.
```
## [function getBotIdFromToken(string)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/util/token.ts#L12:0)
```
Get the bot id from the bot token. WARNING: Discord staff has mentioned this may not be stable forever. Use at your own risk. However, note for over 5 years this has never broken.
```
## [function stop(GatewayManager, number, string)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/manager/stop.ts#L4:0)

## [function createShardManager(CreateShardManager)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/manager/shardManager.ts#L18:0)
```
Create a new Shard manager.
This does not manage a specific range of Shard but the provided Shards on create or when an identify is requested.
The aim of this is to provide an easy to use manager which can be used by workers or any other kind of separate process.
```
## [function calculateWorkerId(GatewayManager, number)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/manager/calculateWorkerId.ts#L3:0)

## [function tellWorkerToIdentify(GatewayManager, number, number, number)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/manager/tellWorkerToIdentify.ts#L6:0)
```
Allows users to hook in and change to communicate to different workers across different servers or anything they like. For example using redis pubsub to talk to other servers.
```
## [function calculateTotalShards(GatewayManager)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/manager/calculateTotalShards.ts#L4:0)
```
Handler used to determine max number of shards to use based upon the max concurrency.
```
## [function createGatewayManager(PickPartial)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/manager/gatewayManager.ts#L29:0)
```
Create a new Gateway Manager.

```
## [function spawnShards(GatewayManager)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/manager/spawnShards.ts#L8:0)
```
Begin spawning shards.
```
## [function prepareBuckets(GatewayManager)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/manager/prepareBuckets.ts#L4:0)

## [function calculateSafeRequests(Shard)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/calculateSafeRequests.ts#L3:0)

## [function stopHeartbeating(Shard)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/stopHeartbeating.ts#L3:0)

## [function handleMessage(Shard, MessageEvent)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/handleMessage.ts#L10:0)

## [function close(Shard, number, string)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/close.ts#L3:0)

## [function connect(Shard)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/connect.ts#L6:0)

## [function isOpen(Shard)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/isOpen.ts#L3:0)

## [function shutdown(Shard)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/shutdown.ts#L3:0)

## [function startHeartbeating(Shard, number)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/startHeartbeating.ts#L4:0)

## [function identify(Shard)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/identify.ts#L4:0)

## [function handleClose(Shard, CloseEvent)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/handleClose.ts#L4:0)

## [function resume(Shard)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/resume.ts#L4:0)

## [function send(Shard, ShardSocketRequest, boolean)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/send.ts#L16:0)

## [function createShard(CreateShard)](https://github.com/oasisjs/biscuit/tree/main/packages/discordeno/gateway/shard/createShard.ts#L35:0)

## [function embed(Embed)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Embed.ts#L50:0)

## [function NewMessageReactionAdd(Session, DiscordMessageReactionAdd)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/MessageReaction.ts#L25:0)

## [function NewTeam(Session, DiscordTeam)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Application.ts#L39:0)

## [function urlToBase64(string)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/util/urlToBase64.ts#L2:0)
```
Converts a url to base 64. Useful for example, uploading/creating server emojis.
```
## [function encode()](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/util/urlToBase64.ts#L40:0)
```
CREDIT: https://gist.github.com/enepomnyaschih/72c423f727d395eeaa09697058238727
Encodes a given Uint8Array, ArrayBuffer or string into RFC4648 base64 representation
```
## [function transformOasisInteractionDataOption(DiscordInteractionDataOption)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/interactions/CommandInteractionOptionResolver.ts#L4:0)

## [function NewInviteCreate(Session, DiscordInviteCreate)](https://github.com/oasisjs/biscuit/tree/main/packages/biscuit/structures/Invite.ts#L66:0)
