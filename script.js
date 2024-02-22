let addToCartBtn = document.getElementById("addToCartBtn");
let message = document.getElementById("message");
let mainImage = document.getElementById("mainImage").src;

let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
let counterElement = document.getElementById("counterValue");

addToCartBtn.onclick = function() {
    message.textContent = "Embrace Sideboard with Color Yellow and Size Small added to cart";
    message.classList.add("messagestyle");
};

image1.onclick = function() {
    mainImage = "https://images.unsplash.com/photo-1598971862198-c6bcc057a579?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D".value;
}

image2.onclick = function() {
    mainImage = "https://images.unsplash.com/photo-1598971862198-c6bcc057a579?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D".value;
}

image3.onclick = function() {
    mainImage = "https://images.unsplash.com/photo-1598971862198-c6bcc057a579?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D".value;
}

image4.onclick = function() {
    mainImage = "https://images.unsplash.com/photo-1598971862198-c6bcc057a579?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D".value;
}

function onIncrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "black";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "black";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}

function onDecrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "black";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "black";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}





