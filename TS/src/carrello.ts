import { Prodotto } from "./prodotto";
import { Servizio } from "./servizio";

export class Carrello {
  elementi: IVendibile[] = [];

  add(elemento: IVendibile) {
    this.elementi.push(elemento);
  }
}

export interface IVendibile {
  prezzo: number;
  titolo: string;
}
