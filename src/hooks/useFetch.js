import { useState, useEffect } from "react";

export const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  const baseUrl = "http://localhost:8000"; // use http for local dev
  const url = `${baseUrl}${apiPath}`;
  console.log(url);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    }
    fetchData();
  }, [url]);
  return data;
};
