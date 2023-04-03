<script lang="ts">
    import SearchBar from "./SearchBar.svelte";
    let searchTerm: string = "";
    const handleSubmit = () => {
        console.log("Search term:", searchTerm);
        window.location.href = `/search/${searchTerm}`;
    };
</script>

<div class="p-3 top-0 w-full float-left backdrop-blur-sm">
    <ul
        class="bg-transparent list-none flex justify-between text-gray-100 font-main font-bold text-lg mx-5"
    >
        <a href="/">logo</a>
        <div class="flex gap-10">
            <a href="/">games</a>
            <a href="/">lists</a>
            <a href="/">sign in</a>
            <div class="w-48">
                <SearchBar bind:val={searchTerm} onSubmit={handleSubmit} />
            </div>
        </div>
    </ul>
</div>

