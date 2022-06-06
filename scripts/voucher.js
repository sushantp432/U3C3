let userdata= JSON.parse(localStorage.getItem("user"))
let wallet= document.querySelector("#wallet_balance").innerText=
console.log(userdata);

// let id;
let url= `https://masai-vouchers-api.herokuapp.com/api/vouchers`;

fetch(url)
.then(function(res){
    return res.json();

})
.then(function(res){
    console.log(res[0].vouchers);
    append(res[0].vouchers);
})
.catch(function(err){
    console.log(err);
})

var appen= document.querySelector("#voucher_list")
function append(data){

    data.map(function(ele){
        let box=document.createElement("div");
        let image= document.createElement("img");
        image.src=ele.image;
        let name= document.createElement("h3");
        name.innerText=ele.name;
        let price= document.createElement("p")
        price.innerText=ele.price;
        let buy= document.createElement("button");
        buy.innerText = "BUY"
        buy.setAttribute("class","buy_voucher")

        

        // let box= document.createElement("div")
        box.setAttribute("class","voucher");
        box.append(image,name,price,buy)

        appen.append(box);

    })
}
