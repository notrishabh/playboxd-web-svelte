<script>
  import Navbar from "$lib/navbar.svelte";
  import "../app.css";
</script>

<div class="max-w-7xl w-full mb-10">
  <Navbar/>
    <slot />
</div>
