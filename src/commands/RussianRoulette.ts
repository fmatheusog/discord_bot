import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from '../interfaces/Command';

export const RussianRoulette: Command = {
  data: new SlashCommandBuilder()
    .setName('roletarussa')
    .setDescription('Bane um membro aleatório do servidor')
    ,
  run: async (interaction) => {
  }
}