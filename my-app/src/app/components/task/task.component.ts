import { Component, NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  sucess = false;
  error = false;

  nome = new FormControl('');
  descricao = new FormControl('');
  responsavel = new FormControl('');
  dt_inicio = new FormControl('');
  dt_fim = new FormControl('');

  tasks: Task[] = []; //criar um array de task vazio

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addTask() {
    const t = this.tasKtoObject();
    console.log(this.tasks);
    this.tasks.push(t); //para adicionar a nova task no array tasks

    this.sucess = true;
    this.error = true;

    //limpar as caixas de texto
    this.nome.setValue('');
    this.descricao.setValue('');
    this.responsavel.setValue('');
    this.dt_inicio.setValue('');
    this.dt_fim.setValue('');
    // console.log(this.task.value);
    // console.log(this.descricao.value);
    // console.log(this.responsavel.value);
    // console.log(this.dt_inicio.value);
    // console.log(this.dt_fim.value);
  }

  tasKtoObject() {
    const t = new Task();
    t.nome = this.nome.value!;
    t.descricao = this.descricao.value!;
    t.responsavel = this.responsavel.value!;
    t.dt_inicio = Number(this.dt_inicio.value);
    t.dt_fim = Number(this.dt_fim.value);

    return t;
  }

  removeTask() {}
}
