// let promise=new Promise((resolve,reject)=>{
//     resolve("success");
// })
// promise.then((res)=>{
//     console.log("this is success state")
//     console.log(res);
// }).catch(res=>{
//     console.log(res);
// })
function sum(val){
    return new Promise((resolve,reject)=>{
        resolve(val+10);
    })

    
}
//console.log(sum(10));
function sub(val){
    return new Promise((resolve,reject)=>{
        resolve(val-5);
    })

    
}
function mul(val){
    return new Promise((resolve,reject)=>{
        resolve(val*10);
    })

    
}
function div(val){
    return new Promise((resolve,reject)=>{
        resolve(val/2);
    })

    
}
//promise chaining
// sum(10).then(sumres=>{
//     console.log(sumres);
//     sub(sumres).then((subres)=>{
//         console.log(subres);
//         mul(subres).then((mulres)=>{
//             console.log(mulres);
//             div(mulres).then((divres)=>{
//                 console.log(divres);
//                 console.log("this is promise chaining")
//             })
//         })

//     })
// })

// let promise1=new Promise((res,rej)=>{
//     console.log("this is promise-1")
//     setTimeout(()=>{
//         res("success-1")
//     },1500);
// })
// let promise2=new Promise((res,rej)=>{
//     console.log("this is promise-2")
//     setTimeout(()=>{
//         res("success-2")
//     },1000);
// })
// let promise3=new Promise((res,rej)=>{
//     console.log("this is promise-3")
//     setTimeout(()=>{
//         res("success-3")
//     },3000);
// })

// promise1.then(res=>{
//     console.log(res)
// }).then(promise2.then(res=>{console.log(res)}))
// promise2.then(res=>{
//     console.log(res)
// })
// promise3.then(res=>{
//     console.log(res)
// })
function promise1(){
    return new Promise((res,rej)=>{
        console.log("this is promise-1");
        setTimeout(()=>{
            res("success-1");
        },1500)
    })
}

function promise2(){
    return new Promise((res,rej)=>{
        console.log("this is promise-2");
        setTimeout(()=>{
            res("success-2");
        },1000)
    })
}
function promise3(){
    return new Promise((res,rej)=>{
        console.log("this is promise-3");
        setTimeout(()=>{
            res("success-3");
        },3000)
    })
}

promise1().then((res)=>{
    console.log(res)
    return promise2();
}).then((res)=>{
    console.log(res)
    return promise3();
}).then((res)=>{
    console.log(res);
    
})
