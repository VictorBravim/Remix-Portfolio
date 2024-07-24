import { Link } from "@remix-run/react";
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "~/ui/Spotlight";
import { TextGenerateEffect } from "~/ui/TextGenerateEffect";
import { MagicButton } from "~/ui/MagicButton";

export const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="#B1C7FF"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="#B1C7FF"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#0E4979" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Web Front-End Developer
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transformando conceitos em experiências de usuários"
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Olá, sou Victor Bravim, um desenvolvedor Front-End.
          </p>

          <Link to="#projetos" className="md:mt-10">
            <MagicButton
              title="Meus projetos"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link>
        </div>
      </div>
    </div>
  );
};