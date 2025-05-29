const cartBtn = document.getElementById("cartBtn");
const cart = document.getElementById("cart");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const totalItemsEl = document.getElementById("total-items");

let cartData = [];

cartBtn.onclick = () => (cart.style.display = "flex");
closeCart.onclick = () => (cart.style.display = "none");

document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.parentElement;
        const name = product.querySelector("h3").textContent;
        const price = parseFloat(
            product.querySelector("p").textContent.replace("$", "")
        );

        cartData.push({ name, price });
        updateCartUI();
    });
});

function updateCartUI() {
    cartItems.innerHTML = "";
    let total = 0;

    cartData.forEach((item, index) => {
        total += item.price;
        const itemEl = document.createElement("div");
        itemEl.classList.add("cart-item");
        itemEl.innerHTML = `
                    <span>${item.name} - $${item.price}</span>
                    <button onclick="removeItem(${index})" aria-label="Remove ${item.name} from cart">Remove</button>
                `;
        cartItems.appendChild(itemEl);
    });

    totalPriceEl.textContent = total.toFixed(2);
    totalItemsEl.textContent = cartData.length;
}

function removeItem(index) {
    cartData.splice(index, 1);
    updateCartUI();
}
