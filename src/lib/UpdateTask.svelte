<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { EPriority } from '../store';

  const dispatch = createEventDispatcher();
  export let currentTask;
</script>

<div>
  <h1>Update Task</h1>
  <form
    class="form"
    on:submit|preventDefault={() => {
      dispatch('updateTask', currentTask);
    }}
  >
    <input type="text" placeholder="Title" bind:value={currentTask.title} />
    <input
      type="text"
      placeholder="Description"
      bind:value={currentTask.description}
    />
    <select bind:value={currentTask.priority}>
      <option value={EPriority.LOW}>Low</option>
      <option value={EPriority.MEDIUM}>Medium</option>
      <option value={EPriority.HIGH}>High</option>
    </select>
    <input type="tags" placeholder="tag1, tag2" bind:value={currentTask.tags} />
    <button type="submit">Update</button>
    <button
      type="submit"
      on:click={() => {
        dispatch('onCancel');
      }}>Cancel</button
    >
  </form>
</div>

<style>
  .form {
    display: flex;
    flex-direction: column;
  }
</style>
