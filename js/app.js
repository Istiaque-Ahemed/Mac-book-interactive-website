//=========== head function=========
function getPrice(product, price) {
   const memory = document.getElementById(product);
   memory.innerText = price;
   calc()

}

function calc() {
   const fixedPrice = document.getElementById('fixed-price').innerText;
   const extraMemory = document.getElementById('extra-memory').innerText;
   const extraStorage = document.getElementById('extra-storage').innerText;
   const delivery = document.getElementById('delivery').innerText;
   const total = parseInt(fixedPrice) + parseInt(extraMemory) + parseInt(extraStorage) + parseInt(delivery)
   document.getElementById("totle-price").innerText = total;
   document.getElementById('last-total').innerText = total;

}
// -----------handle the all event -------------

const firstMemory = document.getElementById("memory-8-gb").addEventListener("click", function () {
   getPrice("extra-memory", 0);
})
const secondMemory = document.getElementById("memory-16-gb").addEventListener("click", function () {
   getPrice("extra-memory", 180);
})

const firstStorage = document.getElementById("storage-256gb-SSD").addEventListener("click", function () {
   getPrice("extra-storage", 0);
})
const secondStorage = document.getElementById("storage-512gb-SSD").addEventListener("click", function () {
   getPrice("extra-storage", 100);
})
const thirdStorage = document.getElementById('storage-1tb-SSD').addEventListener("click", function () {
   getPrice("extra-storage", 180);
})

const firstDelivery = document.getElementById("free-delivery").addEventListener("click", function () {
   getPrice("delivery", 0);
})
const secondDelivery = document.getElementById("cost-delivery").addEventListener("click", function () {
   getPrice("delivery", 20);
})

//============== Promo Code function============

document.getElementById('promo-btn').addEventListener('click', function () {
   
   const promoInput = document.getElementById('promo-Input');
   if (promoInput.value == "stevekaku") {
      const promoOut = document.getElementById('last-total');
      const promoDiscount = promoOut.innerText * 20 / 100;
      promoOut.innerText = promoOut.innerText - promoDiscount;
   }

   document.getElementById("promo-btn").disabled = true;
   promoInput.value = "";
})
