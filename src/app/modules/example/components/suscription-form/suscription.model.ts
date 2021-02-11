interface Address {
  city: string;
  zipcode: string;
  street: string;
}

export class Suscription {
  constructor(
    public fullname: string,
    public email: string,
    public address: Address
  ) {}
}
