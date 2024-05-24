import { SwiperSlide } from "swiper/react";
export default function Slider({ item }: any) {
  return (
    <>
      <SwiperSlide key={item.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={item.title}
          className="w-[300px] h-[165px] rounded-[10px]"
        />
      </SwiperSlide>
    </>
  );
}
