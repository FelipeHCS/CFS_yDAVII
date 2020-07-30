const Discord = require("discord.js")
const execute = async (mandrakzin, message, args) => {
    message.delete();

    let ques1 = "Qual usuário você deseja reportar? (Marque com @)";
    let ques2 = "Informe o motivo do report";
    let ques3 = "Você possui prints, vídeos ou qualquer tipo de prova? (Responda Sim ou Não)"
    let autor = message.author
    let canal;
    message.channel.send(ques1);
    let p1 = message.channel.createMessageCollector(m => m.author.id === message.author.id, {
        max: 1,
        time: 60000
    })
    p1.on("collect", async (msg) => {
        canal = msg.mentions.channels.first()
        message.channel.send(ques2);
        let p2 = message.channel.createMessageCollector(m => m.author.id === message.author.id, {
            max: 1,
            time: 60000
        });
        p2.on("collect", async () => {
            message.channel.send(ques3);
            let p3 = message.channel.createMessageCollector(m => m.author.id === message.author.id, {
                max: 1,
                time: 60000
            });
            p3.on("collect", async () => {
                if (p3.collected.first().content === "Sim") {
                    let embed = new Discord.MessageEmbed()
                        .setColor("#50ff00")
                        .setTitle("Nova Denúncia:")
                        .setAuthor(`${autor.tag}`)
                        .setDescription(` Usuário reportado: ${p1.collected.first().content}, \n 
                        Motivo do report: ${p2.collected.first().content}`)
                        .setImage('https://media.giphy.com/media/l2JejZk2vRJmzSNjy/giphy.gif')
                        .setFooter(mandrakizin.user.username, mandrakizin.user.displayAvatarURL());

                    let piru = message.guild.channels.cache.get("731621064211169321").send(embed); //id do canal de denúncias

                    let supportCategory = message.guild.channels.cache.get("730386405481775190"); //Id da categoria

                    if (message.guild.me.hasPermission("MANAGE_CHANNELS") && !supportCategory) {
                        supportCategory = await message.guild.channels.create('Tickets', {
                            type: "category",
                        });
                    };
                    if (!message.guild.me.hasPermission("MANAGE_CHANNELS") && !supportCategory) {
                        message.channel.send("Você não tem permissões para criar a categoria do ticket")
                    }

                    if (!message.guild.roles.cache.find(role => role.name === "Support Team")) {
                        await (message.guild.roles.create({
                            name: "Support Team",
                            color: "Blue",
                        }));
                    };


                    const channelName = `ticket-${message.author.username}-${message.author.discriminator}`
                    if (message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.username.toLowerCase()}-${message.author.discriminator}`)) {
                        return message.channel.send("Desculpe, mas você já possui um ticket aberto, informe nele a sua denúncia!")
                    }

                    message.guild.channels.create(channelName, { parent: '730386405481775190', topic: `Ticket Owner: ${message.author.id}` }).then(c => {

                        const sr = message.guild.roles.cache.get('726970299282751509') // Id do cargo do bot
                        const everyone = message.guild.roles.cache.find(role => role.name === "@everyone")

                        c.updateOverwrite(sr, {
                            SEND_MESSAGES: false,
                            VIEW_CHANNEL: false,
                        });
                        c.updateOverwrite(everyone, {
                            SEND_MESSAGES: false,
                            VIEW_CHANNEL: false,
                        });
                        c.updateOverwrite(message.author, {
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true,
                        });
                        let CreatedTicketEmbed = new Discord.MessageEmbed()
                            .setColor('#50ff00')
                            .setTitle("Ticket para Denúncia")
                            .setDescription(`<@${message.author.id}> Seu canal para o envio das provas é o: <#${c.id}> `)
                            .setTimestamp()
                            .setFooter(mandrakizin.user.username, mandrakizin.user.displayAvatarURL());
                        message.channel.send(CreatedTicketEmbed)
                        // Comando enviado no canal após a mensagem.

                        let GreetEmbed = new Discord.MessageEmbed()
                            .setColor('#50ff00')
                            .addField("Ticket para Denúncia", `<@${message.author.id}> Obrigado por entrar em contato conosco, envie sua prova aqui!`)
                            .setTimestamp()
                            .setFooter(mandrakizin.user.username, mandrakizin.user.displayAvatarURL());
                        // Comando enviado após a criação do canal de ticket.
                        c.send(GreetEmbed)
                    }).catch(console.error);
                } else if (p3.collected.first().content === "Não") {
                    let embed3 = new Discord.MessageEmbed()
                        .setColor("#3d027e")
                        .setTitle("Nova Denúncia:")
                        .setAuthor(`${autor.tag}`)
                        .setDescription(` Usuário reportado: ${p1.collected.first().content}, \n 
                        Motivo do report: ${p2.collected.first().content}`)
                        .setImage('https://media.giphy.com/media/l2JejZk2vRJmzSNjy/giphy.gif')
                        .setFooter(mandrakizin.user.username, mandrakizin.user.displayAvatarURL());
                    let pintin = message.guild.channels.cache.get("731621064211169321").send(embed3)

                    let embed4 = new Discord.MessageEmbed()
                        .setColor("#50ff00")
                        .setTitle("Denúncia:")
                        .setAuthor(`${autor.tag}`)
                        .setDescription(`Sua denúncia foi enviada com sucesso e estaremos averiguando a veracidade dos fatos.`)
                        .setFooter(mandrakizin.user.username, mandrakizin.user.displayAvatarURL());
                    let pauzin = message.guild.channels.cache.get("731669829710512240").send(embed4)
                }
            })
        })
    })
}
module.exports = {
    name: "denuncia",
    execute,
}