<script lang="ts">
  import type { ActionData } from "./$types";
  import { applyAction, enhance } from "$app/forms";
  import { invalidateAll } from "$app/navigation";

  export let form: ActionData;
</script>

<div class="text-gray-400">
  <h1 class="">Register</h1>

  <form
    action="?/register"
    method="POST"
    class="border border-blue-500 p-10"
    use:enhance
  >
    <div>
      <label for="username" class="m-5">Username</label>
      <input id="username" name="username" type="text" required class="m-5" />
    </div>

    <div>
      <label for="password" class="m-5">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        class="m-5"
      />
    </div>

    {#if form?.user}
      <p class="error">Username is taken.</p>
    {/if}

    <button type="submit" class="bg-green-200 p-2 text-black m-5"
      >Register</button
    >
    <a href="/login" class="bg-green-200 p-2 text-black m-5">Login</a>
  </form>
</div>
