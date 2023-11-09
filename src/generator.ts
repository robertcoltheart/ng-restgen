import SwaggerParser from '@apidevtools/swagger-parser';
import { Config } from './config';
import { Parser } from './parser';

export class Generator {
  constructor(private config: Config) {}

  async generate() {
    for (const api of this.config.apis) {
      const document = await SwaggerParser.validate(api.input);

      const parser = new Parser(document);

      console.log(document);
    }

    console.log(this.config.endOfLine);
    console.log('write output');
  }

  private readModels() {}
}
