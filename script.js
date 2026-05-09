//your code here!

const list = document.getElementById("infi-list");

let count = 1;

// Function to add items
function addItems(num) {
    for (let i = 0; i < num; i++) {
        const li = document.createElement("li");
        li.textContent = `List Item ${count++}`;
        list.appendChild(li);
    }
}

// Add initial 10 items
addItems(10);

// Infinite Scroll
window.addEventListener("scroll", () => {

    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight
    ) {
        addItems(2);
    }

});