import { useState } from 'react'
import {pets as initialPets} from "./data/pets"
import { addPet, sortFavoriteDesc,findPalindromicPets, sortFavoritesAsc, replacePersianWithMaineCoon, countPetsByType } from './utils/petUtils'
import { numbers } from './data/numbers'
import { findEvenNumbers, sumEvenNumbers } from './utils/numberUtils'
import { isAnagram } from './utils/stringUtils'
import './App.css'
import PetList from './components/PetList'
import AddPetForm from './components/AddPetForm'
import PetCounter from './components/PetCounter'
import PalindromeChecker from './components/PalindromeChecker'
import EvenNumberCounter from './components/EvenNumberCounter'
import AnagramChecker from './components/AnagramChecker'
import JSONFormatter from './components/JSONFormatter'

function App() {
  const [pets, setPets] = useState(initialPets)
  const petTypeCount = countPetsByType(pets)
  const palindromicPets = findPalindromicPets(pets);
  const evenNumbers = findEvenNumbers(numbers);
  const totalEven = sumEvenNumbers(evenNumbers);

  const handleAddPet = (newPet) => {
    setPets(addPet(pets, newPet))
  }

  const handleSortAsc = () => {
    setPets(sortFavoritesAsc(pets))
  }

  const handleSortDesc = () => {
    setPets(sortFavoriteDesc(pets))
  }

  const handleReplaceBreed = () => {
    setPets(replacePersianWithMaineCoon(pets))
  }

  return (
    <>
      <div className='min-h-screen bg-gray-100 p-6'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Esa's Pets</h1>

        <PetCounter count={petTypeCount} />
        <PalindromeChecker palindromicPets={palindromicPets} />
        <AddPetForm onAdd={handleAddPet} />

        <div className='flex justify-center mb-6 gap-4'>
          <button onClick={handleSortAsc} className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>
            Sort Favorite Asc
          </button>
          <button onClick={handleSortDesc} className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'>
            Sort Favorite Dsc
          </button>
          <button onClick={handleReplaceBreed} className='px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600'>
            Ganti Persia ke Maine Coon
          </button>
        </div>

        <PetList pets={pets}/>

        <EvenNumberCounter evenNumbers={evenNumbers} totalEven={totalEven} />
        <AnagramChecker onCheck={isAnagram}/>
        <JSONFormatter/>
      </div>
    </>
  )
}

export default App
