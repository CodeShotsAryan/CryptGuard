import HeroImg from "../assets/HeroImg.avif";
import "./Hero.css";
function Hero() {
  return (
    <section className="Hero flex h-96 items-center justify-center gap-7 pt-9 Hero media-1:flex-col-reverse media-1:mt-44">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-3xl w-60">
          Welcome to <span className="text-logo-color">CRYPTGUARD</span>
        </h1>
        <p className="w-text1-width">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          obcaecati, fuga quisquam ipsa illum id placeat laborum quaerat aut,
          asperiores hic culpa, repellendus dolorem alias quidem recusandae
          fugiat numquam quas.
        </p>
        <button className="bg-logo-color w-28 text-white py-2 rounded-md">
          Get started
        </button>
      </div>
      <div className="Hero-sec-img">
        <img
          src={HeroImg}
          className="rounded-md select-none"
          draggable="false"
        />
      </div>
    </section>
  );
}
export default Hero;
