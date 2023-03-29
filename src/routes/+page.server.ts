import { VITE_RAWG_KEY } from "$env/static/private";
import type { PageServerLoad } from './$types';

export const load = (async ({fetch}) => {
    const params = new URLSearchParams({
        key: VITE_RAWG_KEY,
        page_size: "6",
        ordering: "released"
      });
    const fetchList = async () => {
      const res = await fetch(
        `https://api.rawg.io/api/games?${params}`
      );
      return res.json();
    };

    return {
        list: fetchList(),
    }

}) satisfies PageServerLoad;


