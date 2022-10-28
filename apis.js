import axios from "axios";

export const getArticles = async ({
  searchQuery = "",
  page = 1,
  language = "",
  sortBy,
  selectedDates,
}) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?apikey=a9d2939e582d4e978e96cbaa2b8950ac&q=${searchQuery}&page=${page}&pageSize=20&language=${language}&sortBy=${sortBy}&from=${
        selectedDates[0] ? selectedDates[0].toISOString() : ""
      }&to=${selectedDates[1] ? selectedDates[1].toISOString() : ""}
          `
    );
    return await response.data;
  } catch (err) {
    console.log(err);
    return err.response.data;
  }
};
