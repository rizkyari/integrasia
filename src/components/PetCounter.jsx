import React from "react";

const PetCounter = ({count}) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h2 className="text-xl font-bold mb-4">
                Jumlah Hewan per Jenis
            </h2>
            <ul className="space-y-2">
                {Object.entries(count).map(([type, total], index) => (
                    <li key={index} className="flex justify-between border-b pb-1">
                        <span className="font-medium">{type}</span>
                        <span>{total}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PetCounter;