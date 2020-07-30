const Discord = require ("discord.js");
const execute = async (mandrakzin, message, args) => {
    message.delete()

    let embed0 = new Discord.MessageEmbed()
        .setColor('#50ff00')
        .setThumbnail('https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/84217971_3121437868080367_3060403398013616128_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeHx22aPo6lmh4eftw6gQNNYUxUmJeM3IpVTFSYl4zcild0AU1sED1wymL-gpPahRagE75nOq8wAoD10bUA040oA&_nc_ohc=Y5VjvO2D8M0AX827N4o&_nc_ht=scontent-gig2-1.xx&oh=c236e1206b3f44628561bc629720b169&oe=5F462AB7')
        .addField('Quem me desenvolveu?','Sou um bot desenvolvido pelo @Felipe Hilário #5995')
        .addField('Quando fui desenvolvido?', 'Fui desenvolvido no mês de julho e fui publicado no dia 01/08')
        .addField('Porque fui desenvolvido?', 'Fui desenvolvido para ser um bot que auxilie os admins e usuários para a boa experiência no discord')
        .addField('Deseja fazer um bot?', 'Entre em contato com o <@450828668751839244> ou entre no link e mencione o <@450828668751839244>: https://discord.gg/E2jVF2B')
        .setTimestamp()
        .setFooter(mandrakzin.user.username, mandrakzin.user.displayAvatarURL())

    message.channel.send(embed0)
}
module.exports = {
    name:"developer",
    execute,
}