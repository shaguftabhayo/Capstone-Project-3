document
    .getElementById("signupForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        let userName = document.getElementById('userName').value;
        let userEmail = document.getElementById('userEmail').value;
        let userPassword = document.getElementById('userPassword').value;

        console.log(userName, userEmail, userPassword);

        if(userName && userEmail && userPassword){
           let userDetails = {
            name: userName,
            email: userEmail,
            password: userPassword,
           };

           let stringifyObj = JSON.stringify(userDetails);
          
           localStorage.setItem("user", stringifyObj);
           
           
            window.location.href = "./index.html"
        }

    });


// cart section


    let cart = [];

    function addToCart(name, price, imgSrc, description) {
        // Check if item is already in the cart
        let item = cart.find(i => i.name === name);
        if (item) {
            // Update quantity if already in cart
            item.quantity += 1;
        } else {
            // Add new item to the cart
            cart.push({ name, price, imgSrc, description, quantity: 1 });
        }
        updateCartDisplay();
    }

    function updateCartDisplay() {
        const cartContainer = document.getElementById('cart-items');
        cartContainer.innerHTML = ''; // Clear current cart items

        cart.forEach(item => {
            cartContainer.innerHTML += `
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <img src="${item.imgSrc}" alt="${item.name}" style="width: 50px; height: 50px;">
                    <div class="ms-2">
                        <div>${item.name}</div>
                        <div>$${item.price} x ${item.quantity}</div>
                    </div>
                    <button class="btn btn-sm btn-danger" onclick="removeFromCart('${item.name}')">Remove</button>
                </div>
            `;
        });
    }

    function removeFromCart(name) {
        cart = cart.filter(item => item.name !== name);
        updateCartDisplay();
    }

