import { VITE_RAWG_KEY } from "$env/static/private";

export const load = (async ({params}) => {
    return {
        data: VITE_RAWG_KEY
    };
})

