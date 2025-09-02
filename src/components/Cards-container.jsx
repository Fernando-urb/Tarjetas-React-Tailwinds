import { Cards } from "./Cards";
import IconoSupervisor from "../assets/images/icon-supervisor.svg";
import IconoTeam from "../assets/images/icon-team-builder.svg";
import IconoKarma from "../assets/images/icon-karma.svg";
import IconoCalculator from "../assets/images/icon-calculator.svg";

export const CardsContainer = () => {
  const servicios = [
    {
      id: 1,
      titulo: "Supervisor",
      descripcion: "Monitors activity to identify project roadblocks",
      img: IconoSupervisor,
      color: "bg-Cyan",
    },
    {
      id: 2,
      titulo: "Team Builder",
      descripcion:
        "Scans our talent network to create the optimal team for your project",
      img: IconoTeam,
      color: "bg-Red",
    },
    {
      id: 3,
      titulo: "Karma",
      descripcion: "  Regularly evaluates our talent to ensure quality",
      img: IconoKarma,
      color: "bg-Orange",
    },
    {
      id: 4,
      titulo: "Calculator",
      descripcion:
        " Uses data from past projects to provide better delivery estimates",
      img: IconoCalculator,
      color: "bg-Blue",
    },
  ];

  return (
    <section className="flex flex-col gap-6 xl:flex-row xl:items-center xl:gap[30px]">
      <Cards {...servicios[0]} />
      <div className="flex flex-col xl:gap-[30px]">
        <Cards {...servicios[1]} />
        <Cards {...servicios[2]} />
      </div>
      <Cards {...servicios[3]} />
    </section>
  );
};
