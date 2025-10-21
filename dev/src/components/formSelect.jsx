import { useEffect, useState } from "react";

export default function FormSelect({ setSelectValue }) {
  const [dataCategory, setDataCategory] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setSelectValue(e.target.value);
  }

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setDataCategory(data.categories);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <form
      className="flex items-center justify-center h-10 w-[90%] sm:w-[266px] rounded-xl px-3  bg-white overflow-hidden text-slate-600 font-medium translate-z-100"
      onSubmit={handleSubmit}
    >
      <select
        className="flex items-center  w-[85%] h-full -mt-1 focus:outline-none "
        onChange={handleChange}
      >
        {dataCategory &&
          dataCategory.map((x) => (
            <option key={x.idCategory} value={x.strCategory}>
              {x.strCategory}
            </option>
          ))}
      </select>
    </form>
  );
}
