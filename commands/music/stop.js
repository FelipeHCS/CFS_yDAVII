const execute = (mandrakizin, message, args) => {
    const queue = mandrakizin.queues.get(message.guild.id);
    if(!queue) {
        return message.reply("Não há nenhuma música sendo reproduzida.");
    }
    queue.songs = [];
    mandrakizin.queues.set(message.guild.id, queue);
    queue.dispatcher.end();
    message.channel.send("⏹️ Todas as músicas foram paradas")
};

module.exports = {
    name: "stop",
    help: "Para todas as músicas na fila",
    execute,
}