import faceboolIcon from "../assets/facebookIcon.png";
import igIcon from "../assets/igIcon.png";

export default function Footer() {
  return (
    <footer className="w-full h-50 bg-secondary flex justify-center items-center gap-10 flex-wrap">
      <a href="#" className="flex gap-4 items-center">
        <img
          src={faceboolIcon}
          alt="facebookIcon"
          className="w-[5vw] h-[5vw] min-h-[50px] min-w-[50px] max-h-[60px] max-w-[60px]"
        />
        <h1 className=" font-fugaOne text-[20pt] sm:text-[30pt] text-white ">
          morglia
        </h1>
      </a>
      <a href="#" className="flex gap-4 items-center ">
        <img
          src={igIcon}
          alt="facebookIcon"
          className="w-[5vw] h-[5vw] min-h-[50px] min-w-[50px] max-h-[60px] max-w-[60px]"
        />
        <h1 className=" font-fugaOne text-[20pt] sm:text-[30pt] text-white">
          morglia
        </h1>
      </a>
    </footer>
  );
}
