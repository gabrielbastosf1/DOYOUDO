import { Component, Input } from '@angular/core';
import { Tarefa } from '../../app/models/tarefa';

/**
 * Generated class for the TarefasListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tarefas-list-item',
  templateUrl: 'tarefas-list-item.html'
})
export class TarefasListItemComponent {

  @Input()
  tarefa:Tarefa;

}
