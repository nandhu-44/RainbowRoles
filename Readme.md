## Rainbow Roles
>Note: This package does not abuse Discord Api in any manner!

### Example Bot
```js
const { Client } = require("discord.js")
const client = new Client({
  intents: 32767,//All the intents, you can use yours too
})

const { RainbowRole } = require("djs-rainbow")

//This feature can be used in any events like messageCreate but i am using in ready event.

client.on("ready", async() => {

  const Rainbow = new RainbowRole({
  client:client,//Or your client object
  guildId:"123456789012345",//Server Id
  roleId:"123456789012345",//Role Id
  interval:90000 // this is the time
  
})
Rainbow.start() //Initialize this feature

console.log("Bot is online!")

})

client.login("Discord bot token")

```

<br>
<br>

#### __Options__ 

```js
{
client:client,    //Required! , default none
guildId:"guildid",//Required! , default none
roleId:"roleId",  //Required! , default none
interval:90000    //Not Required! , default 90 seconds
}
```

If you need any help then feel free to join the [Support Server](https://discord.gg/zyRX8nNt7b)
