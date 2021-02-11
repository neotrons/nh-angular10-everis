import { IBook } from '../book';

export const BookData: IBook[] = [
  {
    id: 1,
    name: 'Continuous Delivery',
    isbn: '252621',
    image: 'http://nh-back.jcramireztello.com/media/books/5f287f75de25badfcc4e4e34_25.jpg',
    language: 'en',
    publishedDate: '2005-12-18',
    publisher: 'Jez Humble & David Farley',
    isTop: false,
  },
  {
    id: 2,
    name: 'Algorithms',
    isbn: '252622',
    image: 'http://nh-back.jcramireztello.com/media/books/5f287faff2205a602fc8c376_24.jpg',
    language: 'en',
    publishedDate: '2010-11-16',
    publisher: 'Robert Sedgewick & Kevin Wayne',
    isTop: true,
  },
  {
    id: 3,
    name: 'The Self-Taught Programmer',
    isbn: '252623',
    image: 'http://nh-back.jcramireztello.com/media/books/5f288004037f6811b18d3787_23.jpg',
    language: 'en',
    publishedDate: '2017-02-18',
    publisher: 'Cory Althoff',
    isTop: true,
  }
];
