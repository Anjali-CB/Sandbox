class Store{
    constructor(){
        this.product = [
            {
                name: "product1",
                price: 100,
                details: "1 start"
            },
            {
                name: "product2",
                price: 200,
                details: "2 start"
            },
            {
                name: "product3",
                price: 300,
                details: "3 start"
            },
            {
                name: "product4",
                price: 400,
                details: "4 start"
            },
            {
                name: "product5",
                price: 500,
                details: "5 start"
            },
            {
                name: "product6",
                price: 700,
                details: "6 start"
            },
        ];
    }

    printInfo(data){
        document.getElementById("container").innerHTML = data;
    }
}

class Shop extends Store{
    constructor(){
        super();
        this.cart = [];
    }

    getProduct(){
        let data = `<h2>Shopping List</h2>`;
        this.product.map((pinfo, index)=>{
            data += `<div class='myproduct'>
            <p>${pinfo.name}</p>
            <p>${pinfo.price}</p>
            <p>${pinfo.details}</p>
            <p><button onclick='object.addtocart("${index}")'>Add To cart</button></p>
            </div>`    
        })
        this.printInfo(data);
    }

    addtocart(index){
        this.cart = this.cart.concat(this.product[index]);
        document.getElementById("mycart").innerText = "Items in the cart : " + this.cart.length;
    }

    printCart(){
        let temp = `<h2>Shopping List</h2>`;
        this.cart.map((pinfo, index)=>{
            temp += `<div class=myproduct>
            <p>${pinfo.name}</p>
            <p>${pinfo.price}</p>
            <p>${pinfo.details}</p>
            <p><button onclick='object.delCart("${index}")'>Delete</button></p>
           </div>`
        })
        this.printInfo(temp);
    }

    delCart(index){
        this.cart.splice(index,1);
        this.printCart();
        document.getElementById("mycart").innerText = " items in the cart: " + this.cart.length;
        this.message();
    }

    message(){
        let msg = "<h2>No Items! add Items</h2>";
        if(this.cart.length==0){
            this.printInfo(msg);
        }
    }
}

const object = new Shop();