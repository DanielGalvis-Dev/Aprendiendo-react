import { useCatFact } from "./hooks/useCatFact";
import { CatImage } from "./components/ImageCat";
import "./App.css";

function App() {
  const { fact, refreshFact } = useCatFact();

  const handleCLick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>App de </h1>
      <button onClick={handleCLick}>Cambiar</button>
      {fact && <p>{fact}</p>}
      <CatImage fact={fact} />
    </main>
  );
}

export { App };
