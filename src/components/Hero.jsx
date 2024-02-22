import HeroImg from "../assets/HeroImg.jpg";
function Hero() {
  return (
    <section className="flex h-96 items-center justify-center p-36 gap-7">
      <div>
        <h1 className="font-bold text-4xl w-60">Welcome to CRYPTGUARD</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          obcaecati, fuga quisquam ipsa illum id placeat laborum quaerat aut,
          asperiores hic culpa, repellendus dolorem alias quidem recusandae
          fugiat numquam quas.
        </p>
      </div>
      <div className="">
        <img src={HeroImg} className="rounded-md"/>
      </div>
    </section>
  );
}
export default Hero;
