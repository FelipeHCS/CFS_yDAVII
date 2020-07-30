const Discord = require("discord.js");
const execute = async(mandrakizin, message, args) => {
    message.delete();
   
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Você não possui permissão para isso.`)

    let embed0 = new Discord.MessageEmbed()

        .setColor('#50ff00')
        .setDescription('Olá Admin, seus comandos:')
        .setImage('https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif')
        .addField(`${process.env.BOT_PREFIX}Anuncio`,'Emite um anúncio para os usuários')
        .addField(`${process.env.BOT_PREFIX}Ban`,'Efetua um Banimento de um usuário!')
        .addField(`${process.env.BOT_PREFIX}Kick`,'Efetua a expulsão de um usuário!')
        .setFooter(mandrakizin.user.username, mandrakizin.user.displayAvatarURL())
    await message.channel.send(embed0);
}
module.exports = {
    name: "ajuda",
    execute,
}