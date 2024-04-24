const API_KEY = import.meta.env.VITE_NEWS_API;

export const fetchNews = async (category: string): Promise<any[]> => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`
  );
  const data = await response.json();

  return data.articles;
};
export const searchNews =async (query: string): Promise<any[]> => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&q=${query}&apiKey=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  
  return data.articles;
}
