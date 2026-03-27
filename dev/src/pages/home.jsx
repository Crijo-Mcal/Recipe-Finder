/* dependencies */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* components */
import Cards from "../components/cards";
import Footer from "../components/footer";
import Logo from "../components/logo";
import InputForm from "../components/formInput";
import HomeNav from "../components/fomeNav";

/* images */
import HeaderImg from "../assets/headerimg.png";
import hero from "../assets/hero.png";

export default function Home() {
  /* slelect */
  const [selectValue, setSelectValue] = useState("beef");
  const [cardsData, setCardsData] = useState(null);

  /* select Imput */
  useEffect(() => {
    if (!selectValue) return;
    async function fetchCardData() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectValue}`,
        );
        const data = await response.json();
        setCardsData(data.meals);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCardData();
  }, [selectValue]);

  return (
    <>
      {/* header */}
      <header
        style={{ backgroundImage: `url(${HeaderImg})` }}
        className="relative flex flex-col items-center justify-center min-h-screen bg-center bg-no-repeat bg-cover w-full"
      >
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/40 opacity-60"></div>

        {/* logo */}
        <div className=" absolute top-0 w-[95%] h-auto translate-z-1 mt-8 ">
          <Logo size={"20vw"} minSize={"258px"} />
        </div>

        <div className="flex flex-col items-center justify-center w-auto gap-8 h-100">
          {/* hero section */}
          <img src={hero} alt="hero" className="w-[750px] translate-z-1" />

          {/*Input Form*/}
          <InputForm />
        </div>
      </header>

      {/* main */}
      <main className="w-full min-h-screen">
        {/* nav interatif */}
        <HomeNav setSelectValue={setSelectValue} />
        {/* card containner */}
        <div className="w-full min-h-screen flex justify-center my-25 gap-12 flex-wrap ">
          {/* card */}
          {cardsData && <Cards cardsData={cardsData} />}
        </div>
      </main>

      <Footer />
    </>
  );
}
