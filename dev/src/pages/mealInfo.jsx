import Footer from "../components/footer";
import InputForm from "../components/formInput";
import Logo from "../components/logo";
import Gradient from "../components/fradient";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MealInfo() {
  const [mealData, setMealData] = useState([]);
  const { mealID } = useParams();

  useEffect(() => {
    async function fetchMeal() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`,
        );
        const data = await response.json();
        setMealData(data.meals || []);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchMeal();
  }, [mealID]);

  function formatInstructions(text) {
    if (!text) return [];

    const lines = text
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l !== "");

    const steps = [];

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].toLowerCase().startsWith("step")) {
        const title = lines[i];
        const content = lines[i + 1] || "";

        steps.push(`${title} ${content}`);
        i++; // skip next karena sudah dipakai
      }
    }

    return steps;
  }

  return (
    <>
      {/* HEADER */}
      <header className="w-full min-h-[10vh] bg-secondary flex items-center shadow-md">
        <div className="w-full max-w-[1500px] mx-auto flex flex-col sm:flex-row justify-between items-center p-5 gap-3">
          <Logo size={"150px"} />
          <InputForm />
        </div>
      </header>

      {mealData.map((meal) => (
        <div key={meal.idMeal} className="mb-10">
          {/* IMAGE */}
          <div
            className="w-full h-80 sm:h-[500px] bg-center bg-cover rounded-b-xl shadow-lg"
            style={{ backgroundImage: `url(${meal.strMealThumb})` }}
          ></div>

          <main className="w-full max-w-[1500px] mx-auto flex flex-col justify-center items-center gap-10 p-5">
            {/* TITLE */}
            <h1 className="text-3xl sm:text-5xl text-center font-fugaOne text-white sm:text-secondary bg-secondary sm:bg-white p-2 sm:p-4 rounded-md shadow-md">
              {meal.strMeal}
            </h1>

            {/* INGREDIENTS */}
            <section className="w-full bg-white rounded-xl shadow-md p-5">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Ingredients
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Array.from({ length: 20 }).map((_, i) => {
                  const ingredient = meal[`strIngredient${i + 1}`];
                  const measure = meal[`strMeasure${i + 1}`];

                  if (ingredient && ingredient.trim() !== "") {
                    return (
                      <Gradient
                        key={i}
                        ingredient={ingredient}
                        measure={measure}
                      />
                    );
                  }

                  return null;
                })}
              </div>
            </section>

            {/* INSTRUCTIONS */}
            <section className="w-full bg-white rounded-xl shadow-md p-5">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Instructions
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed">
                {formatInstructions(meal.strInstructions).map((step, i) => (
                  <p key={i}>{step}</p>
                ))}
              </div>
            </section>
          </main>
        </div>
      ))}

      <Footer />
    </>
  );
}
