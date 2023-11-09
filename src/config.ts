import { ConfigApi } from './config-api';

export interface Config {
  apis: ConfigApi[];
  silent?: boolean;
  enumStyle?: 'alias' | 'upper' | 'pascal' | 'ignorecase';
  endOfLine?: 'crlf' | 'lf' | 'cr' | 'auto';
}
