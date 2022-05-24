import axios from "axios";

export const getCountries = async () => {
  try {
    const res = await axios.get("https://restcountries.com/v3.1/all");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getCountry = async (name) => {
  try {
    const res = await axios.get(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
