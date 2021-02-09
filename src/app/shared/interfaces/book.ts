import { languageCode } from '../types';

export interface Book {
  id: number;
  name: string;
  isbn: string;
  image: string | File;
  language: languageCode;
  publishedDate: string | Date;
  publisher: string;
  numberPages?: number;
  summary: string;
  featured?: boolean;
  license?: string;
}
