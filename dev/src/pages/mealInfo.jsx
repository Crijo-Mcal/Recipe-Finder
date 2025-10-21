import Footer from "../components/footer";
import InputForm from "../components/formInput";
import Logo from "../components/logo";
import Gradient from "../components/gradient";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MealInfo() {
  const [mealData, setMealData] = useState(null);
  const { mealID } = useParams();

  useEffect(() => {
    async function fetchMeal() {
      try {
        const respose = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
        );
        const data = await respose.json();
        setMealData(data.meals);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMeal();
  }, [mealID]);

  return (
    <>
      {/* HEADER */}
      <header className="w-full min-h-[10vh] bg-secondary flex items-center shadow-md">
        <div className="w-full max-w-[1500px] mx-auto flex flex-col sm:flex-row justify-between items-center p-5 gap-3">
          <Logo size={"150px"} />
          <InputForm />
        </div>
      </header>

      {mealData &&
        mealData.map((x) => (
          <div key={x.idMeal} className="mb-10">
            {/* MEAL IMAGE */}
            <div
              className="w-full h-80 sm:h-[500px] bg-center bg-cover rounded-b-xl shadow-lg"
              style={{ backgroundImage: `url(${x.strMealThumb})` }}
            ></div>

            <main className="w-full max-w-[1500px] mx-auto flex flex-col justify-center items-center gap-10 p-5">
              {/* TITLE */}
              <h1 className="text-3xl sm:text-5xl text-center font-fugaOne text-white sm:text-secondary bg-secondary sm:bg-white p-2 sm:p-4 rounded-md shadow-md">
                {x.strMeal}
              </h1>

              {/* INGREDIENTS */}
              <section className="w-full bg-white rounded-xl shadow-md p-5">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  Ingredients
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Array.from({ length: 20 }).map((_, i) => {
                    const ingredient = x[`strIngredient${i + 1}`];
                    const measure = x[`strMeasure${i + 1}`];

                    if (ingredient && ingredient.trim() !== "") {
                      return (
                        <Gradient
                          key={i}
                          ingredient={ingredient}
                          measure={measure}
                        />
                      );
                    } else return null;
                  })}
                </div>
              </section>

              {/* INSTRUCTIONS */}
              <section className="w-full bg-white rounded-xl shadow-md p-5">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  Instructions
                </h2>
                <p className="text-base sm:text-lg leading-relaxed">
                  {x.strInstructions}
                </p>
              </section>
            </main>
          </div>
        ))}

      <Footer />
    </>
  );
}
