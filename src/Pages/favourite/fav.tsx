
import {  FaBookmark } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
}

export function Fav() {
  const location = useLocation();
  const cart: Movie[] = location.state ? location.state.cart : []; // Access the cart array from location state
  return (
    <>
      <div className="flex flex-col lg:flex-row  gap-20">
        <Header cart={cart} /> 
        <div className="flex gap-10 mt-[20px] flex-wrap">
          {cart.map((item) => (
            <div
              key={item.id}
              className="w-[165px] transition-transform duration-[1000ms]  relative hover:scale-110 hover:z-20 hover:cursor-pointer hover:shadow-2xl"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className="w-[165px] h-[165px] rounded-[10px]"
              />
              <div className="absolute top-[4%] right-[4%] w-[32px] h-[32px] rounded-[16px] bg-[#10141E] bg-opacity-65 flex items-center justify-center">
                <FaBookmark className="text-white" />
              </div>
              <div className="flex flex-col">
                <p className="text-white">{item.title}</p>
                <p className="text-white">
                  <span className="text-yellow-500 pr-[10px]">IMDB</span>
                  {item.vote_average}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
