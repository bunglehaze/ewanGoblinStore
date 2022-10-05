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

function getCustomerInfo() {
  //get the products and get the name of them, add these to productnames
  products = JSON.parse(localStorage.getItem("items"));
  let productNames = "";
  for (i in products) {
    productNames += products[i].name + ",";
  }
  productNames += productNames.slice(0, -1);

  let productPrice = "";
  for (i in products) {
    productPrice += "£" + products[i].price + ",";
  }
  productPrice += productPrice.slice(0, -1);

  //hash out first 12 digits then display last 4
  let hashedCard = $("#cardNum").val();
  hashedCard = hashedCard.slice(-4);
  hashedCard = "**** **** **** " + hashedCard;

  //create an object for the email
  let customerInfo = {
    fullName: $("#fullName").val(),
    email: $("#email").val(),
    address: $("#address").val(),
    city: $("#city").val(),
    county: $("#county").val(),
    postcode: $("#postcode").val(),
    phone: $("#phoneNo").val(),
    cardName: $("#cardName").val(),
    cardNum: hashedCard,
    expDate: $("#expDate").val(),
    ccvNum: $("#cvvNum").val(),
    productNames: productNames,
    productPrice: productPrice,
  };
  //this returns the info ready for the sendEmail function to use it
  return customerInfo;
}

//send the email using the customerInfo object
function sendEmail(customerInfo) {
  emailjs
    .send("service_y9kr4zh", "contact_form", customerInfo, "C5UgIxMhbwspLoGqM")
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}
