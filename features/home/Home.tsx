import Image from "next/image";
import { PlantLink } from "./planLink";
import { TopPicks } from "./TopPicks";

export const Home = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-8  p-4 md:gap-24 md:p-32">
      <section className="flex w-full flex-col-reverse items-center justify-between pt-10 md:flex-row">
        <div className="flex flex-col md:gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="bg-gradient-to-r from-[#144230] to-[#B4CD87] bg-clip-text text-6xl font-bold text-transparent">
              Health Plants
            </h2>
            <p className="bg-gradient-to-r from-[#144230] to-[#B4CD87] bg-clip-text text-6xl font-bold text-transparent">
              Happy Homes
            </p>
          </div>

          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            similique?
          </p>
        </div>

        <Image
          src="/images/bgg.png"
          width={400}
          height={100}
          alt={"bg"}
          objectFit="cover"
          objectPosition="top"
          className=""
        />
      </section>
      <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-6">
        {PlantLink.map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            <Image
              src={item.src}
              alt={item.title}
              width={200}
              height={100}
              objectFit="cover"
            />
            <p className="font-semibold text-gray-500">{item.title}</p>
          </div>
        ))}
      </div>
      <TopPicks />
    </main>
  );
};
