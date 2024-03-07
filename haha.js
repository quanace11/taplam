
let boxElement=document.querySelector('.product');
console.log(boxElement.innerHTML);
boxElement.classList.add('red','blue');
console.log(boxElement.classList.value);
console.log(boxElement.classList.contains('red'));
// setTimeout(()=>{
//     boxElement.classList.remove('red');

// },3000);
// setInterval() lap di lap lai 1 doan ma voi do tre naht dinh
setInterval(()=>{
    boxElement.classList.toggle('red');
},1000);
var inputElement=document.querySelector('input[type="text"]');
inputElement.onkeydown=function(e)
{
    console.log(e.target.value);
}
var inputElements=document.querySelector('select');
inputElements.onchange=function(e)
{
    console.log(e.target.value);
}

//oninput lay value truc tiep  khi go 
let boxElementz=document.querySelectorAll('h3');
// console.log(boxElementz);
// for(var i=0;i<boxElementz.length;i++)
// {
//     boxElementz[i].onclick=function(e){
//         console.log(e.target);
//     }
// }

var aElement=document.links;
for(var i=0;i<aElement.length;++i){
    aElement[i].onclick=function(e){
        if(!e.target.href.startsWith('https://fullstack.edu.vn/')){
console.log(e.target.href);

            e.preventDefault();
        } ;   
    }
}
var ulElement=document.querySelector('ul');
ulElement.onmousedown=function(e)
{
    e.preventDefault();
}
document.querySelector('ul').onclick=
function(e){
    console.log(e.target);
}
// var h3Element=document.querySelectorAll('h3');
// for(var a=0;a<h3Element.length;a++)
// {
//     h3Element[a].onclick=function(e){
//         e.stopPropagation();
//         console.log('h3');
//     }
// }
// var boxElements=document.querySelectorAll('.product');
// for(var a=0;a<boxElements.length;a++)
// {
//     boxElements[a].onclick=function(e){
//         console.log('div');
//     }
// }
var btn=document.getElementById('btn');
console.log(btn);
btn.onclick=function(){
    console.log('Viec 1');
    console.log('Viec 1');

    console.log('Viec 1');
    alert('sfa');
}
// lắng nghe 1 sự kiện và huỷ bỏ : addEventListener,removeEventListener
btn.addEventListener('click',function(e)
{
    console.log('Event 1');
});
Array.prototype.filter2 =function(callback)
{
    var output=[];
    for(var index in this)
    {
        if (this.hasOwnProperty(index))
        {
           var result= callback(this[index],index,this);
           if(result)
           {
                output.push(this[index]);
           }
        }
    }
    return output;
}

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); Output: [1, 3]