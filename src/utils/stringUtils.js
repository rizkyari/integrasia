export const isAnagram = (str1, str2) => {
    const cleanStr1 = str1.toLowerCase().split('').sort().join('');
    const cleanStr2 = str2.toLowerCase().split('').sort().join('');
    return cleanStr1 === cleanStr2;
};