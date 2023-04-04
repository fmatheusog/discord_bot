import { Command } from '../interfaces/Command';
import { Confession } from './Confession';
import { RandomKick } from './RandomKick';
import { Online } from './Online';

export const CommandList: Command[] = [ Confession, RandomKick, Online ];