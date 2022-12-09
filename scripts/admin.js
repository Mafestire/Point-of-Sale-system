let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        number: 1,
        id: 2.1,
        productName: "Anxiety",
        productPrice: 420,
        colour: "white",
      },
      {
        number: 2,
        id: 1.5,
        productName: "Sofie mini bag",
        productPrice: 230,
        colour: "peach",
      },
      {
        number: 3,
        id: 3.5,
        productName: "Makukke",
        productPrice: 280,
        colour: "cream",
      },
    ];

async function display() {
  let trow = document.querySelector("tbody");
  trow.innerHTML = "";
  products.forEach((list) => {
    trow.innerHTML += `
            <tr style="font-size: 20px; border-right: 2px solid #c77948; border-bottom: 2px solid #c77948;">
                <td>${list.number}</td>
                <td>${list.productName}</td>
                <td>${list.id}</td>
                <td>${list.productPrice}</td>
                <td>${list.colour}</td>
            </tr>
        `;
  });
}
display();

//add Items
const adding = (e) => {
  e.preventDefault();
  // let added = {
  let number = document.getElementById("no.").value,
    productName = document.querySelector("#name").value,
    id = document.getElementById("id").value,
    colour = document.getElementById("color").value,
    productPrice = document.getElementById("price").value;
  // };
  products.push({
    number,
    productName,
    id,
    colour,
    productPrice,
  });
  localStorage.setItem("products", JSON.stringify(products));
  display();
};

document.getElementById("addn").addEventListener("click", adding);
