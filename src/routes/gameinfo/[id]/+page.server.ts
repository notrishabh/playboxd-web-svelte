import { VITE_RAWG_KEY } from "$env/static/private";
import type { PageServerLoad } from './$types';

export const load = (async ({fetch, params}) => {

    const queryParams = new URLSearchParams({
        key: VITE_RAWG_KEY,
      });
    const fetchGameInfo = async () => {
      const res = await fetch(
        `https://api.rawg.io/api/games/${params.id}?${queryParams}`
      );
      return res.json();
    };

    return {
        gameInfo: fetchGameInfo(),
    }

}) satisfies PageServerLoad;


