import ErrorBoundary from "./components/ErrorBoundary";
import Heros from "./components/Heros";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Heros HeroName="SpiderMan" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Heros HeroName="BatMan" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Heros HeroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}
