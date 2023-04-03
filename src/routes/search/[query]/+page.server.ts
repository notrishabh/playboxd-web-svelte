import { VITE_RAWG_KEY } from "$env/static/private";
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {

  const queryParams = new URLSearchParams({
    key: VITE_RAWG_KEY,
    search: params.query,
    page_size: "10"
  });
  const fetchSearchedList = async () => {
    const res = await fetch(
      `https://api.rawg.io/api/games?${queryParams}`
    );
    return res.json();
  };

  return {
    searchedList: fetchSearchedList(),
  }

}) satisfies PageServerLoad;

