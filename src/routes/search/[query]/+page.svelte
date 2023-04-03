<script lang="ts">
  export let data: any;
  console.log(data);
  const list = data?.searchedList?.results;
</script>

<div>
  {#each list as game}
    <p>{game.slug}</p>
  {/each}
</div>
