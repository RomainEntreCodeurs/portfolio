import React from "react";
import { useTranslation } from "react-i18next";
import Box from "./components/Box";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.portfolioTerminal.title"),
      img: "/portfolio.png",
      message: t("projects.portfolioTerminal.message"),
      url: "https://terminal.romain-gilot.fr/"
    }
  ];

  return (
    <div className="bg-gray-50 pt-10" id="mes-projets">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-base font-semibold bg-[#EAF9FC] rounded p-1 text-[#5FACD3] inline-block">{t("projects.title")}</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">{t("projects.subtitle")}</p>
          <div className={"flex gap-x-5 flex-wrap"}>
            {projects.map((project, index) => (
                <Box
                    key={index}
                    title={project.title}
                    img={project.img}
                    message={project.message}
                    url={project.url}
                    textButton={t("projects.textButton")}
                />
            ))}
          </div>
      </div>
    </div>
  );
}
