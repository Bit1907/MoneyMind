export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-2xl
          border
          border-slate-700
          bg-slate-900
          px-4
          py-3
          text-white
          placeholder:text-slate-500
          outline-none
          transition
          duration-200
          focus:border-purple-500
          focus:ring-2
          focus:ring-purple-500/30
        "
      />
    </div>
  );
}