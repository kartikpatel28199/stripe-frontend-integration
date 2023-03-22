import axios from "axios";

export const createPaymentIntent = (cart, currency) => {
  const products = cart.map((item) => {
    return {
      item: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    };
  });
  return axios.post("http://localhost:5000/payments", {
    products: products,
    currency: currency,
  });
};
