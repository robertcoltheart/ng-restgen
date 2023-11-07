import Mustache from 'mustache';
import path from 'path';
import fs from 'fs';
import eol from 'eol';

export class Template {
  render() {
    const hasLib = __dirname.endsWith(path.sep + 'lib');
    const dir = path.join(__dirname, hasLib ? '../templates' : 'templates');

    const contents = fs.readFileSync(path.join(dir, 'file.mustache'), { encoding: 'utf-8' });

    const output = Mustache.render(contents, {
      prefix: 'abc'
    });

    const finalOutput = eol.auto(output);

    fs.writeFileSync(path.join('', ''), finalOutput, { encoding: 'utf-8' });
  }
}
