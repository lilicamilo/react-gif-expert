export const trendingGifs = async () => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=ewuEuGSrWpRfzEEtXz1CVj17L3OxD6AV&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  console.log(data);

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
