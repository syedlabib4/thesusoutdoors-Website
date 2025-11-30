const shoeImages = [
  { shoeImg: "./pictures/shoe1 p1.png", hoverImg: "./pictures/shoe1 p2.png", name: "The Allegra", price: "42,800" },
  { shoeImg: "./pictures/shoe4 p1.png", hoverImg: "./pictures/shoe2 p2.png", name: "Weekend Boot Beige", price: "42,800" },
  { shoeImg: "./pictures/shoe5 p1.png", hoverImg: "./pictures/shoe3 p3.png", name: "Weekend Boot in Cuero", price: "42,800" },
  { shoeImg: "./pictures/shoe7 p1.png", hoverImg: "./pictures/shoe4 p2.png", name: "The Allegra", price: "42,800" },
  { shoeImg: "./pictures/shoe6 p1.png", hoverImg: "./pictures/shoe1 p2.png", name: "Weekend Boot in Sage", price: "42,800" },
  { shoeImg: "./pictures/shoe6 p1.png", hoverImg: "./pictures/shoe2 p2.png", name: "Weekend Boot Beige", price: "42,800" },
  { shoeImg: "./pictures/shoe7 p1.png", hoverImg: "./pictures/shoe3 p3.png", name: "Weekend Boot in Cuero", price: "42,800" },
  { shoeImg: "./pictures/shoe8 p1.png", hoverImg: "./pictures/shoe4 p2.png", name: "Weekend Boot in Sage", price: "42,800" }
];

const productsDiv = document.getElementById("products");


shoeImages.forEach(item => {
  productsDiv.innerHTML += `
    <div class="product-card">
      <div class="product-img">
        <img class="default-img" src="${item.shoeImg}" alt="${item.name}">
        <img class="hover-img" src="${item.hoverImg}" alt="${item.name}">
        <span class="sale-badge">Sale</span>
      </div>
      <h3 class="product-title">${item.name}</h3>
      <p class="stars">★★★★★</p>
      <p class="price">
        <span class="old">Rs.85,000 PKR</span>
        <span class="new">Rs.${item.price} PKR</span>
      </p>
      <button class="choose-btn">Choose options</button>
    </div>
  `;
});


const slider = document.querySelector(".products-slider");
const leftBtn = document.querySelector(".slide-btn.left");
const rightBtn = document.querySelector(".slide-btn.right");

rightBtn.addEventListener("click", () => slider.scrollLeft += 300);
leftBtn.addEventListener("click", () => slider.scrollLeft -= 300);
