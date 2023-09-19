const MOCK_ITEMS = JSON.parse(localStorage.getItem('items')) || [];
class OlxItem{
  id;
  name;
  price;
  image;
  location;
  postedDate;
  postedBy;
  constructor (name,price,image,location,postedDate,postedBy){
    this.id = Math.random();
    this.name = name;
    this.price = price;
    this.image = image;
    this.location = location;
    this.postedDate = postedDate;
    this.postedBy = postedBy;
  }
  updatePrice = (newPrice) => {
    this.price = newPrice;
  };
}

for (let i = 0; i < 10; i++) {
    MOCK_ITEMS.push(
      new OlxItem(
        "Dell XPS " + (i + 1),
        70000,
        "https://img5.gadgetsnow.com/gd/images/products/additional/large/G239952_View_1/computer-laptop/laptops/dell-inspiron-3501-d560412win9s-laptop-11th-generation-i5-1135g7-integrated-8gb-1tb-hdd-256gb-ssd-windows-10.jpg",
        "Pedakallepalli",
        "durga",
        new Date()
      )
    );
  }


console.log(MOCK_ITEMS);
  
  function addItems(event) {
    const root = document.getElementById("items");
     const itemsFromStorage = JSON.parse(localStorage.getItem('items'));
     itemsFromStorage.forEach(function (item, i) { 
      const div = createItem(item, i);
      root.appendChild(div);
    });
  }
  
  function createItem(item, i) {
    const div = document.createElement("div");
    div.classList.add("list");
  
    const anchor = document.createElement("a");
    anchor.setAttribute("href", `/item.html?id=${i}`);
  
    div.appendChild(anchor);
  
    const img = document.createElement("img");
    img.setAttribute("src", item.image);
    img.style.width = "100px";
  
    const price = document.createElement("p");
    price.innerHTML = item.price;
  
    const name = document.createElement("p");
    name.innerHTML = item.name;
  
    const location = document.createElement("p");
    location.innerHTML = item.location;
  
    anchor.append(img, price, name, location);
    return div;
  }

  function itemView(item) {
    const pageview = document.createElement("div");
    pageview.classList.add("page");
    const wrap = document.createElement("div");
    wrap.classList.add("view");
    const img = document.createElement("img");
    img.setAttribute("src", item.image);
    wrap.appendChild(img);
    const information  = document.createElement("div");
    information.classList.add("info");
    const price = document.createElement("p");
    price.innerHTML = item.price;
    const name = document.createElement("p");
    name.innerHTML = item.name;
    const location = document.createElement("p");
    location.innerHTML = item.location;
    information.append(img, price, name, location);
    pageview.append(wrap,information);
    return pageview;
  }

  function addItem(event){
    event.preventDefault(); 
    const itemNameEl = document.querySelector('#name');
    const itemprice = document.querySelector('#price');
    const itemlocation = document.querySelector('#location');
    

    const item = new OlxItem(itemNameEl.value,
      itemprice.value,
      'https://placehold.it/200X150',
      itemlocation.value,
      new Date(),
      JSON.parse(sessionStorage.getItem('user')).name
      
      );  

    MOCK_ITEMS.push(item);
    localStorage.setItem("items",JSON.stringify(MOCK_ITEMS));

    window.location.href = '/index.html';

  }