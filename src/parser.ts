import { OpenAPI } from 'openapi-types';
import { Model } from './model';
import SwaggerParser from '@apidevtools/swagger-parser';

export class Parser {
  models = new Map<string, Model>();

  constructor(private document: OpenAPI.Document) {}

  async getModels() {
    if (this.document.paths != null) {
      for (const path of Object.keys(this.document.paths)) {
        const value = this.document.paths[path];
      }
    }
  }
}
