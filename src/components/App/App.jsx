import { useState, useEffect } from 'react'
import List from '../List';
import Search from '../Search';
import './App.css';

const listData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'Angular',
  'NodeJs',
]

function App() {
  const [search, setSearch] = useState('')
  const [items, setItems] = useState(listData)

  useEffect(() => {
    setItems(listData.filter(elem => elem.toLowerCase().includes(search.toLowerCase())))
  }, [search])

  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={(event) => setSearch(event.target.value)}>
          Find courses:
        </Search>
        <List items={ items } />
      </div>
    </div>
  )
}

export default App;
