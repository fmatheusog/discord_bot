import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder, TextChannel } from 'discord.js';
import { Command } from '../interfaces/Command';

export const Confession: Command = {
  data: new SlashCommandBuilder()
    .setName('confessar')
    .setDescription('Envia confissão pra ser postada no respectivo canal do servidor')
    .addStringOption((option) => option
      .setName('message')
      .setDescription('Mensagem a ser enviada')
      .setRequired(true))
    .addStringOption((option) => option
      .setName('anonymous')
      .setDescription('Selecione se a confissão será anônima ou não')
      .setRequired(true)
      .addChoices(
        { name: 'Mostrar usuário', value: 'show_user' },
        { name: 'Não mostrar usuário', value: 'no_user' }
      )),
  run: async (interaction) => {
    try {
      await interaction.reply({ content: 'Enviando mensagem...', ephemeral: true });

      const messageText = interaction.options.get('message')?.value;
      const anon = interaction.options.get('anonymous')?.value;

      // TODO: validar entrada do usuário

      const user = anon === 'no_user' ? 'anônimo' : interaction.user.tag;

      const response = new EmbedBuilder()
        .setColor(0x9400D3)
        .setTitle(`usuário: ${user}`)
        .addFields(
          { name: 'confissão:', value: `${messageText}` }
        )
        .setTimestamp()

      // Enviar a mensagem pra outro canal
      const channel = interaction.client.channels.cache.find((c) => c.id === '1091516570771144724');

      if (channel?.isTextBased()) {
        (<TextChannel> channel).send({ embeds: [ response ]});
      }

      await interaction.editReply({ content: 'Mensagem enviada...' });
    } catch (err) {
      // TODO: enviar resposta pro usuário contendo erro de validação
      console.log(err);
    }
  }
}