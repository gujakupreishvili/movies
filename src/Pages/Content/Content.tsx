import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../../components/header/Header";
import { Movie } from "../../interface/types";

import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Content = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [fav, setFav] = useState<{ [key: string]: boolean }>({});
  const [text, setText] = useState("");

  const handleEnterKeypress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const inputText = event.currentTarget.value;
    setText(inputText);
    if (inputText === "") {
      setData(data);
      console.log("sss");
    } else {
      const filterMovies = data.filter((movie) => {
        return movie.title.toLowerCase().includes(inputText.toLowerCase());
      });
      setData(filterMovies);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        );
        const responseData = await response.json();
        setData(responseData.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  const handleAddButtonClick = (movie: Movie) => {
    setFav((prevFav) => {
      return { ...prevFav, [movie.id]: !prevFav[movie.id] };
    });
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <Header />
        <div className="mt-[27px] px-[16px]">
          <div className="flex items-center gap-[19px]">
            <IoSearch className="w-[24px] h-[24px] text-white" />
            <input
              type="text"
              placeholder="Search for movies or TV series"
              className="h-[25px] w-[80%] bg-transparent outline-none text-white"
              value={text}
              onChange={(event) => setText(event.target.value)}
              onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) =>
                handleEnterKeypress(event)
              }
            />
          </div>
          <div>
            <h1 className="mt-[26px] text-white text-[20px] pb-[16px]">
              Trending
            </h1>
            <div className=" w-[100%] lg:w-[1024px]">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                navigation
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {data.slice(0, 5).map((item) => (
                  <SwiperSlide key={item.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    className="w-[300px] h-[165px] rounded-[10px]"
                  />
                </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex flex-wrap justify-around">
              {data.map((res) => (
                <div
                  key={res.id}
                  className="w-[165px] transition-transform duration-[1000ms] relative hover:scale-110 hover:z-20 hover:cursor-pointer hover:shadow-2xl"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
                    alt={res.title}
                    className="w-[165px] h-[165px] rounded-[10px]"
                  />
                  <div
                    onClick={() => handleAddButtonClick(res)}
                    className="absolute top-[4%] right-[4%] w-[32px] h-[32px] rounded-[16px] bg-[#10141E] bg-opacity-65 flex items-center justify-center"
                  >
                    {fav[res.id] ? (
                      <FaBookmark className="text-white" />
                    ) : (
                      <FaRegBookmark className="text-white" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white">{res.title}</p>
                    <p className="text-white">
                      <span className="text-yellow-500 pr-[10px]">IMDB</span>
                      {res.vote_average}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
