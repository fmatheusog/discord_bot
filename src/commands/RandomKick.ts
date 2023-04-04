import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from '../interfaces/Command';

export const RandomKick: Command = {
  data: new SlashCommandBuilder()
    .setName('randomkick')
    .setDescription('Bane um membro aleatório do servidor')
    ,
  run: async (interaction) => {
  }
}