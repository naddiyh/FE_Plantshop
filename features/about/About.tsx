import Image from "next/image";

const About = () => {
  return (
    <section className="relative flex w-full items-center justify-center px-8 py-24 md:px-32">
      <section className="flex flex-col items-center justify-center md:flex-row md:gap-28">
        <Image
          src="/images/bonsaii.png"
          width={180}
          height={500}
          alt="bonsai"
          objectFit="cover"
          className="md:w-[500px]"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#318161] md:text-4xl">
            Get To Know About Us
          </h2>
          <p className="text-md text-black md:text-lg">
            Welcome to the place where plants grow happily! We don’t just sell
            plants, we bring a little joy into your home. From elegant
            houseplants to charming pots that steal the show, we’re here to
            brighten up your space. Our plants grow with love, and we can’t wait
            to share a bit of green magic with you. And don’t worry, we’ve got
            pots that won’t leave you ‘puzzled’! 🌱
          </p>

          <p className="text-md text-black md:text-lg">
            We believe every home deserves a touch of nature. Whether you’re
            looking for a peaceful desk companion or a vibrant centerpiece for
            your living room, we have just the plant for you. Our selection is
            carefully curated to ensure your plants are not just beautiful, but
            also easy to care for—because we want you to enjoy every moment with
            your new leafy friend!
          </p>
        </div>
      </section>
      <Image
        src="/images/bggg.png"
        width={200}
        height={500}
        alt="bonsai"
        objectFit="cover"
        className="brightness-20 absolute -right-10 bottom-0 hidden md:flex"
      />
    </section>
  );
};
export default About;
