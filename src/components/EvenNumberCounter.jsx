import React from "react";

const EvenNumberCounter = ({ evenNumbers, totalEven }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 mb-6 mt-10">
            <h2 className="text-xl font-bold mb-4">Bilangan Genap</h2>

            <div className="mb-2">
                <strong>Angka Genap:</strong> {evenNumbers.join(", ")}
            </div>
            <div>
                <strong>Total:</strong> {totalEven}
            </div>
        </div>
    );
};

export default EvenNumberCounter;
