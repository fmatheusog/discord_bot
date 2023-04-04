import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from '../interfaces/Command';

export const RandomKick: Command = {
  data: new SlashCommandBuilder()
    .setName('randomkick')
    .setDescription('Expulsa um membro aleatório do servidor')
    ,
  run: async (interaction) => {
    const user = interaction.guild?.members.cache.get(interaction.user.id);
    const isAdmin = user?.roles.cache.some((r) => r.name == 'Donos do Bar');

    if(isAdmin) {
      const members = await interaction.guild?.members.fetch();
      const randomMember = members?.random();

      await interaction.reply({ content: `Usuário expulso: ${randomMember?.displayName}`, ephemeral: true });
      // randomMember?.kick('Expulso pelo comando random kick');
    } else {
      await interaction.reply('Safadinho, você não tem permissão para utilizar este comando!');
    }
  }
}