// //Node js is not a 
// //                  -programming langugae X
// //                  -framework X
// //                  -technology X
// //                  -library X
// //                  -software X


// //Node js in JAVASCRIPT RUN TIME ENVIRONMENT

// //-------------------------------------------------

// //JS se backend nahi bn skta kyunki js ke pass voh functionalities hi nahi hai jisse backend bnta hai 

// //ryan dahl , isne socha js se backend bnna chahiye ###

// //mehnt krne ke baad, google chrome V8 engine bnata hai , opensource kr deta hai and ryan dahl do all the operations 

// // fir usne socha ki hmein toh js mein code krna hai  , kyunki chrome v8 engine bna hai c++ mein .

// //hm js ka code likhenge jo ki wrapper layer of js receinve kregea and voh code v8 engine ke c++ modules ke sath ek server create krega

// //yeh poora layer and uske andr v8 is called NODE JS

// //===============nodejs is a js runtime environment===========================

// //NPM - may be package store .


// // 1. npm init

// //npm init -> package.json -> lekha jokha of our website

// //cjs mein hme "require" use krna pdta hai , and in ecma script module mein as a "module"

const fs = require('fs');

// // ================ write file=================
// //fs.writeFile(file, data[, options], callback)
// //callback mtlb FUNCTIONS

// // write file ek new file create krke deta hai 

fs.writeFile("hey.txt", "hey hellow kaise ho", function (err) {
    if (err) { console.error(err) }
    else { console.log("done with it") }
})


// //======= appendfile (existing file mein changes krta hai)===========
fs.appendFile("hey.txt", "mein toh acha hu", function (err) {
    if (err) { console.error(err) }
    else { console.log("done with it") }
})


// //==========rename (file ka name change krdega)============

// //fs.rename(oldpath,newpath,callback)

fs.rename("hey.txt","hello.txt",function(err){
    if (err) {console.error(err)}
    else{console.log("kaam hogya malik")}
})

//================copyFile=========

fs.copyFile('hello.txt','./copy/copy.txt',function(err){
    if (err){console.err(err)}
    else{console.log("copy hogya malik")}
})

//============unlink (file delte krna)======

fs.unlink("hello.txt",function(err){
    if (err){
        console.err(err)
    }
    else{
        console.log("dikkt aagyi")
    }
})


// ========== rmdir() ======khali folder delete krni ka option deta hai 

fs.rmdir('./copy',{recursive:true},function(err){ //we are using operations , recursive:true
    if (err) {console.error(err)}
    else{console.log("File Deleted ")}
})

// agr itna nahi krna , use fs.rm()