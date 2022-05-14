const baseURL = `https://api.punkapi.com/v2/beers`;

export const connection = async () => {
    try {
        const response = await fetch(baseURL);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};
