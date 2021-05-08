const Command = require('../../structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class InviteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            aliases: ['vote'],
            group: 'util',
            memberName: 'invite',
            description: 'Want to invite or vote me?',
            guarded: true,
            throttling: {
                usages: 2,
                duration: 5,
            },
        });
    }

    async run(msg) {
        const embed = new MessageEmbed()
            .setTitle('Invite / Vote')
            .setDescription(`${this.client.util.embedURL('Invite Me', https://discord.com/api/oauth2/authorize?client_id=835708055739826187&permissions=8&scope=bot)| ${this.client.util.embedURL('Vote Me', 'https://top.gg/bot/686908676606263326/vote')} `)
            .setFooter(msg.author.tag)
            .setTimestamp();
        msg.say(embed);
    }
};
