//LOCAL STORAGE DATA
//product cartegory 1
let miniBags = JSON.parse(localStorage.getItem(".item"))
  ? JSON.parse(localStorage.getItem(".item"))
  : [
      {
        id: 1.1,
        productName: "Leather mini bag",
        productPrice: 'R230',
        discription: 'i',
        images:
          "https://i.postimg.cc/Kztcz7Lq/R03756483-B4-IVORY-M.jpg",
      },
      {
        id: 1.2,
        productName: "Berry mini bag",
        productPrice: 'R200',
        discription: 'i',
        image:
          "https://i.postimg.cc/3NDdH4vJ/2021-Female-Tote-Bag-Designers-Luxury-Handbags-Printed-Bucket-simple-women-bag-Famous-Brand-Shoulder.webp",
      },
      {
        id: 1.3,
        productName: "Mean Doll bag",
        productPrice: 'R230',
        discription: 'i',
        image: "https://i.postimg.cc/3RGds0pr/6473910056-6-1-1.jpg",
      },
      {
        id: 1.4,
        productName: "Angel mini bag",
        productPrice: 'R230',
        discription: 'i',
        image:
          "https://i.postimg.cc/k5J5jhMc/687b99f7f82be36b204a275362b5edb3.jpg",
      },
      {
        id: 1.5,
        productName: "Sofie mini bag",
        productPrice: 'R230',
        discription: 'i',
        image: "https://i.postimg.cc/ZnxbF8kg/6613010070-6-1-1.jpg",
      },
      {
        id: 1.6,
        productName: " Leather mini bag",
        productPrice: 'R230',
        discription: 'i',
        image: "https://i.postimg.cc/qMZVfbGw/6642810030-6-1-1.jpg",
      },
      {
        id: 1.7,
        productName: "Icy mini bag",
        productPrice: 'R230',
        discription: 'i',
        image: "https://i.postimg.cc/dt3p9RKy/Edit-1-43.jpg",
      },
      {
        id: 1.8,
        productName: " Leather mini bag",
        productPrice: 'R230',
        discription: 'i',
        image:
          "https://i.postimg.cc/5y6g83F9/r-BVa-VVw-B8ci-AQTMl-AALwvz5g-ZK4805.jpg",
      },
    ];

    async function display() {
      let row = document.querySelector(".item");
      miniBags.forEach((list) => {
        row.innerHTML += `
        <div class="col-3">
        <div class="card mb-5 me-5" style="width: 12rem;background-color: #c77948;text-align: center; padding: .5rem;">
            <img src="${list.image}" class="card-img-top" alt="..." style="border-radius: 40%; width: 140px; height: 150px;">
            <div class="card-body">
              <h5 class="card-title" style="font-size: 20px;">${list.productName}</h5>
              <p class="card-text" style="font-size: 18px;">${list.discription}</p>
              <p class="card-price">${list.productPrice}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
            `;
      });
    }
    display();



//product cartegory 2
let designerBags = JSON.parse(localStorage.getItem("#designer "))
  ? JSON.parse(localStorage.getItem("#designer"))
  : [
      {
        id: 2.1,
        productName: "Anxiety",
        productPrice: 'R420',
        discription: 'i',
        image: "https://i.postimg.cc/v8hz4Z3B/41-Hz-EXA-qb-L.jpg",
      },
      {
        id: 2.2,
        productName: "Divbeauty",
        productPrice: 'R380',
        discription: 'i',
        image:
          "https://i.postimg.cc/rwkxg6hb/2018-Messenger-Bags-Women-handbag-flower-women-shoulder-bags-women-pu-leather-tote-bag-ladies-bags.jpg",
      },
      {
        id: 2.3,
        productName: "Jelica",
        productPrice: 'R400',
        discription: 'i',
        image:
          "https://i.postimg.cc/tCtYqs5S/09927f9f0412eabda86a738090578a55.jpg",
      },
      {
        id: 2.4,
        productName: "Flora",
        productPrice: 'R350',
        discription: 'i',
        image:
          "https://i.postimg.cc/PrcFqq5D/b2830a935aaab1dfa8fd8895b04802bbf9d0533d-original.jpg",
      },
      {
        id: 2.5,
        productName: "Divbeauty classic",
        productPrice: 'R340',
        discription: 'i',
        image:
          "https://i.postimg.cc/wB95xKLJ/FGJLLOGJGSO-2019-New-luxury-Metal-letters-soft-bag-sac-Lady-shoulder-handbag-brand-women-bag-designe.jpg",
      },
      {
        id: 2.6,
        productName: "Divbeauty Del",
        productPrice: 'R400',
        discription: 'i',
        image:
          "https://i.postimg.cc/x1ng8bSc/New-Designer-PU-Leather-Ladies-Handbags-Bags-with-Factory-Price-Shell-Bag.jpg",
      },
      {
        id: 2.7,
        productName: "Easspoulo",
        productPrice: 'R330',
        discription: 'i',
        image:
          "https://i.postimg.cc/Jzp3h6q2/r-BVa-JFk45we-AMQbi-AAL5-XWQIV1-E508.jpg",
      },
      {
        id: 2.8,
        productName: "Pahajim",
        productPrice: 'R430',
        discription: 'i',
        image:
          "https://i.postimg.cc/HLJMkpjr/Women-Handbag-Shoulder-Bag-Girls-Fashion-Famous-Design-Leather-Big-Casual-Tote-High-Quality-Hasp-Cas.jpg",
      },
    ];

    async function showData() {
      let row = document.querySelector("#designer");
      designerBags.forEach((list) => {
        console.log(list);
        row.innerHTML += `
        <div class="col-3">
        <div class="card mb-5 me-5" style="width: 12rem;background-color: #c77948;text-align: center; padding: .5rem;">
            <img src="${list.image}" class="card-img-top" alt="..." style="border-radius: 40%; width: 140px; height: 150px;">
            <div class="card-body">
              <h5 class="card-title" style="font-size: 20px;">${list.productName}</h5>
              <p class="card-text" style="font-size: 18px;">${list.discription}</p>
              <p class="card-price">${list.productPrice}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
            `;
      });
    }
    showData();


//product cartegory 3
let backBags = JSON.parse(localStorage.getItem(".backpacks"))
  ? JSON.parse(localStorage.getItem(".backpacks"))
  : [
      {
        id: 3.1,
        productName: "Kale",
        productPrice: 'R200',
        discription: 'i',
        image: "https://i.postimg.cc/fR42QTCR/1.jpg",
      },
      {
        id: 3.2,
        productName: "Vans",
        productPrice: 'R240',
        discription: 'i',
        image:
          "https://i.postimg.cc/YCzC10y4/2cf5e7078d6a226c8349690458c3e4b1.jpg",
      },
      {
        id: 3.3,
        productName: "XXX",
        productPrice: 'R300',
        discription: 'i',
        image:
          "https://i.postimg.cc/W3RYTpTn/3-Pcs-Geometric-Prints-Primary-Middle-School-Bag-Backpack-Set-with-Lunch-Bag-Elementary-Girls-Boys-Bo.jpg",
      },
      {
        id: 3.4,
        productName: "Sally-kitten",
        productPrice: 'R200',
        discription: 'i',
        image: "https://i.postimg.cc/SsTXcRRL/61-Jh-XKBw-Tz-L-AC-UL1000.jpg",
      },
      {
        id: 3.5,
        productName: "Makukke",
        productPrice: 'R280',
        discription: 'i',
        image: "https://i.postimg.cc/FRBR76CD/71d-JX6x-W8-DL-AC-SX425.jpg",
      },
      {
        id: 3.6,
        productName: "Nike-mega",
        productPrice: 'R260',
        discription: 'i',
        image:
          "https://i.postimg.cc/L6dPDqvv/03675c2603ec662a4950eeba1981aacd.jpg",
      },
      {
        id: 3.7,
        productName: "Nike-min",
        productPrice: 'R220',
        discription: 'i',
        image:
          "https://i.postimg.cc/nh3MyMKy/brasilia-jdi-mini-backpack-Tl-K4-RQ.png",
      },
      {
        id: 3.8,
        productName: "Sally-pupp",
        productPrice: 'R430',
        discription: 'i',
        image: "https://i.postimg.cc/q7GQVsDk/71-SNJZjzk-QS-AC-SL1500.jpg",
      },
    ];

    async function viewItems() {
      let row = document.querySelector(".backpacks");
      backBags.forEach((list) => {
        row.innerHTML += `
        <div class="col-3">
        <div class="card mb-5 me-5" style="width: 12rem;background-color: #c77948;text-align: center; padding: .5rem;">
            <img src="${list.image}" class="card-img-top" alt="..." style="border-radius: 40%; width: 140px; height: 150px;">
            <div class="card-body">
              <h5 class="card-title" style="font-size: 20px;">${list.productName}</h5>
              <p class="card-text" style="font-size: 18px;">${list.discription}</p>
              <p class="card-price">${list.productPrice}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
            `;
      });
    }
    viewItems();


