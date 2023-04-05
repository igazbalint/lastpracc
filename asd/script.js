let newarray = [
    {name: 'iphone',price: 1000},
    {name: 'macbook air', price: 999},
    {name: 'macbook pro', price: 1500},
    {name: 'ipad mini', price: 800},
    {name: 'ipad 9', price: 500},
    {name: 'ipad pro', price: 1200},
    {name: 'airpod', price: 200}
]

//filter
let filtereditems = newarray.filter((item)=>{
    return item.price >= 1000
})
//map
const  itemnames = newarray.map((item)=>{
    return item.name
})
//find
const founditems = newarray.find((item)=>{
    return item.name == 'iphone'
})
//foreach
newarray.forEach( item => console.log(item.price))
//some
const hasCheapItems = newarray.some((item) =>{
    return item.price < 500})

console.log(filtereditems)
console.log(itemnames)
console.log(founditems)
console.log(hasCheapItems)