export class Generator {
  constructor(private configFile: string) {
    console.log(configFile);
  }

  generate() {
    console.log('write output');
  }
}
