<script lang="ts">
  import GameRectangle from "$lib/GameRectangle.svelte";
  import { sliceString } from "$lib/utils";
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  // Define the data for the bar graph
  const bars = [10, 20, 30, 40, 50];

  let chart;

  onMount(() => {
    const canvas = document.getElementById("myChart");
    const ctx = canvas?.getContext("2d");

    // Create the chart
    chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "",
            data: bars,
            backgroundColor: "#9CA3AF",
            borderRadius: 4
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              display: false,
            },
            grid: {
              display: false
            }
          },
          y: {
            ticks: {
              display: false,
            },
            grid: {
              display: false
            }
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  });

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
      <GameRectangle data={gameInfo} showName={false} hoverBorder={false} />
    </div>
  </div>
  <div class="flex flex-col items-start">
    <h1
      class="text-center leading-snug text-gray-200 font-bold font-main text-4xl"
    >
      {gameInfo?.name}
    </h1>
    <div class="flex gap-10">
      <div class="text-gray-400">
        {@html sliceString(gameInfo?.description, 3)}
      </div>
      <div class="">
        <!-- {ratings} -->
        <canvas id="myChart" />
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
      var(--bannerSrc);
    width: 100%;
    aspect-ratio: 1/0.4;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
