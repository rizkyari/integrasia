import React from "react";

const PetList = ({pets}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
            {pets.map((pet, index) => (
                <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col justify-between"
                >
                    <div>
                        <h2 className="text-lg font-bold">{pet.name}</h2>
                        <p className="text-gray-600">{pet.type} - {pet.breed}</p>
                        <p className="text-sm italic text-gray-500">{pet.characteristic}</p>
                    </div>
                    {pet.favorite && (
                        <span className="mt-2 text-xs font-semibold text-yellow-600">
                            Favorite
                        </span>
                    )}
                </div>
            ))}
        </div>
    )
}

export default PetList;