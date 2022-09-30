let products = [];
$(document).ready(function () {
  
  if (localStorage.getItem("items")) {
    products = JSON.parse(localStorage.getItem("items"));
  }
  calcCartData(products);
});

  // when the user clicks the shopping cart button, update .modal-body with the items in the cart
  $(".buttonWrapper").click(function () {
    if (localStorage.getItem("items")) {
      products = JSON.parse(localStorage.getItem("items"));

      let modalBody = $(".modal-body");
      modalBody.empty(); // empty the initial contents of modal body before adding new items

      // render products name, price, image and quantity
      products.map((product) => {
        modalBody.append(
          `<div class="productWrapper" id="${product.name}">
                <div id="productInfo">
                  <div class="name">${product.name} - £${product.price}<br></div>
                  <div class="quantity">Item x ${product.quantity}</div>
                  <div class="productImage w-75"> <img class="card-img-top" src="${product.img}"></div>
                </div>
                <div class="
                <div id="actions">
                  <button class="btn btn-primary increaseQuantity" id="${product.name}">
                    +
                  </button>
                  <button class="btn btn-danger decreaseQuantity" id="${product.name}">
                    -
                  </button>               
              </div>
          `
        );
      });

      $(".increaseQuantity").click(function () {
        // get the id attribute of the button
        let productName = $(this).attr("id");
        // match the productName to the selected item inside products array
        let product = products.find((product) => product.name === productName);
        // then increase the selected item quantity by 1
        product.quantity++;
        calcCartData(products);

        // update the quantity div's text - go up to productWrapper level, and then find the div with .quantity class
        $(this)
          .closest(".productWrapper") // get the closest productWrapper div
          .find(".quantity") // get the quantity div
          .text(`x ${product.quantity}`); // update the text of the quantity

        // update the items in localStorage
        localStorage.setItem("items", JSON.stringify(products));
      });

      $(".decreaseQuantity").click(function () {
        // get the id attribute of the button
        let productName = $(this).attr("id");
        // match the productName to the selected item inside products array
        let product = products.find((product) => product.name === productName);
        if (product.quantity > 0) {
          
        // then decrease the selected item quantity by 1
        product.quantity--;
        calcCartData(products);

        // update the quantity div's text - go up to productWrapper level, and then find the div with .quantity class
        $(this)
          .closest(".productWrapper") // get the closest productWrapper div
          .find(".quantity") // get the quantity div
          .text(`x ${product.quantity}`); // update the text of the quantity

        // update the items in localStorage
        localStorage.setItem("items", JSON.stringify(products));
        }
      });
    }
  });

  
  function calcCartData (products) {
    let cartQuantity = 0;
    let cartTotal = 0;
    for (let product of products) {
      let productTotal = product.price * product.quantity;
      cartTotal = cartTotal + productTotal;
      cartQuantity = cartQuantity + product.quantity;
    }

    cartTotal = cartTotal.toFixed(2);
    document.getElementById('total').innerHTML = "Total: £ " + cartTotal;

    $(".numberOfItems").text(cartQuantity);
  }     
