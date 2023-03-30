<script lang="ts">
  export let data: any;
  export let width: string = "44";
  export let height: string = "60";
  export let showName: boolean = true;
  export let hoverBorder: boolean = true;

  let bgImage = data?.background_image || data?.genres[0].image_background;

  const handleClick = () => {
    window.location.href = `/gameinfo/${data.id}`;
  };
</script>

<div
  class={`rounded-lg w-${width} h-${height} border border-transparent shadow-lg`}
>
  {#if data}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      on:click={handleClick}
      data-sveltekit-preload-data
      class="h-full relative text-white border-2 border-transparent rounded-md hover:cursor-pointer"
      class:hover:border-green-500={hoverBorder}
    >
      <img
        src={bgImage}
        class="h-full w-full object-cover rounded-md"
        alt={data.name}
      />
      {#if showName}
        <div class="absolute inset-0 flex items-end justify-center mb-5 mx-3 font-subText ">
          <p class="text-shadow">{data?.name}</p>
        </div>
      {/if}
    </div>
  {:else}
    <p>loading</p>
  {/if}
</div>

<style>
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
</style>
