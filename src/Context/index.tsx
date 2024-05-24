// import { createContext, useContext, useState } from "react";

// const ContextProvider = createContext(null);
// export const useCart = () => useContext(ContextProvider);

// export const MoviesContext = ({ children }: any) => {
//   const [moviesCart, setMoviesCart] = useState([]);

//   const addFaforites = (movie) => {
//     setMoviesCart((prev) => [...prev, movie]);
//   };

//   return (
//     <ContextProvider.Provider value={{ addFaforites, moviesCart }}>
//       {children}
//     </ContextProvider.Provider>
//   );
// };