<script lang="ts">
  import GameRectangle from "$lib/GameRectangle.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import IoLogoGameControllerB from "svelte-icons/io/IoLogoGameControllerB.svelte";

  export let data;
  console.log(data);

  const bannerSrc =
    "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
</script>

<div>
  <Navbar />
  <div class="banner" />
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
  <div class="flex content-center justify-evenly mx-2">
    <GameRectangle />
    <GameRectangle />
    <GameRectangle />
    <GameRectangle />
    <GameRectangle />
    <GameRectangle />
  </div>
  <div class="relative inline-block">
    <div class="w-40 h-40 hover:bg-gradient-to-b from-teal-500 to-purple-900  rounded-lg bg-teal-500 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
      <div class="absolutebottom-0 left-0 p-4 text-white transition-all duration-300 ease-in-out w-full">
        <p class="text-lg font-medium">Your content goes here</p>
        <p class="text-sm">Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  </div>
   

</div>

<style>
  .banner {
    background-image: linear-gradient(
        45deg,
        rgba(40, 42, 45, 0.6),
        rgba(0, 0, 0, 0)
      ),
      url("https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    width: 100%;
    aspect-ratio: 1/0.4;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
