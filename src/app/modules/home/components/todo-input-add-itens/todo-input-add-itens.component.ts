import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent implements OnInit {
  //Este output serve para emitir os dados para que outro componente possa usar
  @Output() public emiItemTaskList = new EventEmitter();

  public addItemTaskList: string = '';
  constructor() {}

  ngOnInit(): void {}

  // Basicamente esta função pega os dados que estão sendo colocados no input e emite para que possa ser recuperado em outro componente.
  public submitItemTaskList() {
    // Aqui o trim é responsavel por retirar todos os espaços na frente e atras, para evitar adicionar valores vazios

    this.addItemTaskList = this.addItemTaskList.trim();
    if (this.addItemTaskList) {
      this.emiItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = '';
    }
  }
}
