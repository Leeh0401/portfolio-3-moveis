import { Component } from '@angular/core';
import { Conta } from '../models/conta.model'; 
import { ContaService } from '../service/conta.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  contas: Conta[] = [];
  novaConta: Partial<Conta> = {}; 

  constructor(private contaService: ContaService) {}

  
  ionViewWillEnter() {
    this.carregarContas();
  }

  carregarContas() {
    this.contas = this.contaService.getContas();
  }

  
  adicionarConta() {
    if (
      this.novaConta.empresaId &&
      this.novaConta.tipoDespesa &&
      this.novaConta.fornecedor &&
      this.novaConta.valor &&
      this.novaConta.vencimento
    ) {
      this.contaService.addConta({
        empresaId: this.novaConta.empresaId,
        tipoDespesa: this.novaConta.tipoDespesa,
        fornecedor: this.novaConta.fornecedor,
        valor: this.novaConta.valor,
        vencimento: this.novaConta.vencimento,
        paga: false
      });
      this.novaConta = {};
      this.carregarContas();
    }
  }

  marcarComoPaga(id: number) {
    this.contaService.togglePago(id);
    this.carregarContas();
  }

  
  removerConta(id: number) {
    this.contaService.removerConta(id);
    this.carregarContas();
  }
}
