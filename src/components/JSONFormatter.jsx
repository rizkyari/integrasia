import React, { useState } from "react";
import { formatJSON } from "../utils/jsonFormatterUtils";
import caseData from "../assets/json/case.json";

const JSONFormatter = () => {
    const [formatted, setFormatted] = useState(null);

    const handleFormat = () => {
        const result = formatJSON(caseData.data);
        setFormatted(result);
    };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-xl font-bold mb-4">JSON Formatter</h2>

        <button
        onClick={handleFormat}
        className="px-4 py-2 mb-4 bg-emerald-500 text-white rounded hover:bg-emerald-600"
        >
            Format JSON
        </button>

        {formatted && (
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm max-h-96">
                {JSON.stringify(formatted, null, 2)}
            </pre>
        )}
    </div>
  );
};

export default JSONFormatter;
