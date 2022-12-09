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
                <td><button id="add" data-bs-target="#addProd"
                data-bs-toggle="modal" >edit</button></td>
                <td><button id="del" onclick="deleteI(this)" >delete</button></td>
            </tr>
        `;
  });
}
display();

//add Items
const adding = (e) => {
  e.preventDefault();
  let number = document.getElementById("no.").value,
    productName = document.querySelector("#name").value,
    id = document.getElementById("id").value,
    colour = document.getElementById("color").value,
    productPrice = document.getElementById("price").value;
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

//delete Items
let deleteButton = document.getElementById("del");
function deleteI(e) {
  let number = document.getElementById("no.").value,
    productName = document.querySelector("#name").value,
    id = document.getElementById("id").value,
    colour = document.getElementById("color").value,
    productPrice = document.getElementById("price").value;
  let p = e.parentNode.parentNode.rowIndex;
  document.querySelector(".table").deleteRow(p);
  products.pop({
    number,
    productName,
    id,
    colour,
    productPrice,
  });

  localStorage.setItem("products", JSON.stringify(products));
}

//edit Items
const editing = (r) => {
  r.preventDefault();
  let number = document.getElementById("no.").value,
    productName = document.querySelector("#name").value,
    id = document.getElementById("id").value,
    colour = document.getElementById("color").value,
    productPrice = document.getElementById("price").value;
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
document.getElementById("add").addEventListener("click", editing);

//sort items

//  products.sort();
//   products.sort(function(a,b){
//     if (a.products < b.products) {
//       return -1;
//     }
//     if (a.products > b.products) {
//       return 1;
//     }
//     return 0;
//   });
//   console.log();

function sortProducts(){
    let list, i, switching, b,shouldSwitch;
    list = document.getElementById("proSorting");
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementById("name");0
      
        for (i = 0; i < b.length - 1; i++) {
          shouldSwitch = false;
            if (b[i].innerHTML.toLowerCase() > b[i+1].innerHTML.toLowerCase()){
              shouldSwitch = true;
              break;
            }
        }
        if (shouldSwitch){
          b[i].parentNode.insertBefore(b[i + 1], b[i]);
          switching = true;
        }
    }
}
sortProducts();