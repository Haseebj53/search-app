import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID fvNv7dEjwDGbQOnwBXhWQeO3m8ON5ew5MzHGq7V5XCs",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
