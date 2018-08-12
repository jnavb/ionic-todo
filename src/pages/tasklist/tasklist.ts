import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {
	tasks: Array<any> = [];

  constructor(public navCtrl: NavController) {
  	this.tasks = [
  		{title:'Pan', status: 'open'},
			{title:'Leche', status: 'open'},
			{title:'Tomate', status: 'open'},
			{title:'Platanos', status: 'open'}
  	];
  }

  addItem(){
  	let theNewTask: string = prompt("New Task");
  	if (theNewTask !== '') {
  		this.tasks.push({ title: theNewTask, status: 'open'	})
  	}
  }
  markAsDone(task: any) {
  	task.status = "done";
  }
  removeTaks(task:any) {
  	task.status = "removed";
  	let index = this.tasks.indexOf(task);
  	if (index > -1) {
  		this.tasks.splice(index, 1);
  	}
  }
}
