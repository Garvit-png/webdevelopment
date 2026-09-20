//Foreach -- existing array mein changes krta hai 
var arr = [1,2,3,4];
arr.forEach(function(val){
    console.log(val+=1)
})



//map - new array create krta hai and fir uspe operations krta hai 

var newarr = arr.map(function(val){ 
    return "hichki_tuiyan";
})
console.log(newarr)


//filter - filter operation krta hai , and map ki tarah new array bnake operations krta hai 
arr.filter(function(val){
    if (val==5){return true}
    else{return false}
})


//find - pehli value find out krke deta hai 
arr.find(function(val){
    if (val==2){return true}
})

//indexof - index nikal ke deta hai specific value ka 

arr.indexOf(2)

//object

var obj = {
    name:"harsh",
    age:12
}

Object.freeze(obj)

obj.age=13 // ab yeh nahi chlega, becuase hmara "obj" freeze ho chuka hai 


//=============================Synchronous Programming============================

// synchronous - line by line code chle , use bolte hai synchronous 

//jo bhi code async nature ka ho , usey side stack mein bhej do and agle code ko chlao jo bhi sync nature ka ho, jab bhi sara sync code chal jaaye, tab check karo ki async code complete hua ya nahi and agr wo complete hua ho to usey main stack mein laao and chalo

async function abcd(){
    let blob = await fetch('https://randomuser.me/api/');
    let ans = await blob.json();
    console.log(blob.result[0].name)

}

abcd()