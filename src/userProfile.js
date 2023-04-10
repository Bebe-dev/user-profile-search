import './style/userProfile.css'

const UserProfile = (props) => {
    
  const Data = props.filteredList.map((person) => {
    return (
      <div className="container" key={person.id}>
        <img src={person.picture} alt="user"/>
        <div className="info-container">
          <p>{person.id}</p>
          <h4>{person.title + " " + person.firstName + " " + person.lastName}</h4>
        </div>
      </div>
    )
  });
  
  return(
    <div className="grid-container">
      {Data}
    </div>  
  )
}

export default UserProfile