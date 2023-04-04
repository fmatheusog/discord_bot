import { Client } from 'discord.js';
import { IntentOptions } from './config/IntentOptions';
import { onInteraction } from './events/onInteraction';
import { onReady } from './events/onReady';
import { validateEnv } from './util/ValidateEnv';

(async () => {
  if (!validateEnv()) return;

  const BOT = new Client(IntentOptions);

  BOT.on(
    "ready",
    async () => await onReady(BOT)
  );

  BOT.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );

  await BOT.login(process.env.BOT_TOKEN);
})();