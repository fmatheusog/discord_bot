import { Client, REST, Routes } from "discord.js";
import { CommandList } from "../commands/_CommandList";

export const onReady = async (BOT: Client) => {
  const rest = new REST({ version: '9' })
    .setToken(process.env.BOT_TOKEN as string);

  const commandData = CommandList.map((command) => command.data.toJSON());

  await rest.put(
    Routes.applicationGuildCommands(
      BOT.user?.id || 'missing id',
      process.env.GUILD_ID as string
    ),
    { body: commandData }
  );

  console.log('O bot está online e funcionando! =)');
};