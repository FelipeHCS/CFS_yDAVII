const execute = (mandrakizin, message, args) => {
    const queue = mandrakizin.queues.get(message.guild.id);
    if(!queue) {
        return message.reply("Não há nenhuma música sendo reproduzida.");
    }
    queue.dispatcher.pause();
    message.channel.send("⏸️ Música pausada");
};

module.exports = {
    name: "pause",
    help: "Pausa a música atual",
    execute,
};