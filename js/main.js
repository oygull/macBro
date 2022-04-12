let arr = [
  {
    id:1,
    title: 'MacBook Air 13-inch',
    color: 'gold',
    ram: {
     GB8:[{
       memory:'256GB',
       price: 12497000
     },
     {
      memory:'512GB',
      price: 15066000
    }],
     GB16: [{
      memory:'256GB',
      price: 16935000
    },
    {
     memory:'512GB',
     price: 19270500
   },
   {
    memory:'1TB',
    price: 20438500
  }]
    },
    imgs: ['images/mac-pink.webp','images/mac-pink2.webp','images/mac-pink3.webp','images/mac-pink4.webp','images/mac-pink5.webp']
  },
  {
    id:2,
    title: 'MacBook Air 13-inch',
    color: 'silver',
    ram: {
     GB8:[{
       memory:'256GB',
       price: 12497000
     },
     {
      memory:'512GB',
      price: 15066000
    }],
     GB16: [{
      memory:'256GB',
      price: 16935000
    },
    {
     memory:'512GB',
     price: 19270500
   },
   {
    memory:'1TB',
    price: 21606500
  }]
    },
    imgs: ['images/mac-silver.webp','images/mac-silver2.webp','images/mac-silver3.webp','images/mac-silver4.webp','images/mac-silver5.webp']
  },
  {
    id:3,
    title: 'MacBook Air 13-inch',
    color: 'space grey',
    ram: {
     GB8:[{
       memory:'256GB',
       price: 12497000
     },
     {
      memory:'512GB',
      price: 15066000
    }],
     GB16: [{
      memory:'256GB',
      price: 16935000
    },
    {
     memory:'512GB',
     price: 19270500
   },
   {
    memory:'1TB',
    price: 21606500
  }]
    },
    imgs: ['images/mac-grey.webp','images/mac-grey2.webp','images/mac-grey3.webp','images/mac-grey4.webp','images/mac-grey5.webp']
  }
]

let btn8GB = document.getElementById('btn8GB');
let btn16GB = document.getElementById('btn16GB');
let btn256GB = document.getElementById('btn256GB');
let btn512GB = document.getElementById('btn512GB');
let btn1TB = document.getElementById('btn1TB');
let imgSlider = document.getElementById('imgSlider');
let gold = document.getElementById('gold');
let silver = document.getElementById('silver');
let spaceGrey = document.getElementById('spaceGrey');
let price = document.getElementById('price');
let newArr = arr[0].imgs;
let newArr2 = arr[1].imgs;
let newArr3 = arr[2].imgs;
let title = document.getElementById('title')
let nameType= 'Gold';
let memory = 256;
btn1TB.style.display='none';

btn8GB.addEventListener('click', ()=>{
  btn16GB.classList.remove('active-btn');
  btn8GB.classList.add('active-btn');
  title.innerHTML = `Mac Book Air 13-inch M1/8/${memory} ${nameType}`
  btn1TB.style.display='none';
  price.innerHTML= 12497000
})
btn16GB.addEventListener('click', ()=>{
  btn1TB.style.display='block';
  title.innerHTML = `Mac Book Air 13-inch M1/16/${memory} ${nameType}`
  btn8GB.classList.remove('active-btn');
  btn16GB.classList.add('active-btn');
  price.innerHTML= 15066000
}) 
btn256GB.addEventListener('click', ()=>{
  memory = 256;
  btn1TB.classList.remove('active-btn');
  btn512GB.classList.remove('active-btn');
  btn256GB.classList.add('active-btn');
  title.innerHTML = `Mac Book Air 13-inch M1/16/${memory} ${nameType}`
  price.innerHTML= 16935000
})
btn512GB.addEventListener('click', ()=>{
  memory = 512;
  btn1TB.classList.remove('active-btn');
  btn256GB.classList.remove('active-btn');
  btn512GB.classList.add('active-btn');
  title.innerHTML = `Mac Book Air 13-inch M1/16/${memory} ${nameType}`
  price.innerHTML= 19270500
})
btn1TB.addEventListener('click', ()=>{
  memory = '1TB';
  btn256GB.classList.remove('active-btn');
  btn512GB.classList.remove('active-btn');
  btn1TB.classList.add('active-btn');
  title.innerHTML = `Mac Book Air 13-inch M1/16/${memory} ${nameType}`
  price.innerHTML= 20438500
})


gold.addEventListener('click', ()=>{
  spaceGrey.classList.remove('active-btn');
  silver.classList.remove('active-btn');
  gold.classList.add('active-btn');
  nameType= 'Gold';
  imgSlider.innerHTML='';
  showProducts(imgSlider,newArr)
  title.innerHTML = `Mac Book Air 13-inch M1/16/512 ${nameType}`
})
silver.addEventListener('click', ()=>{
  spaceGrey.classList.remove('active-btn');
  gold.classList.remove('active-btn');
  silver.classList.add('active-btn');
  nameType= 'Silver';
  imgSlider.innerHTML='';
  showProducts(imgSlider,newArr2)

title.innerHTML = `Mac Book Air 13-inch M1/16/512 ${nameType}`
})
spaceGrey.addEventListener('click', ()=>{
  gold.classList.remove('active-btn');
  silver.classList.remove('active-btn');
  spaceGrey.classList.add('active-btn');
  nameType= 'Space Grey';
  imgSlider.innerHTML='';
  showProducts(imgSlider,newArr3)

title.innerHTML = `Mac Book Air 13-inch M1/16/512 ${nameType}`
})
console.log(newArr);


function showProducts(list,arr){
  arr.forEach(element => {
      let li = document.createElement('li');
      li.innerHTML = `<img src="${element}" alt="mac">`;
      list.appendChild(li)
  });
}
showProducts(imgSlider,newArr);


let countInput = document.getElementById('quantityInput');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let sum = price.innerHTML;
let c =2;

plus.addEventListener('click',()=>{
  countInput.value++;
  let a = sum*c;
  console.log(a);
  price.innerHTML= `${a} so'm`
  c++;
})

minus.addEventListener('click',()=>{
  countInput.value--;
  let a = sum/c;
 price.innerHTML= `${a} so'm`
 c++;
})