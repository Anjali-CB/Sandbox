class User{
    getHome= ()=>{
        console.log("Welcome Home!");
    }

    getAbout = ()=>{
        console.log("Result: " + (5+4+6));
    }
}

var obj = new User();
obj.getHome();
obj.getAbout();