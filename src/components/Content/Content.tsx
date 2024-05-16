import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Movie } from "../../interface/types";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../header/Header";
// import "swiper/css";

export default function Content() {
  const [data, setData] = useState<Movie[]>([]);
  const [fav, setFav] = useState(false);
  const [text, setText] = useState("");

  const handleFav = (_id: number) => {
    setFav(!fav);
  };

  const handleEnterKeypress = (event: any) => {
    const inputText = event.target.value;
    setText(inputText);
    if (text == "") {
      setData(data);
      console.log("sss");
    } else {
      const filtermovies = data.filter((movie) => {
        return movie.title.toLowerCase().includes(inputText.toLowerCase());
      });
      setData(filtermovies);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      );
      const data = await response.json();
      setData(data.results);
    };
    getData();
  }, []);

  console.log(data);
  console.log(text);

  return (
    <>
    <Header />
      <div className="mt-[27px] px-[16px]">
        <div className="flex items-center gap-[19px]">
          <IoSearch className="w-[24px] h-[24px] text-white" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for movies or TV series "
            className="h-[25px] w-[80%] bg-transparent outline-none text-white"
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyPress={handleEnterKeypress}
          />
        </div>
        <div>
          <h1 className="mt-[26px] text-white text-[20px] pb-[16px]">Trending</h1>
          <div>
            <Swiper 
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="flex items-center"
            >
            {data.slice(0, 5).map((item) => {
              return (
                  <SwiperSlide key={item.image}   >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    className="w-[300px] h-[165px] rounded-[10px]"
                  />
                  </SwiperSlide>
              );
            })}
            </Swiper>
          </div>
          <div className="flex flex-wrap justify-around">
            {data.map((res) => (
              <div
                key={res.id}
                className="w-[165px]  transition-transform duration-[1000ms] relative hover:scale-110 hover:z-20  hover:cursor-pointer hover:shadow-2xl "
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
                  alt={res.title}
                  className="w-[165px] h-[165px] rounded-[10px]"
                />
                <div
                  onClick={() => handleFav(res.id)}
                  className="absolute top-[4%] right-[4%] w-[32px] h-[32px] rounded-[16px] bg-[#10141E] bg-opacity-65 flex items-center justify-center"
                >
                  {fav ? (
                    <FaBookmark className="text-white " />
                  ) : (
                    <FaRegBookmark className="text-white " />
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="text-white">{res.title}</p>
                  <p className="text-white">
                    <span className="text-yellow-500 pr-[10px]">IMB</span>
                    {res.vote_average}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
