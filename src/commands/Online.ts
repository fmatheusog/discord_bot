import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from '../interfaces/Command';

export const Online: Command = {
  data: new SlashCommandBuilder()
    .setName('online')
    .setDescription('Mostra quantos membros do servidor estão online')
    ,
  run: async (interaction) => {
    const members = await interaction.guild?.members.fetch();
    const onlineMembers = members
      ?.filter((m) => m.presence?.status !== undefined && m.presence?.status !== 'offline');

    interaction.reply({ content: `Membros online no servidor: ${onlineMembers?.size}` });
  }
}