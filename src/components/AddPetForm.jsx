import React, {useState} from "react";

const AddPetForm = ({onAdd}) => {
    const[newPet, setNewPet] = useState({
        type:"",
        breed:"",
        name:"",
        characteristic:"",
        favorite: false
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setNewPet({
            ...newPet,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(newPet);
        setNewPet({
            type: "",
            breed: "",
            name: "",
            characteristic: "",
            favorite: false,
        })
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Tambah Hewan Baru</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                type="text"
                name="type"
                value={newPet.type}
                onChange={handleChange}
                placeholder="Jenis (Anjing, Jucing, Ikan, dll)"
                className="border p-2 rounded"
                required
                />
                <input
                type="text"
                name="breed"
                value={newPet.breed}
                onChange={handleChange}
                placeholder="Ras"
                className="border p-2 rounded"
                required
                />
                <input
                type="text"
                name="name"
                value={newPet.name}
                onChange={handleChange}
                placeholder="Nama Hewan"
                className="border p-2 rounded"
                required
                />
                <input
                type="text"
                name="characteristic"
                value={newPet.characteristic}
                onChange={handleChange}
                placeholder="Karakteristik"
                className="border p-2 rounded"
                required
                />

                <div className="flex items-center mt-4">
                    <input
                    type="checkbox"
                    name="favorite"
                    checked={newPet.favorite}
                    onChange={handleChange}
                    className="mt-2"
                    />
                </div>

                <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Tambah
                </button>
            </div>
        </form>
    )
}

export default AddPetForm;