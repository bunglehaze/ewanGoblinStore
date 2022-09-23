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
      $("#shoppingCart").load("template/shoppingCart/shoppingCart.html");

    });
        // if the user clicks the .card div (goblin item)
  $(".add-item").click(function () {
    let products = [];

    // populate the products array with the current product's info
    if (localStorage.getItem("items")) {
      products = JSON.parse(localStorage.getItem("items"));
    }

    const parentCard = $(this).closest('.card');

    const itemElement = parentCard.find(".card-text").text(); // Deep Fried Ice Cream£10
    const itemName = itemElement.split("£")[0]; // Deep Fried Ice Cream
    const itemPrice = itemElement.split("£")[1]; // 10
    const imagePath = parentCard.find(".card-img-top").attr('src');



    // check if the item is already in the cart
    let itemExists = false;
    products.forEach((product) => {
      if (product.name === itemName) {
        itemExists = true;
        product.quantity += 1;
      }
    });

    // if the item is not in the cart, add it to the cart
    if (!itemExists) {
      products.push({
        name: itemName,
        price: itemPrice,
        quantity: 1,
        img: imagePath,
      });
    }

    // save the products array to localStorage
    localStorage.setItem("items", JSON.stringify(products));

    // Open shoppingCartButton.html and update .numberOfItems div
    $("#shoppingCart").load("template/shoppingCart/shoppingCart.html", () => {
      $(".numberOfItems").text(products.length);
    });

    var toastLiveExample = document.getElementById('addItemToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  });



