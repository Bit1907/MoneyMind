import Logo from "../common/Logo";

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5">

        <Logo />

        <div className="text-slate-400">
          Welcome 👋
        </div>

      </div>
    </header>
  );
}