<script lang="ts">
  import { Task, addTask, updateTask, deleteTask, clearTasks } from './store';
  import TaskList from './lib/TaskList.svelte';
  import AddTask from './lib/AddTask.svelte';
  import UpdateTask from './lib/UpdateTask.svelte';

  const handleAddTask = (e: CustomEvent) => {
    addTask(e.detail);
  };
  const handleDeleteTask = (e: CustomEvent) => {
    deleteTask(e.detail);
    isUpdateMode = false;
  };
  const handleUpdateTask = (e: CustomEvent) => {
    updateTask(e.detail);
    isUpdateMode = false;
    currentTask = null;
  };

  let currentTask: Task | null = null;
  let isUpdateMode = false;
</script>

<main>
  <TaskList
    on:clearTasks={clearTasks}
    on:deleteTask={handleDeleteTask}
    on:deleteTask={handleDeleteTask}
    on:toggleUpdate={(e) => {
      currentTask = e.detail;
      isUpdateMode = true;
    }}
  />
  <AddTask on:addTask={handleAddTask} />

  {#if isUpdateMode}
    <UpdateTask
      {currentTask}
      on:updateTask={handleUpdateTask}
      on:onCancel={() => {
        isUpdateMode = false;
        currentTask = null;
      }}
    />
  {/if}
</main>
