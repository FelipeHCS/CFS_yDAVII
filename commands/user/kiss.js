const Discord = require("discord.js");
const execute = async (mandrakzin, message, args) => {
    if (args[0]) {
        let user = message.mentions.users.first() || message.guild.users.get(args[0])

        let embed0 = new Discord.MessageEmbed()
            .setColor('#50ff00')
            .setDescription(`${message.author} beijou ${user}`)
            .setImage(`https://media.giphy.com/media/BODYd97UpZ4Fq/giphy.gif`)
            .setTimestamp()
            .setFooter(mandrakzin.user.username, mandrakzin.user.displayAvatarURL())

        let enviar = await message.channel.send(embed0)
        await enviar.react("💓")

    } else if (!args[0]) {

        let embed1 = new Discord.MessageEmbed()
            .setColor('#50ff00')
            .addField('Como me usar?', 'Digite m.kiss @pessoa para beijar alguém.')
            .setTimestamp()
            .setFooter(mandrakzin.user.username, mandrakzin.user.displayAvatarURL())

       let enviar2 = await message.channel.send(embed1)
        await enviar2.react("✔️")
    }
}
module.exports = {
    name: "kiss",
    execute,
}