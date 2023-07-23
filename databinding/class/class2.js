class Company{
    constructor(){
        this.name='Reliance';
        this.feature = 'never give up';
        this.chosenBy = ['hustlers', 'fighters', 'warriors'];
    }

    save = () =>{
        let enteredData = document.getElementById("enteredData").value;
        this.chosenBy.push(enteredData);
        document.getElementById("enteredData").value = "";
        this.service();
    }

    service = ()=>{
        let string = `<h1>Service List</h1>`;
        this.chosenBy.map((name, index)=>{
            string += `<p class='services'>${name}</p>`;
        })
        this.printInfo(string);
    }

    printInfo =(data)=>{
        document.getElementById("container").innerHTML = data;
    }

    home = () =>{
        let message = `<h2>Welcome Home!</h2>`;
        this.printInfo(message);
    }
    about = () =>{
        let temp = `<h1>About Us</h1>
        <p>${this.name}</p>
        <p>${this.feature}</P>`;
        this.printInfo(temp);
    }
}

const obj2 = new Company();