export interface Task {
    id: string;
    title: string;
    description: string;
    category: 'Work' | 'Personal' | 'Study';
    status: 'Pending' | 'Completed';
    deadline: Date;
  }