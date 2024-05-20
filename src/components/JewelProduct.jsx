export default function JewelProduct({ gem }) {
  return (
    <li>
      <article>
        <img src={`http://localhost:3000/${gem.image}`} alt={gem.name} />
        <div>
          <h2>{gem.name}</h2>
          <h5>{gem.price}</h5>
          <p>{gem.description}</p>
        </div>
        <p>
          <button>Add to Order</button>
        </p>
      </article>
    </li>
  );
}
