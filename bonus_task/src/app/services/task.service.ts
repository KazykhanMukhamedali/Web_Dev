import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { 
      id: '1', 
      title: 'Prepare Presentation', 
      description: 'Create slides for quarterly review', 
      category: 'Work', 
      status: 'Pending', 
      deadline: new Date('2024-03-25') 
    },
    { 
      id: '2', 
      title: 'Grocery Shopping', 
      description: 'Buy milk, eggs, and vegetables', 
      category: 'Personal', 
      status: 'Pending', 
      deadline: new Date('2024-03-20') 
    },
    { 
      id: '3', 
      title: 'Study Angular', 
      description: 'Learn component communication', 
      category: 'Study', 
      status: 'Pending', 
      deadline: new Date('2024-03-22') 
    }
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  markAsCompleted(taskId: string): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) task.status = 'Completed';
  }
}