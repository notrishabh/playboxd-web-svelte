<script lang="ts">
  import GameRectangle from "./GameRectangle.svelte";
  import GenreShow from "./GenreShow.svelte";
  export let data: any;
</script>

<div class="flex gap-8 ">
  <div class="w-20 h-28">
    <GameRectangle {data} showName={false} hoverBorder={false} />
  </div>
  <div>
    <div class="flex gap-2 items-start flex-col">
      <a
        href="/gameinfo/{data?.id}"
        data-sveltekit-preload-data
        class="text-gray-200 font-main text-xl hover:text-blue-300"
        >{data?.name}</a
      >
      <div class="text-sm leading-snug">
        <span class="font-thin text-gray-400">Released on</span>
        <span class="text-gray-300 font-bold ">{data?.released}</span>
      </div>
      <div class="flex gap-1">
        {#each data?.genres as genre}
          <GenreShow {genre} />
        {/each}
      </div>
    </div>
  </div>
</div>
<hr class=" my-5 border-gray-500" />
