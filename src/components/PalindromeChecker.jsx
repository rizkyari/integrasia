import React from "react";

const PalindromeChecker = ({ palindromicPets }) => {
    if (palindromicPets.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow p-4 mb-6">
                <h2 className="text-xl font-bold mb-4">Palindrome Checker</h2>
                <p className="text-gray-600">Tidak ada nama hewan yang palindrome.</p>
            </div>
        );
    }
  
    return (
        <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h2 className="text-xl font-bold mb-4">Nama Hewan Palindrome</h2>
            <ul className="space-y-2">
                {palindromicPets.map((pet, index) => (
                    <li key={index} className="flex justify-between border-b pb-1">
                        <span>{pet.name}</span>
                        <span>{pet.length} karakter</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
  
export default PalindromeChecker;