

interface StatProps {
  number: string;
  label: string;
}

export function Stat({ number, label }: StatProps) {
  return (
    <div>
      <div className="text-4xl font-bold text-green-400 mb-2">{number}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}