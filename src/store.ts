import { writable } from 'svelte/store';

export enum EPriority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

export interface Task {
  id: string;
  title: string;
  priority: EPriority;
  description: string;
  tags: string[];
  isCompleted: boolean;
}

const tasks = writable<Task[]>([
  {
    id: '1',
    title: 'task1',
    priority: EPriority.HIGH,
    description: 'description 1',
    tags: ['S65', 'Android'],
    isCompleted: false,
  },
  {
    id: '2',
    title: 'task2',
    priority: EPriority.MEDIUM,
    description: 'description 2',
    tags: [],
    isCompleted: true,
  },
  {
    id: '3',
    title: 'task3',
    priority: EPriority.LOW,
    description: 'description 3',
    tags: [],
    isCompleted: false,
  },
  {
    id: '4',
    title: 'task4',
    priority: EPriority.MEDIUM,
    description: 'description 4',
    tags: ['S66', 'BM', 'Android'],
    isCompleted: false,
  },
  {
    id: '5',
    title: 'task5',
    priority: EPriority.MEDIUM,
    description: 'description 5',
    tags: ['S67'],
    isCompleted: true,
  },
]);

const addTask = (task: Task) => {
  tasks.update((prevState) => [task, ...prevState]);
};

const deleteTask = (id: string) => {
  tasks.update((prevState) => prevState.filter((task) => task.id !== id));
};

const updateTask = (task: Task) => {
  tasks.update((prevState) => {
    prevState.map((t) => {
      if (t.id === task.id) {
        t = task;
      }
    });
    return prevState;
  });
};

const clearTasks = () => {
  tasks.set([]);
};

export { tasks, addTask, deleteTask, updateTask, clearTasks };
