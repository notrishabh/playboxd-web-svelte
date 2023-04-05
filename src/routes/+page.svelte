<script lang="ts" async>
  import GameRectangle from "$lib/GameRectangle.svelte";
  import IoLogoGameControllerB from "svelte-icons/io/IoLogoGameControllerB.svelte";
  import type { PageData } from "./$types";
  import { randomBanner } from "$lib/utils";

  export let data: PageData;
  const { list } = data;

  const bannerSrc = [
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/756439/pexels-photo-756439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7862491/pexels-photo-7862491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
</script>

<div>
  <div class="banner" style="--bannerSrc: url({randomBanner(bannerSrc)});" />
  <div class="mask" />
  <div
    class="relative backdrop-blur-sm bottom-20 flex flex-col justify-center items-center 
        w-full"
  >
    <div
      class="text-center leading-snug text-gray-200 font-bold font-main text-4xl"
    >
      <p>Track games you've played.</p>
      <p>Save those you want to play.</p>
      <p>Tell your friends what's good.</p>
    </div>
    <button
      class="rounded-sm mt-8 px-6 py-1 bg-green-600  
            font-main text-md text-gray-200 tracking-wide hover:bg-green-700"
      >GET STARTED - IT'S FREE!</button
    >
    <div class="flex content-center text-gray-400 mt-6 font-subText">
      <p>The social network for gamers</p>
      <div class="w-7 ml-1">
        <IoLogoGameControllerB />
      </div>
    </div>
  </div>
  {#if !data}
    <p>loading</p>
  {:else}
    <div class="flex content-center justify-evenly mx-2">
      {#each list.results as game}
        <div class="w-44 h-60">
          <GameRectangle data={game} />
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .banner {
    width: 100%;
    aspect-ratio: 1/0.4;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: var(--bannerSrc);
  }
</style>
