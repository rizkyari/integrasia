export const formatJSON = (data) => {
    const grouped = {};
  
    let grandTotal = 0;
  
    data.forEach((item) => {
        const { category, code, name, total } = item;
        grandTotal += total;
  
        if (!grouped[category]) {
            grouped[category] = {};
        }
        if (!grouped[category][code]) {
            grouped[category][code] = [];
        }
        grouped[category][code].push({
            name,
            total,
        });
    });
  
    const formattedData = Object.entries(grouped).map(([category, codes]) => {
        const categoryTotal = Object.values(codes)
        .flat()
        .reduce((sum, item) => sum + item.total, 0);
  
        const formattedCodes = {};
        for (const [code, items] of Object.entries(codes)) {
            const codeTotal = items.reduce((sum, item) => sum + item.total, 0);
            formattedCodes[code] = {
                total: codeTotal,
                data: items.sort((a, b) => a.name.localeCompare(b.name)), // urutkan berdasarkan nama
            };
        }
  
        return {
            category,
            total: categoryTotal,
            data: formattedCodes,
        };
    });
  
    return {
        total: grandTotal,
        data: formattedData,
    };
};
  