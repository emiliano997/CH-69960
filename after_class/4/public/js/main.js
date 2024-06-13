const socket = io();

socket.on("products", (data) => {
  console.log("Products", data);

  if (data.length > 0) {
    showProducts(data);
  }
});

function showProducts(products) {
  const tbody = document.querySelector("tbody");

  tbody.innerHTML = "";

  products.forEach((product) => {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.innerText = product.id;

    const tdTitle = document.createElement("td");
    tdTitle.innerText = product.title;

    const tdPrice = document.createElement("td");
    tdPrice.innerText = product.price;

    tr.appendChild(tdId);
    tr.appendChild(tdTitle);
    tr.appendChild(tdPrice);

    tbody.appendChild(tr);
  });
}
