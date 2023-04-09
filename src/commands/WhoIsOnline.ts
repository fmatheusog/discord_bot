import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from '../interfaces/Command';

export const WhoIsOnline: Command = {
  data: new SlashCommandBuilder()
    .setName('whoisonline')
    .setDescription('Mostra todos os membros online do servidor'),
  run: async (interaction) => {
    const members = await interaction.guild?.members.fetch();
    const onlineMembers = members
      ?.filter((m) => m.presence?.status !== undefined && m.presence?.status !== 'offline')
      .map((m) => m.displayName)
      .join(`\n`);

    await interaction.reply(onlineMembers as string);
  }
}