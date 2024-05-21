import { useEffect, useState } from 'react';
import JewelProduct from './JewelProduct';

export default function Jewels() {
  const [loadedJewels, setLoadedjewels] = useState([]);

  useEffect(() => {
    async function fetchJewels() {
      const response = await fetch('http://localhost:3000/products');
      const products = await response.json();
      setLoadedjewels(products);
    }
    fetchJewels();
  }, []);
  console.log(loadedJewels);

  return (
    <ul id="jewels">
      {loadedJewels.map((gem) => (
        <JewelProduct key={gem.id} gem={gem} />
      ))}
    </ul>
  );
}
