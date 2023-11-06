import { Command } from 'commander';

async function init() {
  const program = new Command()
    .name('ngx-restgen')
    .description('Geneate OpenAPI types for Angular')
    .version('1.0.0')
    .option('-i, --input <json>', 'Input spec file')
    .option('-o, --output <path>', 'Output directory');

  await program.parseAsync(process.argv);
}

init().catch((err) => {
  console.error('Unexpected error - ', err);
});
