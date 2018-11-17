let productArray = [
    new Dog("Medor", "Medor is a realy nice dog", 5, 1000, "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg"),
    
    new Dog("Rex", "Rex is a realy nice dog", 6, 2000, "https://www.healthypawspetinsurance.com/Images/V3/DogAndPuppyInsurance/Dog_CTA_Desktop_HeroImage.jpg"),
    
    new Dog("Bibou", "Bibou is a realy nice dog", 4, 4000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvx4H9VUNRT9c8b0Ez8spebrtUMGjE44QlrPBXERQ1SHN6iwt8Q"),
    
    new Cat("Felix", "Felix is a realy nice cat", 3, 100, "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5acb63d83493f__700-png.jpg"),
    
    new Cat("Fifi", "Fifi is a realy nice cat", 2, 1500, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"),
    
    new Bird("Riko", "Riko is a realy nice bird", 1, 10, "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"),
    
    new Bird("Doubi", "Doubi is a realy nice bird", 5, 10, "https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&h=350"),
    
    new Horse("Doubi", "Doubi is a realy nice Horse", 2, 10000, "https://i.pinimg.com/originals/39/2d/5b/392d5b22520278f89b6e329ccedb5cff.jpg"),

];




document.addEventListener("DOMContentLoaded",function(){

    let container = document.getElementById('product-container');

    for (let i = 0; i < productArray.length; i++) {
        let tmpElement = `<div>
                            <img src="${productArray[i].image}"/}>
                            <h3>${productArray[i].name}</h3>
                            <p>${productArray[i].description}</p>
                            <p>${productArray[i].age} year old</p>
                            <p><strong>${productArray[i].price}€ <strong/><p/>
                            <button>Buy Now</button>
                        </div>`

        container.innerHTML = container.innerHTML + tmpElement;
    }





})


function AddProduct(){
    let container = document.getElementById("product-container");

    let name = document.getElementById("name");
    let description = document.getElementById("description");
    let age = document.getElementById("age");
    let price = document.getElementById("price");
    let image = document.getElementById("image");

    let tmpElement = `<div>
    <img src="${image.value}"/}>
    <h3>${name.value}</h3>
    <p>${description.value}</p>
    <p>${age.value} year old</p>
    <p><strong>${price.value}€ <strong/><p/>
    <button>Buy Now</button>
</div>`

container.innerHTML = container.innerHTML + tmpElement;

}