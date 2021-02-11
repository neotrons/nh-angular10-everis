/* tslint:disable */

class ConsolePrintMessageService {
  constructor(private mesessage) {}

  print() {
    console.log(this.mesessage);
  }
}

class HtmlPrintMessageService {
  scope;
  constructor(private mesessage) {
  }

  print() {
    this.scope.html.append(this.mesessage);
  }
}

class Hello {
  constructor(message) {
    /* De esta forma se esta acomplando a la forma de imprimir si queremos cambiar
    a otra forma de imprimir se debe cambiar la logica de la clase
    */
    const printMessage = new HtmlPrintMessageService(message);
    printMessage.print();
  }
}

new Hello('Bienvenido');

class HelloBest {
  constructor(
    private typePrint: HtmlPrintMessageService // se inyecta el tipo de implementacion
  ) {
    this.typePrint.print();
  }
}


// Al instanciar la clase nos hacemos cargo de inyectar el valor
new HelloBest(new HtmlPrintMessageService('Bienvenido con Inyeccion de dependencia'));
