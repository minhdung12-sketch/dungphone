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

// ===== DARK MODE =====
function darkMode() {
  document.body.classList.toggle("dark");
}
