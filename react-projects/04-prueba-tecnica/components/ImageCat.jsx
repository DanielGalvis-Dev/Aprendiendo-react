import { useCatImage } from "../hooks/useCatImage";

function CatImage({ fact }) {
  const { imageURL, threeFirstWords } = useCatImage({ fact });
  return (
    <section>
      {imageURL && (
        <img src={imageURL} alt={`Imagen extraida de ${imageURL}`}></img>
      )}
      {threeFirstWords && <span>{threeFirstWords}</span>}
    </section>
  );
}

export { CatImage };
