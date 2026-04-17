// ===== GIỎ HÀNG =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function add(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();

  showNoti("🛒 Đã thêm " + name);
}

function renderCart() {
  let list = document.getElementById("cart-list");
  let total = 0;

  list.innerHTML = "<h3>🧾 Giỏ hàng:</h3>";

  cart.forEach((item, index) => {
    total += item.price;

    list.innerHTML += `
      <p>${item.name} - ${item.price.toLocaleString()}đ 
      <button onclick="removeItem(${index})">❌</button></p>
    `;
  });

  document.getElementById("count").innerText = cart.length;
  document.getElementById("total").innerText = total.toLocaleString();
}

function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// ===== YÊU THÍCH =====
function like(btn) {
  btn.innerText = "💖";
}

// ===== XEM CHI TIẾT =====
function showDetail(name, price) {
  document.getElementById("product-detail").style.display = "flex";
  document.getElementById("p-name").innerText = name;
  document.getElementById("p-price").innerText = price.toLocaleString() + "đ";
}

function closeDetail() {
  document.getElementById("product-detail").style.display = "none";
}

// ===== DARK MODE =====
function darkMode() {
  document.body.classList.toggle("dark");
}

// ===== SEARCH =====
function searchProduct() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.innerText.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}

// ===== FILTER =====
function filterPrice(type) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let price = parseInt(card.querySelector("p").innerText.replace(/\D/g, ""));

    if (type === "low" && price < 5000000) card.style.display = "block";
    else if (type === "mid" && price >= 5000000 && price <= 15000000) card.style.display = "block";
    else if (type === "high" && price > 15000000) card.style.display = "block";
    else if (type === "all") card.style.display = "block";
    else card.style.display = "none";
  });
}

// ===== THÔNG BÁO XỊN =====
function showNoti(text) {
  let noti = document.createElement("div");
  noti.className = "noti";
  noti.innerText = text;

  document.body.appendChild(noti);

  setTimeout(() => noti.remove(), 2000);
}

// ===== FAKE NGƯỜI MUA =====
setInterval(() => {
  let products = ["iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14"];
  let p = products[Math.floor(Math.random() * products.length)];
  showNoti("🔥 Có người vừa mua " + p);
}, 6000);

// ===== SLIDER =====
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  if (slides.length > 0) {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }
}, 3000);

// ===== FLASH SALE =====
let time = 600;

setInterval(() => {
  let m = Math.floor(time / 60);
  let s = time % 60;

  let el = document.getElementById("time");
  if (el) {
    el.innerText = m + ":" + (s < 10 ? "0" + s : s);
  }

  if (time > 0) time--;
}, 1000);

// ===== CHECKOUT =====
function checkout() {
  if (cart.length === 0) {
    alert("❌ Giỏ hàng trống!");
    return;
  }

  alert("✅ Đặt hàng thành công!");
  cart = [];
  localStorage.removeItem("cart");
  renderCart();
}

// ===== LOAD =====
renderCart();
