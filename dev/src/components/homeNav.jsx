import { useEffect, useState } from "react";
import InputForm from "./formInput.jsx";
import Logo from "./logo.jsx";
import FormSelect from "./formSelect.jsx";

export default function homeNav({ setSelectValue }) {
  const [active, setAtive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= window.innerHeight + 100) {
        setAtive(true);
      } else {
        setAtive(false);
      }
    }
    // Tambahkan listener satu kali
    window.addEventListener("scroll", handleScroll);

    // Bersihkan listener saat komponen unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="sticky top-0 w-full mi-h-20 bg-secondary gap-5 flex justify-center  shadow-[0_5px_5px_rgba(0,0,0,0.5)] z-10 ">
        <div className="w-full sm:w-[90%] h-auto py-5 flex items-center flex-col sm:flex-row justify-around gap-3">
          {active && <Logo size={"10vw"} minSize={"170px"} />}
          {active && <InputForm setSelectValue={setSelectValue} />}
          <FormSelect setSelectValue={setSelectValue} />
        </div>
      </div>
    </>
  );
}
