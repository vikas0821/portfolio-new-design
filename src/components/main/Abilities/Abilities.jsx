import Skill from "./Skill"
// import "./abilities.css"
function Abilities() {
  return (
    <section className="w-4/5 mt-2 justify-center bg-white-100  text-white-200 overflow-y-auto border-8 border-extradarkcream-800">
        <h1 className="text-2xl text-extradarkcream-800 font-bold text-center">ABILITIES</h1>
        <p className="text-extradarkcream-800 text-center">Here is a summary of my most important skills and abilities as a Creative Web Developer:</p>
        <Skill />
    </section>
  )
}

export default Abilities
