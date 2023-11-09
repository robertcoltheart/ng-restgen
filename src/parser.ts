import { OpenAPI } from 'openapi-types';
import { Model } from './model';
import { Service } from './service';
import { camelCase } from 'lodash';

export class Parser {
  models = new Map<string, Model>();
  services = new Map<string, Service>();

  constructor(private document: OpenAPI.Document) {}

  parse() {
    if (this.document.paths != null) {
      for (const path of Object.keys(this.document.paths)) {
        const value = this.document.paths[path];

        this.parsePath('get', path, value?.get);
        this.parsePath('post', path, value?.post);
        this.parsePath('delete', path, value?.delete);
        this.parsePath('patch', path, value?.patch);
        this.parsePath('put', path, value?.put);
        this.parsePath('head', path, value?.head);
        this.parsePath('options', path, value?.options);
      }
    }
  }

  private parsePath(method: string, path: string, operation?: OpenAPI.Operation) {
    if (operation) {
      const id = this.getMethodName(method, path, operation);

      this.services.set(id, new Service(id, method, path, operation.tags));
    }
  }

  private getMethodName(method: string, path: string, operation: OpenAPI.Operation): string {
    const id = operation.operationId ?? `${method}.${path}`;

    return camelCase(id);
  }
}
