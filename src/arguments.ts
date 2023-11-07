import fs from 'fs';
import { OptionValues } from 'commander';
import { Config } from './config';

export class Arguments {
  static getConfig(options: OptionValues): Config {
    const config = options.config;

    if (!fs.existsSync(config)) {
      throw new Error(`The given configuration file does not exist: ${config}`);
    }

    return JSON.parse(fs.readFileSync(config, { encoding: 'utf-8' }));
  }
}
