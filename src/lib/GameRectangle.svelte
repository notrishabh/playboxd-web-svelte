<script lang="ts">
  export let data;
  let bgImage = data?.background_image || data?.genres[0].image_background;
</script>

<div class="rounded-lg w-44 h-60 border border-transparent ">
  {#if data}
    <div
      class="h-full relative text-white border-2 border-transparent rounded-md hover:border-green-500 hover:cursor-pointer "
    >
      <img
        src={bgImage}
        class="h-full w-full object-cover rounded-md"
        alt={data.name}
      />
      <div class="absolute inset-0 flex items-end justify-center mb-5 ">
        <p class="text-shadow">{data?.name}</p>
      </div>
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
