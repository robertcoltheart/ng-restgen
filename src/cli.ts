import { Command } from 'commander';
import { Generator } from './generator';
import { Arguments } from './arguments';

async function init() {
  const program = new Command()
    .name('ngx-restgen')
    .description('Geneate OpenAPI types for Angular')
    .version('1.0.0')
    .option('-c, --config <file>', 'Configuration file', '.ngx-restgen.json');

  await program.parseAsync(process.argv);

  const config = Arguments.getConfig(program.opts());

  const generator = new Generator(config);
  generator.generate();
}

init().catch((err) => {
  console.error('Unexpected error - ', err);
});
