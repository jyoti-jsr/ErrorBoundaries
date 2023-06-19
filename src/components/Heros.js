export default function Heros({ HeroName }) {
  if (HeroName === "Joker") {
    throw new Error("Not A hero");
  }
  return <div>{HeroName}</div>;
}
