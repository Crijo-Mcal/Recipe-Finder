import { useNavigate } from "react-router-dom";

export default function Cards({ cardsData }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {cardsData.map((x) => (
        <div
          key={x.idMeal}
          className="relative w-[90vw] h-[80vw] sm:w-[415px] sm:h-[354px] rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-primary"
          style={{
            backgroundImage: `url(${x.strMealThumb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => navigate(`meal/${x.idMeal}`)}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-300"></div>

          {/* Text overlay */}
          <div className="absolute bottom-0 w-full px-4 py-3 bg-black/40 backdrop-blur-sm">
            <p className="text-center text-lg sm:text-2xl font-fugaOne text-white drop-shadow-md truncate">
              {x.strMeal}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
