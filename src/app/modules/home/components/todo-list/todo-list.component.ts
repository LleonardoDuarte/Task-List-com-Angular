import { Component, DoCheck, OnInit } from '@angular/core';

//interface
import { TaskList } from '../../model/Task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('list') || '[]'
  );

  constructor() {}

  ngOnInit(): void {}

  // Nesse caso estou usando o doCheck para quando houver mudança do checkbox de false para true ele faça um sort que irá ordenar o elemento para baixo, para conseguir usar o sorte converti o boolean em Number e fiz um calculo de subtração entre a primeira posição para a ultima, ou seja, ao clicar na checkbox o item checado irá para baixo e o nao para cima.
  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public setEmitTaskList(event: string) {
    // aqui nesse push eu trago os dados recebidos no html atraves do emiItemTaskList
    this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    const confirm = window.confirm('deseja deletar esta task?');

    if (confirm) {
      this.taskList.splice(event, 1);
    }
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Você deseja deletar todas tasks?');

    if (confirm) {
      this.taskList = [];
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem('item', JSON.stringify(this.taskList));
    }
  }

  //Esta função é responsavel por verificar se a task já criada esta vazia ou nao, caso o usuario apague o conteudo da task ira emitir um alerta perguntando se ele deseja deletar ou não, caso queira apenas confirmar que ira chamar a função de deletItem
  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Esta task está vazia, deseja deletar?');
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
}
