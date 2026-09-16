import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarefa {
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-tarefas.html',
  styleUrls: ['./lista-tarefas.css']
})
export class ListaTarefasComponent {
  novaTarefa = '';

  tarefas: Tarefa[] = [
    { descricao: 'Estudar Angular', concluida: false },
    { descricao: 'Fazer exercício de programação', concluida: true },
    { descricao: 'Revisar conteúdo da aula', concluida: false }
  ];

  adicionarTarefa(): void {
    const descricao = this.novaTarefa.trim();

    if (descricao === '') {
      return; // não permite tarefa vazia
    }

    this.tarefas.push({ descricao, concluida: false });
    this.novaTarefa = '';
  }

  removerTarefa(indice: number): void {
    this.tarefas.splice(indice, 1);
  }

  get tarefasConcluidas(): number {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }
}