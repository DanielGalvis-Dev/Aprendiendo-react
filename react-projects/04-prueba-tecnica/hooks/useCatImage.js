import { useState, useEffect } from "react";

function useCatImage({ fact }) {
  const [imageURL, setImageURL] = useState();
  const [threeFirstWords, setThreeFirstWords] = useState();

  useEffect(() => {
    if (!fact) return;

    const threeFW = fact.split(" ", 3).join(" ");
    setThreeFirstWords(threeFW);

    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((response) => {
        const [{ url }] = response;
        setImageURL(url);
      });
  }, [fact]);
  return { imageURL, threeFirstWords };
}

export { useCatImage };
