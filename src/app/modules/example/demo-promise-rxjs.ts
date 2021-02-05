import { rejects } from "assert";

let callback = function(data) {
  console.log(data);
}

let demoAjax = function(callback) {
  // CUANDO TERMINABA
  callback({});
};

// promise 1. siempre devolvera un resultado y 2. no puede cancelarse

let getBook = new Promise((resolve, rejects) => {
  setTimeout(() => {
    resolve({});
  }, 500);
});

getBook.then(book => console.log(book));

import { Observable } from 'rxjs';

const demoObs = new Observable(
  observer => {
    observer.next([]);
    setTimeout( () => {
      observer.next([1,2,3,4]);
    }, 3000);

    setTimeout( () => {
      observer.complete();
    }, 6000);
  }
)

demoObs.subscribe(
  data => console.log(data),
  error => console.log(error)
  
)