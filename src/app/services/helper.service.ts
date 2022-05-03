import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class HelperService {
  private message = new BehaviorSubject<string>('0');
  private objetosSinStock=new BehaviorSubject<Object[]>([]);
  public customMessage = this.message.asObservable();
  public customObjetosSinStock = this.objetosSinStock.asObservable();
  constructor() {}
  public changeMessage(msg: string): void {
    this.message.next(msg);
  }
  public changeObjetosSinStock(actualizacionSinStock: Object[]): void {
    this.objetosSinStock.next(actualizacionSinStock);
  }
}