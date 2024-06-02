import React from "react";

export const Herosection = () => {
  const backgroundImageUrl = 'https://images.pexels.com/photos/6077181/pexels-photo-6077181.jpeg';
  //const backgroundImageUrl = 'https://images.pexels.com/photos/6077861/pexels-photo-6077861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <section
      className="relative grid min-h-screen place-content-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover' }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600 px-3 py-1.5 text-sm">
          Beta Now Live!
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight ">
        Don't feel helpless,lets get you justice
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed text-white">
        We are a law firm close to the client. And this thought guides all the actions we take.
        </p>
        <button
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-900/50"
        >
          Explore Now
        </button>
      </div>
    </section>
  );
};
