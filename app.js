// Dummy data for products


let dummyData = [
    {
        id: 1,
        productName: "Smartwatch",
        productPrice: "$400",
        productDescription:"A sleek smartwatch offering fitness tracking, heart rate monitoring, and customizable features for a modern lifestyle.",
        productImageUrl:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        id: 2,
        productName: "Headphone",
        productPrice: "$300",
        productDescription: "Premium wireless headphones with noise cancellation and up to 30 hours of battery life for an immersive listening experience",
        productImageUrl:"https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        productName: "LAPTOP",
        productPrice: "$550",
        productDescription: "A powerful laptop designed for seamless multitasking, featuring high performance, long battery life, and a sleek design.",
        productImageUrl:"https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    }
];


function showProducts() {
    const mainContainer = document.getElementById('main');
    mainContainer.innerHTML = ''; 

    
    const productCards = dummyData.map(product => {
       
        const card = document.createElement('div');
        card.classList.add('card');
        card.id = product.id;

        
        const img = document.createElement('img');
        img.src = product.productImageUrl;
        img.alt = product.productName;

    
        const carName = document.createElement('h2');
        carName.innerText = product.productName;
        const price = document.createElement('h3');
        price.innerText = product.productPrice;
        const description = document.createElement('p');
        description.innerText = product.productDescription;

       
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';

      
        deleteButton.addEventListener('click', () => {
            
            dummyData = dummyData.filter(p => p.id !== product.id);
            showProducts(); 
        });

       
        card.appendChild(img);
        card.appendChild(carName);
        card.appendChild(price);
        card.appendChild(description);
        card.appendChild(deleteButton);

        return card; 
    });

    
    mainContainer.append(...productCards); 
}

window.onload = showProducts;