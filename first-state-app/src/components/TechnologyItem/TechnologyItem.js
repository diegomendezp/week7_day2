function TechnologyItem(props) {
  const displayConcepts = (concepts) => {
    return (
      concepts.map((concept, idx) => {
        return (
          <li key={`${idx}-${concept}`}>{concept}</li>
        )
      })
    )
  }

  return (
    <div>
      <p>{props.technologyName}</p>
      {/* {difficulty >= 5 ? <p>Me quiero morir 🤦‍♂️</p> : <p>Tampoco te flipes 👋</p> } */}
      {props.difficulty >= 5 && <p>Me quiero morir 🤦‍♂️</p>}
      {props.difficulty < 5 && <p>Tampoco te flipes 👋</p>}
      <ul>
        {
          displayConcepts(props.concepts)
        }
      </ul>
    </div>
  )
}

export default TechnologyItem;