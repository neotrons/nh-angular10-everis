import { languageCode } from 'src/app/shared/types';


export class MyBook {
  id: number;
  name: string;
  isbn: string;
  image: File;
  imageUrl: string;
  language: languageCode;
  publishedDate: Date;
  publisher: string;
  numberPages: number;
  summary: string;
  featured: boolean;
  license: string;

  constructor() {}

  setImageUrl(image: any) {
    if (typeof image === 'string') {
      this.imageUrl = image;
    }
  }

  isNew(): boolean {
    return this.id ? true : false;
  }

  deserialize(data: any): MyBook {
    Object.assign(this, data);
    // custom init
    this.setImageUrl(data.image);
    return this;
  }
}
