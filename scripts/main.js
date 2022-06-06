function Data(n,e,a,am){
    this.name=n;
    this.email=e;
    this.address=a;
    this.amount= am;
}

function addUser(e){
    e.preventDefault();

    let form = document.getElementById("form");

    let name=form.name.value;
    let email=form.email.value;
    let address=form.address.value;
    let amount=form.amount.value;

    let u1 = new Data(name,email,address,amount)
    console.log(u1);
    
    let arr= JSON.parse(localStorage.getItem("user")) || [];
    arr.push(u1);

    localStorage.setItem("user", JSON.stringify(arr));
    window.location.reload();
}