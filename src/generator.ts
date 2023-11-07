import { Config } from './config';

export class Generator {
  constructor(private config: Config) {}

  generate() {
    console.log(this.config.endOfLine);
    console.log('write output');
  }
}
