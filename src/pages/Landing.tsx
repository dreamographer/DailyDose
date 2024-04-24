import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
const Landing = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?query=${query}`);
  };
  return (
    <div className="flex justify-center h-screen flex-col gap-16 bg-[#fffefe]">
      <div>
        <h1 className="text-center text-2xl text-[#2eb37d] font-medium">
          THE DAILY
        </h1>
        <h1 className="text-center text-7xl text-[#2eb37d] font-bold">
          NewsLetter
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <div className=" w-4/5 md:w-3/6  p-5 pb-3 border-b-4 border-black/75">
          <form className="flex" onSubmit={handleSearch}>
            <input
              className=" focus:placeholder:-translate-y-7 font-[manrope]  placeholder:truncate placeholder:transition-all delay-150  outline-none w-4/5 text-center placeholder:text-xs sm:placeholder:text-2xl text-black placeholder:font-medium placeholder:text-black/75 placeholder:font-[manrope] "
              type="text"
              placeholder="Search for news, articles and topics.."
              onChange={e => setQuery(e.target.value)}
            />
            <button className="w-6" type="submit">
              <CiSearch size={30} />
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex gap-3 font-medium justify-center  md:w-2/6 flex-wrap">
          <Link to={"/category/sports"}>
            <div className=" px-4 py-2 rounded-lg capitalize border-black/75 border-2">
              <p>sports</p>
            </div>
          </Link>
          <Link to={"/category/entertainment"}>
            <div className=" px-4 py-2 rounded-lg capitalize border-black/75 border-2">
              <p>entertainment</p>
            </div>
          </Link>
          <Link to={"/category/technology"}>
            <div className=" px-4 py-2 rounded-lg capitalize border-black/75 border-2">
              <p>technology</p>
            </div>
          </Link>
          <Link to={"/category/general"}>
            <div className=" px-4 py-2 rounded-lg capitalize border-black/75 border-2">
              <p>general</p>
            </div>
          </Link>
          <Link to={"/category/health"}>
            <div className=" px-4 py-2 rounded-lg capitalize border-black/75 border-2">
              <p>health</p>
            </div>
          </Link>
          <Link to={"/category/science"}>
            <div className=" px-4 py-2 rounded-lg capitalize border-black/75 border-2">
              <p>science</p>
            </div>
          </Link>
          <Link to={"/category/business"}>
            <div className=" px-4 py-2 rounded-lg capitalize border-black/75 border-2">
              <p>business</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
