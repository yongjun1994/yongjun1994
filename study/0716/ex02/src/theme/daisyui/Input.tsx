type Props = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export default function Input({ label, value, onChange, placeholder }: Props) {
  return (
    <div className="form-control w-full max-w-md">
      <label className="label">
        <span className="label-text font-semibold">{label}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder || ""}
        className="input input-bordered w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}