import { languageCode } from 'src/app/shared/types';


export class MyBook {
  id: number;
  name: string;
  isbn: string;
  image: File;
  imageUrl: string;
  language: languageCode;
  publishedDate: string | Date;
  publisher: string;
  numberPages: number;
  summary: string;
  featured: boolean;
  license: string;

  constructor(){}

  deserialize(data: any): MyBook {
    Object.assign(this, data);
    if (typeof data.image === 'string') {
      this.imageUrl = data.image;
    }
    return this;
  }

  setImageUrl() {
    // this.imageUrl = this.image;
  }
}
