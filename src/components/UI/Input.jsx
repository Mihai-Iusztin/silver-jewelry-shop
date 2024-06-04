export default function Input({ label, id, ...props }) {
  return (
    <div className="input-content">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} required />
    </div>
  );
}
