export const getRandom = async (search) => {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=ewuEuGSrWpRfzEEtXz1CVj17L3OxD6AV&tag:=${search}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  return data;
};
