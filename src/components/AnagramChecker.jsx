import React, { useState } from "react";

const AnagramChecker = ({ onCheck }) => {
    const [firstWord, setFirstWord] = useState("");
    const [secondWord, setSecondWord] = useState("");
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isAnagramResult = onCheck(firstWord, secondWord);
        setResult(isAnagramResult);
    };

    return (
        <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h2 className="text-xl font-bold mb-4">Cek Anagram</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                type="text"
                placeholder="Kata Pertama"
                value={firstWord}
                onChange={(e) => setFirstWord(e.target.value)}
                className="border p-2 w-full rounded"
                required
                />
                <input
                type="text"
                placeholder="Kata Kedua"
                value={secondWord}
                onChange={(e) => setSecondWord(e.target.value)}
                className="border p-2 w-full rounded"
                required
                />
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                    Cek
                </button>
            </form>

            {result !== null && (
                <div className="mt-4 text-center font-semibold">
                    {result ? (
                        <span className="text-green-600">Anagram ✅</span>
                    ) : (
                        <span className="text-red-600">Bukan Anagram ❌</span>
                    )}
                </div>
            )}
        </div>
    );
};

export default AnagramChecker;
