import Cards from "./Cards/Cards";
import Perfil from "./Perfil/Perfil"
import DarkMode from "./DarkMode/DarkMode";
import CreatedBy from "./CreatedBy/CreatedBy";

export default function Home() {
  return (
    <div className="w-screen h-screen flex gap-4 justify-center items-center flex-col bg-only-alice-blue dark:bg-only-black">
      <DarkMode/>
      <Perfil/>
      <Cards/>
      <CreatedBy/>
    </div>
  )
}
