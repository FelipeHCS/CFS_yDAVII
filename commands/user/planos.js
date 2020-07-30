const Discord = require("discord.js");
const execute = async(mandrakizin, message, args) => {
    message.delete();

    let embed0 = new Discord.MessageEmbed()
        .setColor('')
        .addField('Orçamento de bot:','Para solicitar o orçamento de seu bot, converse com o <@450828668751839244> ou acesse: https://discord.gg/E2jVF2B')
        .setFooter(mandrakizin.user.username, mandrakizin.user.displayAvatarURL())

    await message.channel.send(embed0);
}
module.exports = {
    name:"planos",
    execute,
}