import React from "react";
import NavBar from "./components/NavBar";
import Foot from "./components/Foot";

function creaciones() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div className=' h-screen flex justify-center md:items-center bg-[url("https://res.cloudinary.com/dz9dt7nqo/image/upload/v1699226906/336679829_705824794621262_158712881556164451_n_iuagzy_1_k3cnul.png")] bg-cover bg-center'>
        <div className=" my-12 flex-col items-center ">
          <h1 className=" text-6xl text-center  md:text-7xl font-bold text-black">
            Pagina en construccion
          </h1>
        </div>
      </div>
      <footer>
        <Foot></Foot>
      </footer>
    </div>
  );
}

export default creaciones;
