// on document ready
$(document).ready(() => {
  // Load the header.html into the header div, once it's loaded execute callback to add class to headerHome div
  $("#header").load("template/header/header.html", () => {
    $("#headerShop")
      .removeClass()
      .addClass("nav-link active text-black fw-bold");
  });

  // Load the footer.html into the footer div, once it's loaded execute callback to add class to footerHome div
  $("#footer").load("template/footer/footer.html", () => {
    $("#footerShop")
      .removeClass()
      .addClass("nav-link active text-black fw-bold");
  });

  // Load shoppingCart.html
  $("#shoppingCart").load("./template/ShoppingCart/shoppingCart.html");
});

// var x = addItemToCheckout;

// function addItemToCheckout() {
//   // populate the products array with the current product's info
//   if (localStorage.getItem("items")) {
//     products = JSON.parse(localStorage.getItem("items"));
//   }

//   const parentCard = $(this).closest(".card");

//   const itemElement = parentCard.find(".card-text").text(); // Deep Fried Ice Cream£10
//   const itemName = itemElement.split("£")[0]; // Deep Fried Ice Cream
//   const itemPrice = itemElement.split("£")[1]; // 10
//   const imagePath = parentCard.find(".card-img-top").attr("src");

//   // check if the item is already in the cart
//   let itemExists = false;
//   products.forEach((product) => {
//     if (product.name === itemName) {
//       itemExists = true;
//       product.quantity += 1;
//     }
//   });

//   // if the item is not in the cart, add it to the cart
//   if (!itemExists) {
//     products.push({
//       name: itemName,
//       price: itemPrice,
//       quantity: 1,
//    // img: imagePath,
//     });
//   }
//   document.getElementById("#itemDisplay").innerHTML = x;
// }

// Disabling form submissions if there are invalid fields
(function () {
  "use strict";

  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");

      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// Display Cart info and total

// let searchButton = document.querySelector("#submit");

// searchButton.addEventListener("click", () => {
//   console.log("button pressed");
//   getCustomerInfo();

//   // To gather info for the email
//   function getCustomerInfo() {
//     //get the products and get the name of them, add these to productNames
//     products = JSON.parse(localStorage.getItem("items"));
//     let productNames = "";
//     for (i in products) {
//       productNames += products[i].name + ",";
//     }
//     productNames += productNames.slice(0, -1);

//     let productPrice = "";
//     for (i in products) {
//       productPrice += "£" + products[i].price + ",";
//     }
//     productPrice += productPrice.slice(0, -1);

//     //hash out first 12 digits then display last 4
//     let hashedCard = $("#cardNum").val();
//     hashedCard = hashedCard.slice(-4);
//     hashedCard = "**** **** **** " + hashedCard;

// //create an object for the email
// let customerInfo = {
//   fullName: $("#fullName").val(),
//   email: $("#email").val(),
//   address: $("#address").val(),
//   city: $("#city").val(),
//   country: $("#country").val(),
//   postcode: $("#postcode").val(),
//   phone: $("#phoneNo").val(),
//   cardName: $("#cardName").val(),
//   cardNum: hashedCard,
//   expDate: $("#expDate").val(),
//   ccvNum: $("#cvvNum").val(),
//   productNames: productNames,
//   productPrice: productPrice,
// };
//this returns the info ready for the sendEmail function to use it
// return customerInfo;

function sendEmail() {
  var customerInfo = {
    full_name: document.getElementById("fullName"),
    reply_to: document.getElementById("email"),
    message: document.getElementById("address"),
    message: document.getElementById("city"),
    message: document.getElementById("country"),
    message: document.getElementById("postcode"),
    message: document.getElementById("phoneNo"),
    message: document.getElementById("cardName"),
    message: document.getElementById("cardNum"),
    message: document.getElementById("expDate"),
    message: document.getElementById("ccvNum"),
  };
}

//send the email using the customerInfo object
function sendEmail(customerInfo) {
  emailjs
    .send(
      "service_gth306w",
      "template_sajcd4i",
      customerInfo,
      "A75Zj7ESvJUX1IO78"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}
