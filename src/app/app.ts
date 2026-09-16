import { Component } from '@angular/core';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaTarefasComponent],
  template: '<app-lista-tarefas></app-lista-tarefas>'
})
export class AppComponent {}