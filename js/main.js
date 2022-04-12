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
let imgSlider = document.getElementById('imgSlider');
let gold = document.getElementById('gold');
let silver = document.getElementById('silver');
let spaceGrey = document.getElementById('spaceGrey');

let newArr = arr[0].imgs;
let newArr2 = arr[1].imgs;
let newArr3 = arr[2].imgs;
let title = document.getElementById('title')
let nameType= 'Gold';



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
showProducts(imgSlider,newArr)