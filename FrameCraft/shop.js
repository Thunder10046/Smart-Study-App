
for(let i = 1; i <= 6; i++){
    let product = document.getElementsByClassName("product" + i);

    for(let j = 0; j < product.length; j++){
        product[j].addEventListener("click", function(){
            window.location.href = "product" + i + ".html";
        })
    }
}

