//const goods = [
//  { title: "Shirt", price: "150 $" },
//  { title: "Socks", price: "50 $" },
//  { title: "Jacket", price: "350 $" },
//  { title: "Shoes", price: "250 $" },
//];

//const renderGoodsItem = (title = "Dress", price = "Free(joke)") =>
//  `<div class="goods-item"><h3>${title}</h3><div class="goods-img"></div><p>${price}<button>Добавить</button></button></p></div></div>`;

//const renderGoodsList = (list) =>
//  (document.querySelector(".goods-list").innerHTML = list.map((item) => renderGoodsItem(item.title, item.price)));

//renderGoodsList(goods);

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
	return `<div class="goods-item">
	<h3>${this.title}</h3>
	<div class="goods-img"></div>
	<p>${this.price}<button>Добавить</button></p>
	</div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
  { title: "Shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 350 },
  { title: "Shoes", price: 250 },
]
  }
  render() {
    let listHtml = '';
    this.goods.forEach(({title,price}) => {
      const goodItem = new GoodsItem(title,price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
 
}

class BasketItem{
	  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
	return `<div class="basket-item">
	<h3>${this.title}</h3>
	<div class="basket-img"></div>
	<p>${this.price}<button>+</button><button>-</button></p>
	</div>`;
  }

}

class GoodsList {
  constructor() {
    this.goods = [];
  }
addBasketItem(basketItem){
	this.goods.push(basketItem);
}

 sumBasketPrice(){
	  let sum = 0;
	  this.goods.forEach(({price})=>{
		  sum+=price
	  })
	  document.querySelector('.basket-sum').innerText = `Сумма: ${sum}`;
  }

  render() {
    let listHtml = '';
    this.goods.forEach(({title,price}) => {
      const basketItem = new BasketItem(title,price);
      listHtml += basketItem.render();
    });
    document.querySelector('.basket-list').innerHTML = listHtml;
  }
}
const list = new GoodsList();
list.fetchGoods();
list.render();