import { useEffect, useState } from "react"

export const useModelList = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users))
  }, [])

  return {
    monsters: monsters.filter(val => val.name.toLowerCase().includes(searchField.toLowerCase())),
    setSearchField
  }
}