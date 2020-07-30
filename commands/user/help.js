const Discord = require("discord.js");
const execute = async (mandrakizin, message, args) => {
    message.delete();

    let embed0 = new Discord.MessageEmbed()
        .setColor('#50ff00')
        .setImage('https://media.giphy.com/media/AeWoyE3ZT90YM/giphy.gif')
        .setDescription('Meus comandos:')
        .addField(`${process.env.BOT_PREFIX}Afk`, 'O usuário quando ativa o modo Afk, informará que ficará ausente!')
        .addField(`${process.env.BOT_PREFIX}Clear`, 'Limpa o chat de 0 à 100 mensagens!')
        .addField(`${process.env.BOT_PREFIX}Denuncia`, 'Efetua uma denúncia para algum admin')
        .addField(`${process.env.BOT_PREFIX}Developer`, 'Vê quem foi o criador do Bot')
        .addField(`${process.env.BOT_PREFIX}Kiss`, 'Beija alguém no servidor')
        .addField(`${process.env.BOT_PREFIX}Planos`, 'Vê os planos e como solicitar para o seu servidor!')
        .addField(`${process.env.BOT_PREFIX}Roll`, 'Roda o dado')
        .addField(`${process.env.BOT_PREFIX}Ticket`, 'Abre um ticket de comunicação entre o usuário e o admin')
        .addField(`${process.env.BOT_PREFIX}Play`, 'Inicia uma música')
        .addField(`${process.env.BOT_PREFIX}Pause`, 'Pausa uma música')
        .addField(`${process.env.BOT_PREFIX}Resume`, 'Continua uma música')
        .addField(`${process.env.BOT_PREFIX}Stop`, 'Para uma música')
        .addField(`${process.env.BOT_PREFIX}Skip`, 'Pula uma música')
        .setFooter(mandrakizin.user.username, mandrakizin.user.displayAvatarURL())
    await message.channel.send(embed0);
}
module.exports = {
    name: "help",
    execute,
}