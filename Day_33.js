//random color generator

function randomColorGenerator(){
return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;


}

console.log(randomColorGenerator())
