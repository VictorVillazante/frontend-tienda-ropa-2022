import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductosSinStock } from '../models/ProductosSinStock';
@Injectable()
export class HelperService {
  private message = new BehaviorSubject<string>('0');
  private objetosSinStock=new BehaviorSubject<ProductosSinStock[]>([]);
  public customMessage = this.message.asObservable();
  public customObjetosSinStock = this.objetosSinStock.asObservable();
  constructor() {}
  public changeMessage(msg: string): void {
    this.message.next(msg);
  }
  public changeObjetosSinStock(actualizacionSinStock: ProductosSinStock[]): void {
    this.objetosSinStock.next(actualizacionSinStock);
  }
}