import Button from "@/components/Button";

export default function HomePage() {
  return (
    <div className="mt-28 md:mt-36 text-center text-2xl">
      <h1>Home</h1>
      <p>This is the home page.</p>
      <Button actiontext="Click Me!" />
    </div>
  );
}