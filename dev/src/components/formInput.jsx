/* router */
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import searchIcon from "../assets/search.png";
import { motion } from "framer-motion";

/* dataList */
function DataList({ mealName, setmealID }) {
  const [dataList, setDataList] = useState(null);

  useEffect(() => {
    async function fetchDataList() {
      try {
        const responce = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
        );
        const data = await responce.json();
        setDataList(data.meals);
        setmealID(data.meals[0].idMeal);
      } catch (error) {
        console.log(error);
      }
    }

    fetchDataList();
  }, [mealName]);

  return (
    <>
      <datalist id="MealID">
        {dataList &&
          dataList.map((x) => (
            <option key={x.idMeal} value={x.strMeal}>
              {x.strMeal}
            </option>
          ))}
      </datalist>
    </>
  );
}

/* InputForm */
export default function InputForm() {
  const [mealName, setmealName] = useState("");
  const [mealid, setmealID] = useState(0);
  const navigate = useNavigate();

  function handleChage(e) {
    setmealName(e.target.value);
    console.log(mealName);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (mealid) {
      navigate(`/meal/${mealid}`);
    } else {
      alert("Meal not found!");
    }
    setmealName("");
  }

  return (
    <motion.form
      className="flex w-[90%]  sm:w-[750px] h-10 overflow-hidden max-w-[722px] rounded-xl translate-z-1 shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      onSubmit={handleSubmit}
    >
      <input
        list="MealID"
        type="text"
        placeholder="Search"
        className="w-[85%]  pl-8 focus:outline-none bg-white text-slate-600 font-medium "
        onChange={handleChage}
        value={mealName}
      />

      <DataList mealName={mealName} setmealID={setmealID} />

      <button
        type="submit"
        className="w-[15%] h-full border-l-2 bg-white border-slate-400 hover:bg-black hover:border-black"
      >
        <img src={searchIcon} alt="searchIcon" className="mx-auto w-7 h-7" />
      </button>
    </motion.form>
  );
}
