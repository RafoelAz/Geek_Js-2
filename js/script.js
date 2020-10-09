const goods = [
  { title: "Shirt", price: "150 $" },
  { title: "Socks", price: "50 $" },
  { title: "Jacket", price: "350 $" },
  { title: "Shoes", price: "250 $" },
];

const renderGoodsItem = (title = "Dress", price = "Free(joke)") =>
  `<div class="goods-item"><h3>${title}</h3><div class="goods-img"></div><p>${price}<button>Добавить</button></button></p></div></div>`;

const renderGoodsList = (list) =>
  (document.querySelector(".goods-list").innerHTML = list.map((item) => renderGoodsItem(item.title, item.price)));

renderGoodsList(goods);
