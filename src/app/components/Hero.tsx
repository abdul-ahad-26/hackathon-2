export default function HeroSection() {
    return (
      <section className="relative container h-[716px] bg-cover bg-center flex items-center  justify-center md:justify-start
      "style={{
          backgroundImage: "url('/hero1.png')",
          backgroundColor: "#00A8E8"
        }}>
  
  
        {/* content container */}
        <div className="px-4 flex flex-col gap-6 text-white text-center md:text-left  ">
          <h5 className="font-bold">SUMMER 2020</h5>
          <h1 className="font-bold text-[58px]">NEW COLLECTION</h1>
          <h4 className="text-xl max-w-[367px]">We know how large objects will act,
            but things on a small scale.</h4>
          <button className="font-bold text-2xl bg-[#2DC071] max-w-[221px] px-6 py-3" >Shop Now</button>
  
  
        </div>
  
      </section>
  
    );
  }
  