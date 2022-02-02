module.exports = class RainbowRole {
     constructor(options = {}) {
    if(!options.client) throw new ReferenceError("[CLIENT_UNAVALIABLE] Please add a client object to start your rainbow roles!")
    this.client = options.client;
    if(!options.guildId) throw new ReferenceError("[GUILD_UNAVAILABLE] Please provide a guild id to set up rainbow roles")
    this.guildId = options.guildId
    if(typeof options.guildId !== 'string') throw new TypeError("[GUILD_INVALID] Provide guild id as a string !")
    if(!options.roleId) throw new ReferenceError("[ROLE_UNAVAILABLE] Please provide a role id to set up rainbow roles")
    this.roleId = options.roleId
    if(typeof options.roleId !== 'string') throw new TypeError("[ROLE_INVALID] Provide role id as a string !")
    if(!options.interval) options.interval = 90000;
    if(options.interval < 60000) throw new RangeError("[INTERVAL_TOO_LOW] You are only supposed to put intervals greater than 60 seconds!")
    this.interval = options.interval;
    if(typeof options.interval !== "number") throw new TypeError("[INTERVAL_INVALID] Interval must be a number!")
   
 }
 async start(){
   const serverId = this.guildId
   const roleid = this.roleId
   const client = this.client
   const interval = this.interval
   if(!client.guilds.cache.get(serverId)) throw new TypeError("[GUILD_INVALID] Couldn't find any guild with this id !")

   const server = client.guilds.cache.get(serverId)
   if(!server.roles.cache.get(roleid)) throw new TypeError("[ROLE_INVALID] Couldn't find any role with this id !")
   const role = server.roles.cache.get(roleid) 
   setInterval(async()=>{
     var letters = '0123456789ABCDEF';
     var color = '#';
     for (var i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
     var Color = color;
   }
     role.setColor(Color)
   },interval)

 }    

}