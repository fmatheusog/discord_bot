import { Command } from '../interfaces/Command';
import { Confession } from './Confession';
import { RandomKick } from './RandomKick';
import { Online } from './Online';
import { WhoIsOnline } from './WhoIsOnline';

export const CommandList: Command[] = [ Confession, RandomKick, Online, WhoIsOnline ];