import Input from './input'
import UserProfile from './userProfile'
import data from './data'
import {useState} from 'react'

const App = () => {
  
  const [filteredList, setFilteredList] = useState(data);
  
  const sendQuery = (query) => {
    const searchList = data.filter((person) => {if(query===""){
      return data
    } else{
      return person.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1 || person.lastName.toLowerCase().indexOf(query.toLowerCase()) !== -1}
    }
      
    )
    setFilteredList(searchList)
  }
  
  return (
    <div>
      <Input handleChange={sendQuery}/>
      <UserProfile filteredList={filteredList}/>
    </div>
  );
}

export default App;
