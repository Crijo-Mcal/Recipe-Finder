export default function Gradient({ ingredient, measure }) {
  const imageUrl = `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`;

  return (
    <div className="w-28 h-auto flex flex-col justify-center items-center bg-white rounded-xl shadow-md p-2 hover:scale-105 transition-transform">
      <img
        src={imageUrl}
        alt={ingredient}
        className="w-20 h-20 object-contain mb-2"
        onError={(e) =>
          (e.target.src = "https://via.placeholder.com/100?text=No+Img")
        }
      />
      <p className="text-center text-sm font-semibold text-gray-700">
        {ingredient}
      </p>
      <p className="text-center text-xs text-gray-500">{measure}</p>
    </div>
  );
}
