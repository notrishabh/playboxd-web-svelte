<script lang="ts">
  import GameRectangle from "$lib/GameRectangle.svelte";
  import MetacriticCounter from "$lib/MetacriticCounter.svelte";
  import RatingsChart from "$lib/RatingsChart.svelte";
  import { sliceString } from "$lib/utils";
  import IoMdStar from "svelte-icons/io/IoMdStar.svelte";

  export let data: any;
  const { gameInfo } = data;
  console.log(gameInfo);

  let bars: number[] = [];

  gameInfo?.ratings.map((rating: any) => {
    bars.push(rating.count);
  });

  bars = bars.reverse();

  const bannerSrc =
    gameInfo?.background_image_additional ||
    gameInfo?.background_image ||
    gameInfo?.genres[0].image_background;
</script>

<div class="banner" style="--bannerSrc: url({bannerSrc});" />
<div class="flex gap-10">
  <div>
    <div class="w-52 h-72">
      <GameRectangle data={gameInfo} showName={false} hoverBorder={false} />
    </div>
  </div>
  <div class="flex flex-col items-start">
    <div class="flex justify-center items-center gap-3">
      <h1
        class="text-center leading-snug text-gray-200 font-bold font-main text-3xl"
      >
        {gameInfo?.name}
      </h1>
      <div class="text-md leading-snug">
        <span class="font-thin text-gray-400">Published by</span>
        <a
          href="/"
          class="text-gray-300 font-bold underline decoration-solid hover:text-blue-300"
          >{gameInfo?.publishers[0]?.name}</a
        >
      </div>
    </div>
    <div class="flex gap-10">
      <div class="text-gray-400">
        {@html sliceString(gameInfo?.description, 3)}
      </div>
      <div class="h-32 w-1/3">
        <div
          class="flex justify-between font-main items-center font-extralight"
        >
          <span class="text-gray-400 ">RATINGS</span>
          <span class="text-xs text-gray-500"
            >{gameInfo?.ratings_count} FANS</span
          >
        </div>
        <div class="border-t-2 border-gray-400 mb-10 w-full" />
        <div class="flex items-end">
          <div class="w-3 text-green-500 mr-1 mb-1">
            <IoMdStar />
          </div>
          <div class="h-16 w-3/5">
            <RatingsChart {bars} />
          </div>
          <div
            class="ml-2 mb-1 flex flex-col justify-center items-center gap-3"
          >
            <p class="text-gray-400 text-2xl leading-snug">
              {gameInfo?.rating}
            </p>
            <div class="flex">
              {#each Array(5)
                .fill("")
                .map((_, i) => i) as i}
                <div class="w-3 text-green-500">
                  <IoMdStar />
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-5">
      <MetacriticCounter
        rating={gameInfo?.metacritic}
        url={gameInfo?.metacritic_url}
      />
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
      var(--bannerSrc);
    width: 100%;
    aspect-ratio: 1/0.4;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
