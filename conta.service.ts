import { Injectable } from '@angular/core';
import { Conta } from '../models/conta.model';


@Injectable({ providedIn: 'root' })
export class ContaService {
  private contas: Conta[] = [];
  private idCounter = 1;

  getContas() {
    return this.contas;
  }

  addConta(conta: Omit<Conta, 'id'>) {
    this.contas.push({ id: this.idCounter++, ...conta });
  }

  togglePago(id: number) {
    const conta = this.contas.find(c => c.id === id);
    if (conta) conta.paga = !conta.paga;
  }

  removerConta(id: number) {
    this.contas = this.contas.filter(c => c.id !== id);
  }
}
