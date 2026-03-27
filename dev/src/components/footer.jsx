import github from "../assets/github.png";
import igIcon from "../assets/igIcon.png";

export default function Footer() {
  return (
    <footer className="w-full h-50 bg-secondary flex justify-center items-center gap-10 flex-wrap">
      <a
        href="https://github.com/Crijo-Mcal"
        className="flex gap-2 items-center"
      >
        <img
          src={github}
          alt="github"
          className="w-[2vw]  min-w-10  max-w-10"
        />
      </a>
      <a
        href="https://www.instagram.com/crijo95/"
        className="flex gap-2 items-center "
      >
        <img
          src={igIcon}
          alt="instagram"
          className="w-[2vw]  min-w-10  max-w-10"
        />
      </a>
    </footer>
  );
}
