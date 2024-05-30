export default function Input({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id}></label>
      <input id={id} name={id} {...props} required />
    </div>
  );
}
