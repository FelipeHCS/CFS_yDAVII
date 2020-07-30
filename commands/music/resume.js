const execute = (mandrakizin, message, args) => {
    const queue = mandrakizin.queues.get(message.guild.id);
    if(!queue) {
        return message.reply("Não há nenhuma música sendo reproduzida.");
    }
    queue.dispatcher.resume();
    message.channel.send("⏯️ Música resumida");
};

module.exports = {
    name: "resume",
    help: "Continua a tocar a música atual",
    execute,
};