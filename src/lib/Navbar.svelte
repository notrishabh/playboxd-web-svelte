<script lang="ts">
    import { page } from "$app/stores";
    import SearchBar from "./SearchBar.svelte";
    import IoMdContact from "svelte-icons/io/IoMdContact.svelte";
    import IoIosArrowDown from "svelte-icons/io/IoIosArrowDown.svelte";
    import { applyAction, enhance } from "$app/forms";
    import { invalidateAll } from "$app/navigation";

    let searchTerm: string = "";
    let dropdownFlag: boolean = false;

    const handleSubmit = () => {
        window.location.href = `/search/${searchTerm}`;
    };
    const toggleDropdown = (e: any) => {
        dropdownFlag = true;
        //Persist the dropdown for 3 second before hiding
        if (e.type === "mouseleave") {
            setTimeout(() => {
                dropdownFlag = false;
            }, 2000);
        }
    };
</script>

<div class="p-3 px-20 top-0 w-full float-left backdrop-blur-sm mb-5 uppercase">
    <ul
        class="bg-transparent list-none flex justify-between items-center text-gray-100 font-main font-bold text-md mx-5"
    >
        <a href="/"><img src="/logo.png" alt="logo" class="w-full h-16" /></a>
        <div class="flex gap-10 items-center">
            <a href="/">games</a>
            <a href="/">lists</a>
            {#if !$page.data.user}
                <a href="/register">sign in</a>
            {:else}
                <div
                    class={`relative ${dropdownFlag ? "bg-gray-400" : ""} `}
                    on:mouseenter={toggleDropdown}
                    on:mouseleave={toggleDropdown}
                >
                    <div
                        class="flex justify-center items-start cursor-pointer m-1"
                    >
                        <div class="w-6 mr-1"><IoMdContact /></div>
                        {$page.data.user.name}
                        <div class="w-4 ml-1 self-center">
                            <IoIosArrowDown />
                        </div>
                    </div>
                    {#if dropdownFlag}
                        <div class="border-t-2 border-gray-700 mt-1 w-full" />
                        <ul
                            class="absolute min-w-fit w-full bg-gray-400 z-50 font-thin text-xs py-1 bg-opacity-90"
                        >
                            <li>
                                <a
                                    href="/profile"
                                    class="block px-4 py-2 text-gray-800 hover:bg-gray-600 hover:text-gray-200"
                                    >Profile</a
                                >
                            </li>
                            <li
                                class="block px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-600 hover:text-gray-200"
                            >
                                <form
                                    action="/logout"
                                    method="POST"
                                    use:enhance
                                >
                                    <button type="submit">LOGOUT</button>
                                </form>
                            </li>
                        </ul>
                    {/if}
                </div>
            {/if}
            <div class="w-44">
                <SearchBar bind:val={searchTerm} onSubmit={handleSubmit} />
            </div>
        </div>
    </ul>
</div>
