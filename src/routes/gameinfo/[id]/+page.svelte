<script lang="ts">
  import GameRectangle from "$lib/GameRectangle.svelte";

  export let data: any;
  const { gameInfo } = data;
  console.log(gameInfo);

  const bannerSrc =
    gameInfo?.background_image_additional ||
    gameInfo?.background_image ||
    gameInfo?.genres[0].image_background;
</script>

<div class="banner" style="--bannerSrc: url({bannerSrc});" />
<div class="flex gap-10">
  <div>
    <div class="w-52 h-72">
      <GameRectangle
        data={gameInfo}
        width="full"
        height="full"
        showName={false}
        hoverBorder={false}
      />
    </div>
  </div>
  <div>
    <h1
      class="text-center leading-snug text-gray-200 font-bold font-main text-4xl"
    >
      {gameInfo?.name}
    </h1>
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
