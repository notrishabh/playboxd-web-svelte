<script>
  import Navbar from "$lib/Navbar.svelte";
  import "../app.css";
</script>

<div class="max-w-6xl w-full mb-10">
  <Navbar />
  <slot />
</div>
