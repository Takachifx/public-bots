const { ApplicationCommandType: { Message, User, ChatInput } } = require('discord.js');

module.exports = {
    Name: 'Avatar',
    Description: 'Kullanıcının avatarını gösterir.',
    Type: User,
    Cooldown: 10,
    Enabled: true,
    Ephemeral: true,

    async interactionRun(client, interaction) {

        const user = interaction.options.getUser('user');
        
        const avatar = await user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 });
        interaction.followUp({ content: avatar, ephemeral: true });
    },
};