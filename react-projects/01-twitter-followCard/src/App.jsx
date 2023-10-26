import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        name="Daniel Galvis"
        userName="DanielGalvis-Dev"
        handleClick
      />
      <TwitterFollowCard
        name="Miguel Angel"
        userName="midudev"
        handleClick
      />
    </section>
  );
}
