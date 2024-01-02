const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

//for low resolution devices

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove("active");
    })
}

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll(".jsImg"); //selects images

    images.forEach((jsImg) => {
        jsImg.addEventListener('click', () => {
            const imageIndex = jsImg.id; //grabs the id of the image clicked
            const price = jsImg.dataset.price; // Gets the value of data-price attribute
            setImage(imageIndex,price);
        });
    });

    function setImage(index,price) {
        window.location.href = `single-product.html?imageIndex=${index}&price=${price}`; //moves to the following url
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const imgSrc = document.querySelectorAll(".smallImg");

    let mainImg = document.getElementById("main-img");
    let priceElement = document.getElementById("product-price");
    let smallImg1 = document.getElementById("small-img1");
    let smallImg2 = document.getElementById("small-img2");
    let smallImg3 = document.getElementById("small-img3");
    let smallImg4 = document.getElementById("small-img4");

    // Retrieve the image index from the query parameter
    const params = new URLSearchParams(window.location.search);
    const imageIndex = params.get('imageIndex');
    const price = params.get('price');
    
    if (mainImg && imageIndex) {
        mainImg.src = `images/products/f${imageIndex}.jpg`; //sets the main image to the image clicked on the home/shop page
        smallImg1.src = `images/products/f${imageIndex}.jpg`;

        let intIndex = parseInt(imageIndex, 10); //converts string into an integer
        let tempArr = [];
        
        //changes the other images source file depending on the image clicked
        if (intIndex < 14) {
            smallImg2.src = `images/products/f${intIndex + 1}.jpg`;
            smallImg3.src = `images/products/f${intIndex + 2}.jpg`;
            smallImg4.src = `images/products/f${intIndex + 3}.jpg`;
            tempArr = [intIndex, intIndex + 1, intIndex + 2, intIndex + 3];
        } else if (intIndex == 14) {
            smallImg2.src = `images/products/f${intIndex + 1}.jpg`;
            smallImg3.src = `images/products/f${intIndex + 2}.jpg`;
            smallImg4.src = `images/products/f${intIndex - (intIndex - 1)}.jpg`;
            tempArr = [intIndex, intIndex + 1, intIndex + 2, intIndex - (intIndex - 1)];
        } else if (intIndex == 15) {
            smallImg2.src = `images/products/f${intIndex + 1}.jpg`;
            smallImg3.src = `images/products/f${intIndex - (intIndex - 1)}.jpg`;
            smallImg4.src = `images/products/f${intIndex - (intIndex - 2)}.jpg`;
            tempArr = [intIndex, intIndex + 1, intIndex - (intIndex - 1), intIndex - (intIndex - 2)];
        } else if (intIndex == 16) {
            smallImg2.src = `images/products/f${intIndex - (intIndex - 1)}.jpg`;
            smallImg3.src = `images/products/f${intIndex - (intIndex - 2)}.jpg`;
            smallImg4.src = `images/products/f${intIndex - (intIndex - 3)}.jpg`;
            tempArr = [intIndex, intIndex - (intIndex - 1), intIndex - (intIndex - 2), intIndex - (intIndex - 3)];
        }

        //array of prices of images
        const dataPriceArray = [
            "$19.99", "$19.99", "$19.99", "$19.99", "$19.99", "$24.99", "$16.99", "$29.99",
            "$16.99", "$16.99", "$16.99", "$19.99", "$16.99", "$24.99", "$16.99", "$16.99"
        ];

        //changes the price element depending on the clicked small image
        for (let i = 0; i < imgSrc.length; i++) {
            imgSrc[i].onclick = () => {
                mainImg.src = imgSrc[i].src;
                if (intIndex < 14) {
                    if (i == 0) {
                        priceElement.textContent = price;
                    } else {
                        priceElement.textContent = dataPriceArray[tempArr[i - 1]];
                    }
                } else if (intIndex == 14) {
                    if (i == 0) {
                        priceElement.textContent = price;
                    } else if (i == 1 || i == 2) {
                        priceElement.textContent = dataPriceArray[tempArr[i - 1]];
                    } else {
                        priceElement.textContent = dataPriceArray[tempArr[i]];
                    }
                } else if (intIndex == 15) {
                    if (i == 0) {
                        priceElement.textContent = price;
                    } else if (i == 1) {
                        priceElement.textContent = dataPriceArray[tempArr[i - 1]];
                    } else {
                        priceElement.textContent = dataPriceArray[tempArr[i]];
                    }
                } else if (intIndex == 16) {
                    if (i == 0) {
                        priceElement.textContent = price;
                    } else {
                        priceElement.textContent = dataPriceArray[tempArr[i]];
                    }
                }
            }
        }
    }

    if (priceElement && price) {
        priceElement.textContent = price;
    }
});