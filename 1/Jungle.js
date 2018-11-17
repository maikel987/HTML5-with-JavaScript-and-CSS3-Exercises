class Animal{
    constructor(name,description,age,price,image){
      
        this.name = name;
        this.description=description;
        this.age=age;
        this.price=price
        this.image=image;
    }
}

class Dog extends Animal{
    constructor(name,description,age,price,image){
        super(name,description,age,price,image);
        
    }
}

class Cat extends Animal{
    constructor(name,description,age,price,image){
        super(name,description,age,price,image);
        
    }
}

class Bird extends Animal{
    constructor(name,description,age,price,image){
        super(name,description,age,price,image);
        
    }
}

class Horse extends Animal{
    constructor(name,description,age,price,image){
        super(name,description,age,price,image);
        
    }
}


