export default function Card({ children }) {
  return (
    <div
      className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/80
        p-8
        shadow-2xl
        backdrop-blur-lg
      "
    >
      {children}
    </div>
  );
}