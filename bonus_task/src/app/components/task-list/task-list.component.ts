import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  handleTaskCompleted(taskId: string): void {
    this.taskService.markAsCompleted(taskId);
    this.tasks = this.tasks.map(task => 
      task.id === taskId ? { ...task, status: 'Completed' } : task
    );
  }
}