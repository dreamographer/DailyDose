import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchNews } from "../newsService"; // Assuming searchNews is defined in this file or imported

const SearchPage = () => {
  const location = useLocation();
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  useEffect(() => {
    const search = async () => {
      try {
        let res = await searchNews(query as string);
        setArticles(res as any[]);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      search();
    }
  }, [location.search]);

  return (
    <div className="min-h-screen text-white/90 bg-[url('/top-view-old-french-newspaper-pieces.jpg')] bg-cover bg-fixed bg-center ">
      <div className="min-h-screen backdrop-blur-sm backdrop-brightness-50">
        <h1 className="text-center text-4xl font-black p-10 ">
          Top Articles On {query}
        </h1>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <div className="flex flex-wrap justify-center ">
            {articles &&
              articles.map((article, index) => {
                if (article.description == "[Removed]" || !article.urlToImage) {
                  return null;
                }
                return (
                  <div
                    key={index}
                    className="w-72 m-5 transition-all md:hover:-translate-y-6 bg-slate-900/50 rounded-xl backdrop-blur-2xl cursor-pointer backdrop-brightness-50 p-7"
                  >
                    <div className="flex justify-center">
                      <img
                        className="justify-items-center h- w-full rounded-lg"
                        src={article.urlToImage}
                        alt="Image"
                      />
                    </div>
                    <p className="text-[12px] text-gray-400">
                      {article.publishedAt.slice(0, 10)}
                    </p>

                    <h2 className="text-2xl font-semibold truncate">
                      {article?.title}
                    </h2>

                    <p>{article.description}</p>
                    <a
                      className="text-blue-700 font-medium"
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchPage;
