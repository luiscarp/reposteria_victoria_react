import NavBar from "./components/NavBar";
import Foot from "./components/Foot";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <div className=' h-screen flex justify-center md:items-center bg-[url("https://res.cloudinary.com/dz9dt7nqo/image/upload/v1699226906/336679829_705824794621262_158712881556164451_n_iuagzy_1_k3cnul.png")] bg-cover bg-center'>
        <div className=" my-12 flex-col items-center ">
          <h1 className=" text-6xl text-center  md:text-7xl font-bold text-black">
            Repostería Victoria
          </h1>

          <div className="flex flex-col sm:flex-row my-10 justify-between items-center">
            <a
              href="https://api.whatsapp.com/send?phone=6142115761"
              className="text-black font-bold text-4xl my-4 backdrop:md:mx-4 "
            >
              Contáctanos
            </a>

            <a className="text-black font-bold text-4xl my-4 md:mx-4">
              Nuestras creaciones
            </a>
          </div>
        </div>
      </div>
      <footer>
        <Foot></Foot>
      </footer>

    </>
  );
}
