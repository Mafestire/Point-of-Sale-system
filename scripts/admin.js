let products = JSON.parse(localStorage.getItem('.table')) ?
JSON.parse(localStorage.getItem('.table')) : [
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

    }
];

async function display(){
    let trow = document.querySelector('tbody');
    products.forEach((list)=> {
        console.log(list)
        trow.innerHTML +=`
            <tr style="font-size: 20px; border-right: 2px solid #c77948; border-bottom: 2px solid #c77948;">
                <td>${list.number}</td>
                <td>${list.productName}</td>
                <td>${list.id}</td>
                <td>${list.productPrice}</td>
                <td>${list.colour}</td>
            </tr>
        `
    })
}
display()