<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { EPriority,Task } from '../store';

  const dispatch = createEventDispatcher()
  let title:string, description:string, priority, tags:string[]

  const handleAddTask = ()=> {

    if(!title) return alert('title required')
    if(!priority) return alert('title required')

    const task: Task = {
      id: Date.now().toString(),
      title,
      description,
      priority,
      tags : tags ? [...tags] : [],
      isCompleted : false
    }

    dispatch('addTask', task)
  }
</script>
  
<h1>Add Task</h1>
<form class="form" on:submit|preventDefault={handleAddTask}>
  <input type="text" placeholder="Title"  bind:value={title}>
  <input type="text" placeholder="Description"  bind:value={description}>
  <select bind:value={priority}>
    <option value={EPriority.LOW}>Low</option>
    <option value={EPriority.MEDIUM}>Medium</option>
    <option value={EPriority.HIGH}>High</option>
  </select>
  <input type="tags" placeholder="tag1, tag2"  bind:value={tags}>
  <button type="submit">Add</button>
</form>

<style>
  .form {
    display: flex;
    flex-direction: column;
  }
</style>