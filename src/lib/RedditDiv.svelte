<script lang="ts">
  export let subreddit: any = "Not Found";
  export let url: string = "https://www.reddit.com";
  export let logo: string =
    "https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-60x60.png";
  if (logo == "") {
    logo =
      "https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-60x60.png";
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="relative flex items-center cursor-pointer rounded-lg bg-gray-200 bg-opacity-25 hover:bg-opacity-50 transition duration-300 ease-in-out p-5"
  on:click={() => window.open(url, "_blank")}
>
  <img src={logo} alt="Reddit logo" class="w-8 h-8 mr-2" />
  <span class="text-md font-bold text-gray-200">{subreddit}</span>
</div>
