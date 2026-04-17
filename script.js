let count = 0;
let total = 0;

function add(name, price) {
  count++;
  total += price;

  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = total;

  alert("Đã thêm: " + name);
}