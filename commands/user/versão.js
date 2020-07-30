const Discord = require("discord.js");
const execute = async (mandrakizin, message, args) => {
    message.delete();

    let embed0 = new Discord.MessageEmbed()
        .setColor('#50ff00')
        .addField('Versão?','Bot Exclusivo CFS-y-DAVII')
        .addField('Quer adquirir seu próprio bot?', 'Digite: m.planos')
        .setFooter(mandrakizin.user.username, mandrakizin.user.displayAvatarURL())

    await message.channel.send(embed0)
}
module.exports = {
    name: "versao",
    execute,
}