import { useEffect, useState } from "react";

export default function useFetch(fecthFn, initialValue) {
  const [isFecthing, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fecthedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fecthFn();
        setFetchedData(places);
      } catch (error) {
        setError({ message: error.message || "Failed to fatch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fecthFn]);

  return { isFecthing, fecthedData, setFetchedData, error };
}
