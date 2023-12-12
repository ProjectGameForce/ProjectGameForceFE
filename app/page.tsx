import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <nav className="flex justify-between py-[5px] bg-orange-500 sticky">
        <div>
          <h1>Game Force</h1>
        </div>
        <div className="flex justify-between space-x-4 mr-4">
          <a href={`tel:8163834597`} className="hover:underline">
            816-383-4597
          </a>
          <button className="">Home</button>
          <button>Contact</button>
          <button>About</button>
        </div>
      </nav>

      <div className="hidden md:block">
        <ul className="flex justify-between px-6 bg-blue-200 font-monoRoboto">
          {[
            "Playstation",
            "Xbox",
            "Nintendo",
            "Wall Scrolls",
            "Plushies",
            "Board Games",
            "Game Disks",
            "Game Cartridges",
            "Collectables",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col">
        <div className="text-[128px] text-center">Game Force</div>
        <div className="bg-orange-500 border-[5px] border-orange-800 rounded-[2.5rem] mx-auto text-3xl mb-10 p-3 font-semibold font-monoRoboto">
          Boulder's Finest One-stop Game Shop
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mx-[10%]">
        <div className="flex flex-col items-center">
          <h1 className="text-[50px] font-monoRoboto">Buy • Sell • Trade</h1>
          <p className=" w-[26rem] text-2xl font-monoRoboto">
            Open since 1995, Game Force Boulder offers an assortment of items to
            fit your gaming needs. We carry everything from Atari to Playstation
            5, Xbox to Nintendo Switch. All the consoles and games you love, in
            one place.
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.4257738572246!2d-105.2540167!3d39.9989361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bedba04fcb157%3A0x41579b4122a810d5!2sGame%20Force%20Boulder!5e0!3m2!1sen!2sus!4v1702334774332!5m2!1sen!2sus"
          width="600"
          height="450"
          className="rounded-xl border-2 border-black"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div>
        <footer className="bg-[#2b2b2b] h-28 mt-20">
          <div className="flex text-[#e3e3e3] justify-between mx-[2%] py-4">
            <div>
              <h1 className="text-3xl">Game Force®</h1>
              <p>Buy•Sell•Trade</p>
            </div>
            <div className="text-3xl">Play Hard</div>
            <div>
              <ul>
                <li>Contact us</li>
                <li>Privacy Policy</li>
                <li>Enter Tron</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
