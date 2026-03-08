let plusBtn = document.querySelectorAll(".plus");
let minusBtn = document.querySelectorAll(".minus");
let deleteBtn = document.querySelectorAll(".delete");
let likeBtn = document.querySelectorAll(".like");

function updateTotal() {
  let prices = document.querySelectorAll(".unit-price");
  let quantities = document.querySelectorAll(".quantity");

  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    total += prices[i].innerText * quantities[i].innerText;
  }

  document.querySelector(".total").innerText = total;
}

/* PLUS BUTTON */

plusBtn.forEach((btn) => {
  btn.addEventListener("click", function () {

    let quantity = btn.nextElementSibling;
    quantity.innerText++;

    updateTotal();
  });
});


/* MINUS BUTTON */

minusBtn.forEach((btn) => {
  btn.addEventListener("click", function () {

    let quantity = btn.previousElementSibling;

    if (quantity.innerText > 0) {
      quantity.innerText--;
    }

    updateTotal();
  });
});


/* DELETE ITEM */

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", function () {

    btn.closest(".card-body").remove();

    updateTotal();
  });
});


/* LIKE BUTTON */

likeBtn.forEach((btn) => {
  btn.addEventListener("click", function () {

    btn.classList.toggle("liked");

  });
});

updateTotal();