<script lang="ts">
  export let rating: number;
  export let url: string;
</script>

<a
  href={url}
  class="flex items-center justify-center rounded-lg w-20 h-20
  {rating >= 80
    ? 'bg-green-500'
    : rating >= 60
    ? 'bg-yellow-500'
    : 'bg-red-500'}"
>
  <div class="text-white text-center">
    <div class="text-2xl font-bold">{rating}</div>
    <div class="text-xs uppercase">Metascore</div>
  </div>
</a>
