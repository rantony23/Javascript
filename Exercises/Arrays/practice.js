//1) get a new array of just delivered orders
//2) get a new array of the total of those orders
//3) get the total of the delivered orders

const orders = [
  { customer: "Ana", total: 75, delivered: true },
  { customer: "Luis", total: 120, delivered: false },
  { customer: "Sofía", total: 250, delivered: true },
  { customer: "Carlos", total: 300, delivered: true },
  { customer: "Elena", total: 45, delivered: false }
];

const totalDeliveredOrders = orders.filter( order => order.delivered);
console.log(totalDeliveredOrders);

const total = totalDeliveredOrders.map( order => order.total);
const revenue = total.reduce((acc, elem) =>{
  return acc + elem;
},0);
console.log(total);
console.log(revenue);

//1)Use .reduce() to return an object that counts how many times each word appears.

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const newObject = words.reduce((acc,elem) =>{
  if (acc[elem]){
    acc[elem]++;
  }else{
    acc[elem]=1;
  }
  return acc;
},{});

console.log(newObject);
//creating a single flattened array
const nestedArrays = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = nestedArrays.reduce((acc,elem)=>{
  return acc.concat(elem);
},[]);

console.log(flattenedArray);

const colors = ['red', 'blue', 'red', 'green','blue','blue'];

const ocurrency = colors.reduce((acc,elem)=>{
  if(acc[elem]){
    acc[elem]++;
  }else{
    acc[elem]=1;
  }
  return acc;
},{});
console.log(ocurrency);