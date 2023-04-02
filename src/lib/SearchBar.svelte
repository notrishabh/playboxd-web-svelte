<script lang="ts">
  import IoMdSearch from "svelte-icons/io/IoMdSearch.svelte";
  export let value = "";
  let isFocused: boolean = false;
  export let onInput = (event: any) => {
    console.log("From component", event);
  };
  export let onSubmit = () => {};
  const onFocusIn = () => {
    isFocused = true;
  };
  const onFocusOut = () => {
    isFocused = false;
  };
</script>

<div class="flex justify-center">
  <form on:submit|preventDefault={onSubmit}>
    <div class="relative text-gray-700">
      <input
        type="text"
        {value}
        on:input={(e) => onInput(e)}
        on:focusin={onFocusIn}
        on:focusout={onFocusOut}
        class="h-8 px-3 pr-10 rounded-3xl text-sm bg-gray-200 bg-opacity-40 hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none transition duration-300 ease-in-out w-full"
      />
      <button
        type="submit"
        class="absolute right-0 top-2 mr-3 w-5 h-5 text-white"
        class:text-black={isFocused}
      >
        <IoMdSearch />
      </button>
    </div>
  </form>
</div>

