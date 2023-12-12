import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <nav className="flex justify-between py-[5px] bg-orange-500">
        <div>
          <h1>Hello world</h1>
        </div>
        <div className="flex justify-between space-x-4 mr-4">
          <a href={`tel:8163834597`}>816-383-4597</a>
          <button className="">Home</button>
          <button>Contact</button>
          <button>About</button>
        </div>
      </nav>
      <div>
        <ul className="flex justify-between px-6 bg-blue-200 font-monoRoboto">
          <li className="">Playstation</li>
          <li>Xbox</li>
          <li>Nintendo</li>
          <li>Wall Scrolls</li>
          <li>Plushies</li>
          <li>Board Games</li>
          <li>Game Disks</li>
          <li>Game Cartridges</li>
          <li>Collectables</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <div className="text-[128px] text-center">Game Force</div>
        <div className="bg-orange-500 border-[5px] border-orange-700 rounded-[2.5rem] mx-auto text-3xl mb-10 p-3 font-monoRoboto">
          Boulder's Finest One-stop Game Shop
        </div>
      </div>
      <div className="flex flex-row justify-between mx-[10%]">
        <div className="">
          <h1>Buy • Sell • Trade</h1>
          <p className=" w-1/3">
            Open since 1995, Game Force Boulder offers an assortment of items to
            fit your gaming needs. We carry everything from Atari to Playstation
            5, Xbox to Nintendo Switch. All the consoles and games you love, in
            one place.
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.4257738572246!2d-105.2540167!3d39.9989361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bedba04fcb157%3A0x41579b4122a810d5!2sGame%20Force%20Boulder!5e0!3m2!1sen!2sus!4v1702334774332!5m2!1sen!2sus"
          width="1000"
          height="450"
          className="rounded-xl border-2 border-black"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
