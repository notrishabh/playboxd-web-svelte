<script lang="ts">
    import { page } from "$app/stores";
    import SearchBar from "./SearchBar.svelte";
    import IoMdContact from "svelte-icons/io/IoMdContact.svelte";
    import IoIosArrowDown from "svelte-icons/io/IoIosArrowDown.svelte";

    let searchTerm: string = "";
    let dropdownFlag: boolean = false;

    const handleSubmit = () => {
        console.log("Search term:", searchTerm);
        window.location.href = `/search/${searchTerm}`;
    };
    const toggleDropdown = () => {
        dropdownFlag = !dropdownFlag;
    };
</script>

<div class="p-3 px-20 top-0 w-full float-left backdrop-blur-sm mb-5">
    <ul
        class="bg-transparent list-none flex justify-between items-center text-gray-100 font-main font-bold text-md mx-5"
    >
        <a href="/"><img src="/logo.png" alt="logo" class="w-full h-16" /></a>
        <div class="flex gap-10">
            <a href="/">games</a>
            <a href="/">lists</a>
            {#if !$page.data.user}
                <a href="/register">sign in</a>
            {:else}
                <div
                    on:mouseenter={toggleDropdown}
                    on:mouseleave={toggleDropdown}
                >
                    <div class="flex justify-center items-start cursor-pointer">
                        <div class="w-7 mr-1"><IoMdContact /></div>
                        {$page.data.user.name}
                        <div class="w-4 ml-1 self-center">
                            <IoIosArrowDown />
                        </div>
                    </div>
                    {#if dropdownFlag}
                        <ul
                            class="absolute w-48 bg-transparent border border-gray-300 rounded-md z-50"
                        >
                            <li>
                                <a
                                    href="/profile"
                                    class="block px-4 py-2 text-gray-700"
                                    >Profile</a
                                >
                            </li>
                            <li
                                class="block px-4 py-2 text-gray-700 cursor-pointer"
                            >
                                Logout
                            </li>
                        </ul>
                    {/if}
                </div>
            {/if}
            <div class="w-48">
                <SearchBar bind:val={searchTerm} onSubmit={handleSubmit} />
            </div>
        </div>
    </ul>
</div>
