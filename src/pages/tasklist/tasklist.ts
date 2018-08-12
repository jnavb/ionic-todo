import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';
import { Task } from './task';

@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {
	tasks: Array<Task> = [];

  constructor(public navCtrl: NavController) {
  	this.tasks = [];
  }

  addItem(){
  	let theNewTask: string = prompt("New Task");
  	if (theNewTask !== '') {
  		this.tasks.push({ title: theNewTask, status: 'open'	})
  	}
  }
  markAsDone(slidingItem: ItemSliding, task: Task) {
  	task.status = "done";
    slidingItem.close();
  }
  removeTaks(slidingItem: ItemSliding, task:Task) {
  	task.status = "removed";
  	let index = this.tasks.indexOf(task);
  	if (index > -1) {
  		this.tasks.splice(index, 1);
  	}
    slidingItem.close();
  }
}
