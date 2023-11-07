import { Command } from 'commander';
import { Generator } from './generator';

async function init() {
  const program = new Command()
    .name('ngx-restgen')
    .description('Geneate OpenAPI types for Angular')
    .version('1.0.0')
    .option('-c, --config <file>', 'Configuration file (defaults to .ngx-restgen.json)', '.ngx-restgen.json');

  await program.parseAsync(process.argv);

  const options = program.opts();

  const generator = new Generator(options['config']);
  generator.generate();
}

init().catch((err) => {
  console.error('Unexpected error - ', err);
});
