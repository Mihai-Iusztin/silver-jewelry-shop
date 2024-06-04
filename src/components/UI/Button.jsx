export default function Button({ children, className, ...props }) {
  return (
    <button className={`modal-btn ${className}`} {...props}>
      {children}
    </button>
  );
}
