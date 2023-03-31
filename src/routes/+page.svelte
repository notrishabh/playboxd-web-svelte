<script lang="ts" async>
  import GameRectangle from "$lib/GameRectangle.svelte";
  import Navbar from "$lib/navbar.svelte";
  import IoLogoGameControllerB from "svelte-icons/io/IoLogoGameControllerB.svelte";
  import type { PageData } from "./$types";

  export let data : PageData;
  const {list} = data;

  const bannerSrc =
    "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
</script>

<div>
  <div class="banner" style="--bannerSrc: url({bannerSrc});" />
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
            font-main text-md text-gray-200 tracking-wide hover:bg-green-700">GET STARTED - IT'S FREE!</button
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
    background-image: linear-gradient(
        45deg,
        rgba(40, 42, 45, 0.6),
        rgba(0, 0, 0, 0)
      ),
      var(--bannerSrc);
    width: 100%;
    aspect-ratio: 1/0.4;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
