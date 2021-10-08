<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { tasks } from '../store';
  import { flip } from 'svelte/animate';
  import { sineIn } from 'svelte/easing';

  const dispatch = createEventDispatcher();
</script>

{#if $tasks.length > 0}
  <h1>My Tasks List</h1>
  <ul>
    {#each $tasks as task (task.id)}
      <li animate:flip={{ delay: 0, duration: 250, easing: sineIn }}>
        <span>{task.title} | </span>
        <span>{task.priority} | </span>
        {#if task.description}
          <span>{task.description} | </span>
        {/if}
        <span>{task.isCompleted} | </span>
        {#if task.tags}
          <span>{task.tags}</span>
        {/if}
        <button
          on:click={() => {
            dispatch('toggleUpdate', task);
          }}>Update</button
        >
        <button
          on:click={() => {
            dispatch('deleteTask', task.id);
          }}>Delete</button
        >
      </li>
    {/each}
  </ul>
  <button
    on:click={() => {
      dispatch('clearTasks');
    }}>Clear All</button
  >
{:else}
  <h1>No Tasks Left</h1>
{/if}
