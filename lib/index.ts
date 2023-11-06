import { Command } from 'commander';

const program = new Command();

program
  .name('ngx-restgen')
  .description('Geneate OpenAPI types for Angular')
  .version('1.0.0')
  .option('-i, --input <json>', 'Input spec file')
  .option('-o, --output <path>', 'Output directory')
  .parse(process.argv);

const options = program.opts();

if (options['output']) {
  console.log(options['output']);
}
