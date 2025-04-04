interface ButtonProps {
  actiontext: string;
}

export default function Button({ actiontext }: ButtonProps) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {actiontext}
    </button>
  );
}
