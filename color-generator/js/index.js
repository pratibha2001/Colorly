const getcolor =()=>{
    const randomNumber=Math.floor(Math.random()*16777215);
    const randomCode="#"+randomNumber.toString(16);
    console.log(randomNumber,randomCode);
    document.body.style.backgroundColor=randomCode;
    document.getElementById('color-code').innerText=randomCode;

    //to get the code  just by clicking 'click me'
    navigator.clipboard.writeText(randomCode);
}

document.getElementById('btn').addEventListener(
    "click",getcolor
)

getcolor();