let count = 0;
let total = 0;

function add(name, price) {
  count++;
  total += price;

  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = total;

  alert("Đã thêm: " + name);
}
function add(name, price) {
  count++;
  total += price;

  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = total.toLocaleString();

  alert("🛒 Đã thêm " + name);
}
let cart = [];

function add(name, price) {
  count++;
  total += price;

  cart.push({ name, price });

  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = total.toLocaleString();

  renderCart();
}

function renderCart() {
  let html = "<h3>🧾 Giỏ hàng:</h3>";
  
  cart.forEach(item => {
    html += `<p>${item.name} - ${item.price.toLocaleString()}đ</p>`;
  });

  document.getElementById("cart-list").innerHTML = html;
}
function like(btn) {
  btn.innerText = "💖";
}
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  let data = localStorage.getItem("cart");
  if (data) {
    cart = JSON.parse(data);
    renderCart();
  }
}

window.onload = loadCart;
// ===== GIỎ HÀNG =====
let cart = [];

function add(name, price) {
  count++;
  total += price;

  cart.push({ name, price });

  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = total.toLocaleString();

  renderCart();
}

function renderCart() {
  let html = "<h3>🧾 Giỏ hàng:</h3>";
  
  cart.forEach(item => {
    html += `<p>${item.name} - ${item.price.toLocaleString()}đ</p>`;
  });

  document.getElementById("cart-list").innerHTML = html;
}

// ===== YÊU THÍCH =====
function like(btn) {
  btn.innerText = "💖";
}

// ===== XEM CHI TIẾT =====
function viewDetail(name, price) {
  document.getElementById("p-name").innerText = name;
  document.getElementById("p-price").innerText = price.toLocaleString() + "đ";

  document.getElementById("product-detail").style.display = "flex";
}

function closeDetail() {
  document.getElementById("product-detail").style.display = "none";
}
.footer {
  background: black;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
}
// ===== DARK MODE =====
function darkMode() {
  document.body.classList.toggle("dark");
}
function showDetail(name, price) {
  document.getElementById("product-detail").style.display = "flex";
  document.getElementById("p-name").innerText = name;
  document.getElementById("p-price").innerText = price.toLocaleString() + "đ";
}

function closeDetail() {
  document.getElementById("product-detail").style.display = "none";
}
// SEARCH
function searchProduct() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.dataset.name;
    card.style.display = name.includes(input) ? "block" : "none";
  });
}

// FILTER
function filterPrice(type) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let price = parseInt(card.dataset.price);

    if (type === "low" && price < 5000000) card.style.display = "block";
    else if (type === "mid" && price >= 5000000 && price <= 15000000) card.style.display = "block";
    else if (type === "high" && price > 15000000) card.style.display = "block";
    else if (type === "all") card.style.display = "block";
    else card.style.display = "none";
  });
}

// FAKE NOTIFICATION
setInterval(() => {
  let products = ["iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14"];
  let p = products[Math.floor(Math.random() * products.length)];

  let noti = document.createElement("div");
  noti.className = "noti";
  noti.innerText = "🔥 Có người vừa mua " + p;

  document.body.appendChild(noti);

  setTimeout(() => noti.remove(), 3000);
}, 5000);

// CHECKOUT
function checkout() {
  alert("✅ Đặt hàng thành công! Shop sẽ liên hệ bạn.");
}
