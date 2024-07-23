function fetchProductDetails(){
    const DEMO_URL = "https://course-api.com/react-store-products";

    fetch(DEMO_URL)
        .then(response=>{
            if(!response.ok){
                throw new Error("Network response was not ok"+ response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.length>0){
                displayProductDetails(data[0]);   //display details of 1st product
            }
            else{
                throw new Error('No products found');
            }
        })
        .catch(error=>{
            console.log("There has been a problem with your fetch operation:",error);
        });
}
function displayProductDetails(product){
    console.log("Product id: ",product.id);
    console.log("Product name: ",product.name);
    console.log("Price:", `$${product.price}`);
    console.log("Description: ",product.description);
}

fetchProductDetails();