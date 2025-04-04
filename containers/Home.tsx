import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="text-center text-2xl">
      <h1>Home</h1>
      <p>This is the home page.</p>
      <Button actiontext="Click Me!" />
    </div>
  );
}