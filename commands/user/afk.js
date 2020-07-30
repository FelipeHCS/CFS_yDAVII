const Discord = require("discord.js");
const execute = async (mandrakzin, message, args) => {
    message.delete();

    let say = `😴 | O ${message.author} ativou o modo AFK, ele será ativado automaticamente assim que você digitar algo em algum canal!`

    let enviar = await message.channel.send(say)
    await enviar.react("😏")
}
module.exports = {
    name: "afk",
    execute,
}