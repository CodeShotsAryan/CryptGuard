import HeroImg from "../assets/HeroImg.jpg";
import './Hero.css';
function Hero() {
  return (
    <section className="flex h-96 items-center justify-center gap-7">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-4xl w-60">Welcome to <span className="text-logo-color">CRYPTGUARD</span></h1>
        <p className="w-text1-width">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          obcaecati, fuga quisquam ipsa illum id placeat laborum quaerat aut,
          asperiores hic culpa, repellendus dolorem alias quidem recusandae
          fugiat numquam quas.
        </p>
      </div>
      <div className="Hero-sec-img">
        <img src={HeroImg} className="rounded-md"/>
      </div>
    </section>
  );
}
export default Hero;
