import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

function useCatFact() {
  const [fact, setFact] = useState(
    "lorem ipsum dolor sit amet, consectetur adipiscing"
  );
  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  useEffect(refreshFact, []);
  return { fact, refreshFact };
}

export { useCatFact };
