<script lang="ts">
  import Navbar from "$lib/navbar.svelte";
  import IoLogoGameControllerB from "svelte-icons/io/IoLogoGameControllerB.svelte";

  export let data;
  console.log(data);

  const bannerSrc =
    "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
</script>

<div class="border-red-500">
  <Navbar />
  <div class="banner" />
  <div
    class="relative backdrop-blur-sm bottom-24 flex flex-col justify-center items-center 
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
      class="rounded-sm mt-8 px-6 py-1 bg-gradient-to-r from-green-700 to-green-600 
            font-main text-md text-gray-200">GET STARTED - IT'S FREE!</button
    >
    <div class="flex content-center text-gray-400 mt-2 font-subText">
      <p class="f">The social network for gamers</p>
      <div class="w-7 ml-1 ">
        <IoLogoGameControllerB />
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
  .f {
    font-family: Marcellus;
  }
</style>
