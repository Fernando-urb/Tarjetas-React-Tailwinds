import { Hero } from "./components/Hero";
import { CardsContainer } from "./components/Cards-container";
import "./index.css";

function App() {
  return (
    <main className="font-PoppinsExtra flex justify-center text-Grey-500">
      <section className=" w-[296px]  my-[80px] xl:w-[1100px]">
        <Hero />
        <CardsContainer />
      </section>
    </main>
  );
}

export default App;
