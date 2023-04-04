<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import SearchResult from "$lib/SearchResult.svelte";

  export let data: any;

  console.log(data);
  const list = data?.searchedList?.results;

  let params: any;

  onMount(() => {
    params = $page.params;
  });
</script>

<div>
  <p class="text-gray-400 uppercase text-sm">
    Found at least {data.searchedList.count} matched for "{params?.query}"
  </p>
  <hr class="border-gray-400 mb-3" />
  {#each list as game}
    <SearchResult data={game} />
  {/each}
</div>
