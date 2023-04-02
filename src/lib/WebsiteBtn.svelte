<script lang="ts">
  import IoIosGlobe from "svelte-icons/io/IoIosGlobe.svelte";
  export let url: string = "/";
</script>

<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
>
  <span class="w-10 h-10"><IoIosGlobe /></span>
</a>
