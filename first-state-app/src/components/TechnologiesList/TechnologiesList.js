import { technologies } from "../../fakeApi"
import TechnologyItem from "../TechnologyItem/TechnologyItem"

function TechnologiesList(props) {
  const displayTechnologies = () => {
    return (
      technologies.map(({ name, concepts, difficulty }, idx) => {
        return (
          <TechnologyItem technologyName={name} concepts={concepts} difficulty={difficulty} key={idx} />
        )
      })
    )
  }

  return (
    <section>
      <h2>Technologies List</h2>
      {
        displayTechnologies()
      }
    </section>
  )
}

export default TechnologiesList;