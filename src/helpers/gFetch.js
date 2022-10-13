// Array of products
const products = [
  { id: "1", name: "Camiseta Argentina Titular", price: 16500, stock: 10, categoria: "argentina", photo: "https://latinafy.com/images/detailed/31/camiseta-argentina-seleccion--qatar-2022--1.webp" },
  { id: "2", name: "Camiseta Argentina Alternativa", price: 15800, stock: 10, categoria: "argentina", photo: "https://todosobrecamisetas.com/wp-content/uploads/camiseta-suplente-adidas-argentina-2022-3.jpg" },
  { id: "3", name: "Camiseta Brasil Titular", price: 17600, stock: 10, categoria: "brasil", photo: "https://todosobrecamisetas.com/wp-content/uploads/camisetas-nike-brasil-2022-3.jpg" },
  { id: "4", name: "Camiseta Brasil Alternativa", price: 15200, stock: 10, categoria: "brasil", photo: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/WLJJEPJR2VGUTA2T4WVNSHIIME.jpg" },
  { id: "5", name: "Camiseta Uruguay Titular", price: 13350, stock: 10, categoria: "uruguay", photo: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/P55A6JUJ6ZDY7NS7VMGAWHUTEM.jpg" },
  { id: "6", name: "Camiseta Uruguay Alternativa", price: 12950, stock: 10, categoria: "uruguay", photo: "https://www.lavoz.com.ar/resizer/yE8G7u8i4kYRmbsgjgqgwtruUnc=/1023x1150/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/G6O5ULPO7ZG7REUUUM2AD7XDOE.jpeg" },
];

export const gFetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 1800);
  });
};
