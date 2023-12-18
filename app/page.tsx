"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { resolveTypeReferenceDirective } from "typescript";
import { Spinner } from "./Spinner";
import HeroImage from "./assets/heroplaceholder.jpg";
import StillLogo from "./assets/gfLogo.png";
import logoGIF from "./assets/hope.gif";
export type ReviewObj = {
	id: number;
	name: string;
	review: string;
};
export const reviewList: ReviewObj[] = [
	{
		id: 1,
		name: "J Shade",
		review:
			"This is the best game store ever! I came in today in a bind with my PS3 and the gentleman helped me out immensely. I have been coming to this store for at least 20 years and there will never be a better place for games and movies then Gameforce!",
	},
	{
		id: 2,
		name: "Ian Lansberry",
		review:
			"I love this place and have been shopping here for years. Prices are good and they have a lot of vintage gaming equipment and games as well as new items too!",
	},
	{
		id: 3,
		name: "Ryan M",
		review:
			"I've been collecting retro games for close to 10 years, so I've been to a lot of game stores and this is one of the best I've been in. The selection was excellent. The pricing wasn't bad. It wasn't cheap, but I've seen worse. Overall I was impressed.",
	},
	{
		id: 4,
		name: "Emily Davis",
		review: "Amazing quality, will definitely order again.",
	},
	{
		id: 5,
		name: "Michael Brown",
		review: "Not quite what I expected, but good overall.",
	},
	{
		id: 6,
		name: "Sarah Wilson",
		review: "Customer support was helpful and responsive.",
	},
	{
		id: 7,
		name: "David Martinez",
		review: "The product exceeded my expectations!",
	},
];
export default function Home() {
	return (
		<main className="">
			<nav className="flex justify-between py-[8px] w-[100%] items-center bg-[#3c3c3c] sticky">
				<div className="items-center">
					<Image src={StillLogo} alt={"logo"} height={20} />
				</div>
				<div className="flex text-[#e3e3e3] justify-between space-x-4 mr-4">
					<a
						href={`tel:8163834597`}
						className="relative group border-b-2 border-transparent group-hover:border-current group-hover:duration-700"
					>
						<span>816-383-4597</span>
						<span className="absolute -bottom-1 left-1/2 w-0 h-[9px] bg-orange-600 group-hover:w-1/2 group-hover:duration-700 group-hover:transition-all duration-1000 ease-in-out"></span>
						<span className="absolute -bottom-1 right-1/2 w-0 h-[9px] bg-orange-600 group-hover:w-1/2 group-hover:duration-700 group-hover:transition-all duration-1000 ease-in-out"></span>
					</a>
					<button className="relative group border-b-2 border-transparent group-hover:border-current group-hover:duration-700">
						<span>Home</span>
						<span className="absolute -bottom-1 left-1/2 w-0 h-[9px] bg-orange-600 group-hover:w-1/2 group-hover:duration-700 group-hover:transition-all duration-1000 ease-in-out"></span>
						<span className="absolute -bottom-1 right-1/2 w-0 h-[9px] bg-orange-600 group-hover:w-1/2 group-hover:duration-700 group-hover:transition-all duration-1000 ease-in-out"></span>
					</button>
					<button className="relative group border-b-2 border-transparent group-hover:border-current group-hover:duration-700">
						<span>Contact</span>
						<span className="absolute -bottom-1 left-1/2 w-0 h-[9px] bg-orange-600 group-hover:w-1/2 group-hover:duration-700 group-hover:transition-all duration-1000 ease-in-out"></span>
						<span className="absolute -bottom-1 right-1/2 w-0 h-[9px] bg-orange-600 group-hover:w-1/2 group-hover:duration-700 group-hover:transition-all duration-1000 ease-in-out"></span>
					</button>
					<button className="relative group border-b-2 border-transparent group-hover:border-current group-hover:duration-700">
						<span>
							About
							<span className="absolute -bottom-1 left-1/2 w-0 h-[9px] bg-orange-600 group-hover:w-1/2 group-hover:duration-700 group-hover:transition-all duration-1000 ease-in-out"></span>
							<span className="absolute -bottom-1 right-1/2 w-0 h-[9px] bg-orange-600 group-hover:w-1/2 group-hover:duration-700 group-hover:transition-all duration-1000 ease-in-out"></span>
						</span>
					</button>
				</div>
			</nav>

			<div className="hidden md:block">
				<ul className="flex justify-between py-1 h-8 px-6 bg-blue-200 font-monoRoboto">
					{/* Maps the array. This causes the item to be repeated over the element on the inside */}
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
						<li className="w-18 hover:animate-bounce" key={item}>
							{item}
						</li>
					))}
				</ul>
			</div>
			<div className="flex flex-col relative items-center mt-20">
				<Image
					src={logoGIF}
					alt="Logo GIF"
					width={800}
					height={200}
					className=" absolute tailwind-class-names mb-10 z-20"
					unoptimized
				/>
				<Image
					src={HeroImage}
					width={960}
					height={100}
					objectFit="cover"
					objectPosition="center"
					alt="hero image example"
					className="-z-10"
				/>
				<div className=" -mt-40 mb-44 z-20 bg-orange-500 border-[5px] border-orange-800 rounded-[2.5rem] mx-auto text-3xl p-3 font-semibold font-monoRoboto">
					Boulder&apos s Finest One-stop Game Shop
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
			<div id="spinnerId" className=" flex w-[70%] justify-center ">
				<Spinner />
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
