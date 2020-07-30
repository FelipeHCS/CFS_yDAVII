const playSong = require("./play").playSong;

const execute = (mandrakizin, message, args) => {
    const queue = mandrakizin.queues.get(message.guild.id);
    if(!queue) {
        return message.reply("Não há nenhuma música sendo reproduzida.");
    }
    queue.songs.shift();
    mandrakizin.queues.set(message.guild.id, queue);
    playSong(mandrakizin, message, queue.songs[0]);

    message.channel.send("⏭️ Próxima música...").then(message.react('✅'));
};

module.exports = {
    name: "skip",
    help: "Pula a música atual para a próxima na fila",
    execute,
}