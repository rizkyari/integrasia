# Test Dev Frontend - Integrasia Utama

This repository contains my submission for the Frontend Development Technical Test for Integrasia Utama.

The project is built with:
- React 19
- Vite
- TailwindCSS 4

## 🛠 Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/test-dev-frontend.git
cd test-dev-frontend
npm install
npm run dev
```

## 📋 Soal Breakdown

| No | Description | Location |
|:--|:------------|:---------|
| 1 | Create a data array representing type, breed, name, and characteristics of pets | `src/data/pets.js` |
| 2 | Create a function to add a new pet (Rino, the hardworking Javan Rhino) | `src/components/AddPetForm.jsx`, function `handleAddPet` in `src/App.jsx` |
| 3 | Create a function to sort Esa's favorite pets ascending/descending | `src/utils/petUtils.js` (`sortFavoritesAsc`, `sortFavoritesDesc`) and buttons in `src/App.jsx` |
| 4 | Create a function to replace Persian cat to Maine Coon | `src/utils/petUtils.js` (`replacePersianWithMaineCoon`) and button in `src/App.jsx` |
| 5 | Create a function to count number of pets based on their type | `src/utils/petUtils.js` (`countPetsByType`) and `src/components/PetCounter.jsx` |
| 6 | Create a function to find palindrome pet names and show their string length | `src/utils/stringUtils.js` (`findPalindromicPets`) and `src/components/PalindromeChecker.jsx` |
| 7 | Create a function to sum all even numbers and display them | `src/utils/numberUtils.js` (`findEvenNumbers`, `sumEvenNumbers`) and `src/components/EvenNumberCounter.jsx` |
| 8 | Create a function to determine if two strings are anagrams | `src/utils/stringUtils.js` (`isAnagram`) and `src/components/AnagramChecker.jsx` |
| 9 | Format JSON from `case.json` to `expectation.json` structure | `src/utils/jsonFormatterUtils.js` (`formatJSON`) and `src/components/JSONFormatter.jsx` |
ter.jsx

## 📦 Folder Structure

```bash
src/
├── assets/json/         # Provided JSON files (case.json expectation.json)
├── components/          # All UI components
├── data/                # Static data (pets, numbers)
├── utils/               # Helper functions (pet, string, number, JSON formatting)
├── App.jsx              # Main application
├── index.css            # TailwindCSS configuration
├── main.jsx             # React entry point
├── tailwind.config.js   # TailwindCSS config
├── vite.config.js       # Vite config

```

## 📢 Important Notes
The case.json provided has a total sum of 163, not 176 as mentioned in the expectation.json. After manual calculation and verification, the correct total is 163 based on the raw data.

JSON formatting output structure fully matches the expected design with correct grouping and totals.