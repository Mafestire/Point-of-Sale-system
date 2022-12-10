document.getElementById('sub') = function() {
    addToCart();
}

async function show() {
    let tr = document.querySelector("#tab");
    // tr.innerHTML = "";
    productList.forEach((list) => {
      tr.innerHTML += `
              <tr style="font-size: 20px; border-right: 2px solid #c77948; border-bottom: 2px solid #c77948;">
                  <td>${list.productName}</td>
                  <td>${list.id}</td>
                  <td>${list.productPrice}</td>
              </tr>
          `;
    });
  }
  show();
