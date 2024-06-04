import fs from 'node:fs/promises';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/products', async (req, res) => {
  const products = await fs.readFile('./data/collection.json', 'utf8');
  res.json(JSON.parse(products));
});

app.post('/orders', async (req, res) => {
  const orderData = req.body.order;

  if (
    orderData === null ||
    orderData.products === null ||
    orderData.products === []
  ) {
    return res.status(400).json({ message: 'Missing data.' });
  }

  if (
    orderData.customer.email === null ||
    !orderData.customer.email.includes('@') ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === '' ||
    orderData.customer.street === null ||
    orderData.customer.street.trim() === '' ||
    orderData.customer['postal-code'] === null ||
    orderData.customer['postal-code'].trim() === '' ||
    orderData.customer.city === null ||
    orderData.customer.city.trim() === '' ||
    orderData.customer.phone === null ||
    orderData.customer.phone.trim() === ''
  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name,phone, street, postal code or city is missing.',
    });
  }
  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
  };

  const existingOrders = await fs.readFile('./data/orders.json', 'utf8');
  const orders = JSON.parse(existingOrders);
  orders.push(newOrder);

  await fs.writeFile('./data/orders.json', JSON.stringify(orders));
  res.status(201).json({ message: 'New Order created!' });
});

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found' });
});

app.listen(3000, () => console.log('Listen on port 3000!'));
