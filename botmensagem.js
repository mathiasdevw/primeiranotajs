const { Client, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, Partials } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Message, Partials.Channel]
});

const commands = [
    new SlashCommandBuilder()
        .setName('mensagemsimples')
        .setDescription('Envia uma mensagem simples com texto.')
        .addStringOption(option =>
            option.setName('texto')
                  .setDescription('O texto da mensagem.')
                  .setRequired(true)
        ),
    
    new SlashCommandBuilder()
        .setName('mensagemcomimagem')
        .setDescription('Envia uma mensagem embutida com uma imagem.')
        .addAttachmentOption(option =>
            option.setName('imagem')
                  .setDescription('Carregue uma imagem para ser exibida.')
                  .setRequired(true)
        ),
    
    new SlashCommandBuilder()
        .setName('mensagemcomvideo')
        .setDescription('Envia uma mensagem embutida com um vídeo.')
        .addAttachmentOption(option =>
            option.setName('video')
                  .setDescription('Carregue um vídeo para ser exibido.')
                  .setRequired(true)
        ),
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

(async () => {
    try {
        console.log('Registrando comandos de barra...');
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands }
        );
        console.log('Comandos de barra registrados com sucesso!');
    } catch (error) {
        console.error('Erro ao registrar comandos:', error);
    }
})();

client.once('ready', () => {
    console.log(`Bot logado como ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === 'mensagemsimples') {
        const texto = options.getString('texto');
        await interaction.reply({ content: texto });
    }

    else if (commandName === 'mensagemcomimagem') {
        const imagem = options.getAttachment('imagem');
        
        const embed = new EmbedBuilder()
            .setTitle('Mensagem com Imagem')
            .setDescription('Aqui está a imagem enviada:')
            .setImage(imagem.url);

        await interaction.reply({ embeds: [embed] });
    }

    else if (commandName === 'mensagemcomvideo') {
        const video = options.getAttachment('video');

        const embed = new EmbedBuilder()
            .setTitle('Mensagem com Vídeo')
            .setDescription('Aqui está o vídeo enviado:')
            .setImage(video.url);

        await interaction.reply({ embeds: [embed] });
    }
});

client.login(process.env.MTMwMDU5MDUzNDg0MjEyMjI1MA.GHNtff.CWXb5QsljQUne32lXlnIEIR9L_GNWD7WtvGyTg);
