let products =[
    {
      id: 1,
      productName: "Anxiety",
      productPrice: 420,
      colour: "Winter Mood",
      category: "Designer Handbags",
    },
    {
      id: 2,
      productName: "Sofie mini bag",
      productPrice: 230,
      colour: "Peach",
      category: "Mini Handbags",
    },
    {
      id: 3,
      productName: "Makukke",
      productPrice: 280,
      colour: "Cream",
      category: "Backpack",
    },
    {
      id: 4,
      productName: "Angel",
      productPrice: 230,
      colour: "Grey",
      category: "Mini Handbags",
    },
    {
      id: 5,
      productName: "Jelica",
      productPrice: 400,
      colour: "Purple Pink",
      category: "Mini Handbags",
    },
    {
      id: 6,
      productName: "Divbeauty",
      productPrice: 340,
      colour: "Carolina",
      category: "Designer Handbags",
    },
    {
      id: 7,
      productName: "Kale",
      productPrice: 200,
      colour: "Black",
      category: "Backpack",
    },
    {
      id: 8,
      productName: "Sally-kitten",
      productPrice: 200,
      colour: "Cream",
      category: "Backpack",
    },
  ];
  localStorage.setItem('products', JSON.stringify(products));
  let productList = JSON.parse(localStorage.getItem('products'));

async function display() {
  let trow = document.querySelector("tbody");
  trow.innerHTML = "";
  productList.forEach((list) => {
    trow.innerHTML += `
            <tr style="font-size: 20px; border-right: 2px solid #c77948; border-bottom: 2px solid #c77948;">
                <td>${list.productName}</td>
                <td>${list.id}</td>
                <td>${list.productPrice}</td>
                <td>${list.colour}</td>
                <td>${list.category}</td>
                <td><button id="add" data-bs-target="#addProd"
                data-bs-toggle="modal" onclick="proEdit(${list.id})" style="font-size: 18px;">edit</button></td>
                <td><button id="del" onclick="deleteI(this)" >delete</button></td>
            </tr>
        `;
  });
}
display();

//add Items
const adding = (e) => {
  e.preventDefault();
    productName = document.querySelector("#name").value,
    id = document.getElementById("id").value,
    colour = document.getElementById("color").value,
    productPrice = document.getElementById("price").value;
  productList.push({
    productName,
    id,
    colour,
    productPrice,
  });
  localStorage.setItem("products", JSON.stringify(productList));
  display();
};

document.getElementById("addn").addEventListener("click", adding);

//delete Items
let deleteButton = document.getElementById("del");
function deleteI(e) {
    productName = document.querySelector("#name").value,
    id = document.getElementById("id").value,
    colour = document.getElementById("color").value,
    productPrice = document.getElementById("price").value;
    category = document.getElementById("category").value;
  let p = e.parentNode.parentNode.rowIndex;
  document.querySelector(".table").deleteRow(p);
  productList.pop({
    productName,
    id,
    category,
    colour,
    productPrice,
  });

  localStorage.setItem("products", JSON.stringify(productList));
}

//edit Items
let idEdit = 0;
function proEdit(i){
  let edit = productList[i];
  console.log(edit);
    document.querySelector("#editName").value = edit.productName;
    document.getElementById("editId").value = edit.id;
    document.getElementById("editPrice").value = edit.productPrice;
    document.getElementById("editColor").value = edit.colour;  
    docu
    idEdit = 1;
}

function edited(){
  let edit = productList[idEdit - 1];
  edit.productName = document.querySelector("#editName").value;
  edit.id = document.getElementById("editId").value;
  edit.productPrice = document.getElementById("editPrice").value;
  edit.colour = document.getElementById("editColor").value;  
  idEdit = 1;
  localStorage.getItem('edit', JSON.stringify(productList));
  display();
}
document.getElementById("editing").addEventListener("click", edited);


//sort items
  document.getElementById('sort').addEventListener('click', ()=>{
    productList.sort((a,b) =>{
      if (a.productName.toLowerCase() < b.productName.toLowerCase()
      ) return -1;
      else if (a.productName.toLowerCase() > b.productName.toLowerCase()
      ) return 1;
      return 0;
    })
    localStorage.setItem("products", JSON.stringify(productList));
    display();
  });

    console.log(productList);

//FILTER
// const filterCartegory = products.filter(products =>{
//   let a = category;
//   if(a === Backpack)
// })