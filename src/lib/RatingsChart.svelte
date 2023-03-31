<script lang="ts">
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  // Define the data for the bar graph
  export let bars: number[];

  let chart;

  onMount(() => {
    const canvas = document.getElementById("myChart");
    const ctx = canvas?.getContext("2d");

    // Create the chart
    chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Array(bars.length).fill(""),
        datasets: [
          {
            label: "",
            data: bars,
            backgroundColor: "#445566",
            borderRadius: 2,
            barPercentage: 1.8,
            categoryPercentage: 0.5,
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
              display: false,
            },
          },
          y: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
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
</script>

<canvas id="myChart" />
