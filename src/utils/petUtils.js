export const addPet = (pets, newPet) => {
    return [...pets, newPet]
}

export const sortFavoritesAsc = (pets) => {
    return [...pets].sort((a,b) => Number(a.favorite) - Number(b.favorite))
}

export const sortFavoriteDesc = (pets) => {
    return [...pets].sort((a,b) => Number(b.favorite) - Number(a.favorite))
}

export const replacePersianWithMaineCoon = (pets) => {
    return pets.map((pet) => {
        if(pet.type === 'Kucing' && pet.breed === 'Persia') {
            return {
                ...pet,
                breed: "Maine Coon",
            }
        }
        return pet;
    })
}

export const countPetsByType = (pets) => {
    const count = {};
  
    pets.forEach((pet) => {
        if (count[pet.type]) {
            count[pet.type]++;
        } else {
            count[pet.type] = 1;
        }
    });
  
    return count;
};

export const findPalindromicPets = (pets) => {
    const isPalindrome = (str) => {
        const cleanStr = str.toLowerCase();
        return cleanStr === cleanStr.split('').reverse().join('');
    };
  
    return pets
        .filter((pet) => isPalindrome(pet.name))
        .map((pet) => ({
            name: pet.name,
            length: pet.name.length,
        }));
};