
export const getCountries = async () => {
    const data = await fetch('https://restcountries.com/v2/all');
    return data.json();
}