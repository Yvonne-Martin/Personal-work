let ourName="Yvonne"
let myName="Leila"
let name="my name is "+myName+" and I am well."
console.log(name);
//
let str="worthwhile"
let newstr="Yvonne is "
let neww =str[str.length-1]
console.log(neww);
newstr+=str
console.log(newstr);
//
let nstr="leilamartin"
console.log(nstr.length);
//
function strlength(str1){
return str1.length
}
let str1="yvonne"
console.log(strlength(str1));
//
function words(wrd1,wrd2,wrd3,wrd4,wrd5,wrd6,wrd7){
    var result="The "+" "+ wrd1 +" "+ wrd2 +" "+ wrd5 +" "+ wrd4 +" "+ wrd7 +" "+ wrd3 +" "+ " "+wrd6;
    return result
}
console.log(words("brown","quick","lazy","jumped","fox","dog","over"));

//arrays
let x = [1,2,4,"Hello"]
x[3]=5;
console.log(x);

//
let y=[[1,2,3],["x","y","z"],["brown","red","yellow"]];
y[0][2]="the";
y[1][1]=9;
y[2][2]="blue";
console.log(y);

//
let str2="Extravaganza";
let str3=str2[6]+str2[7]+str2[8]+str2[9];
console.log(str3);

function extract(text){
    return text.slice(-4,)
}
let text="Extravaganza"
console.log(extract(text));

function conc(statement){
    let st =statement.slice(0,4)+" eat "+statement.slice(4,)
    return st
}
let statement="The quick fox jumped over the lazy dog "
console.log(conc(statement))

function insert(food){
    let new1= food.slice(0,13) +" good"+food.slice(13,)
    return new1;
}
let food ="I want to eat food"
console.log(insert(food));

function count(txts){
    let newcount=txts.match(/the/g).length
    return newcount
}
let txts = "The boy kicked the girl on the chest the other day"
console.log(count(txts));

function finding(wordz){
    let newwordz=(wordz.match(/g/g) || []).length
    return newwordz
}
let wordz="the girl wore a green gorgeous dress"
console.log(finding(wordz));

function findwords(found){
    let uniquewrd="are";
    return uniquewrd;
}
let found="how many are there";
console.log(findwords(found));

const names = [74,18,10,5,84,24,105];
names.sort(compareFunction);
console.log(names);

function compareFunction(a,b){;
//1. <0...a comes first
//2. 0...nothing will be changed
//3. >0...b comes first

return b-a;
}
//Remove Duplicates
function duplicates(list){
    return [...new Set(list)];
}
let list=[1,2,3,2,3,10,5,3,2,1,2,"php","javascript","python","php","java","php","ruby","python"]
console.log(duplicates(list));

//
// function search(wordy){
//     wordy.sort();
//     return wordy;
// }
// let wordy="sevink"
// console.log(search(wordy));

// FFinding the first index number in  array
// function finding(numbers){
// const firstEvenNumber=numbers.find(n=>{
//      n%2 ===0;
//      return n;
// });
// };

// console.log(finding(numbers));
  let sum = 0
function myArrays(nums){
    for(let i =0; i< nums.length; i++){
        sum += nums[i]
    }
    return sum
}
const nums = [1,2,3,4,5];
console.log(myArrays(nums));
//
function numgreater(numberz){

    for( i of numberz){
        if(i + i > 100){
            return true;

        }else{
            return false;
        }
    }


}

const numberz = [59,50]
console.log(numgreater(numberz));
//
function myNumbers(numbers){
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] +numbers[i] > 100){
            return true

        }
        else{
            return false
        }
    }
}

const numbers = [59,50]
console.log(myNumbers(numbers));

//
// function myVowels(vowels){
//     vowels.forEach(element => {
//        element=="a,e,i,o,u" {
//         return 
//        }
//     });
// }

//1
function extract(word){
    return word.slice(-4,)
}
let word="extravaganza";
console.log(extract(word));

//2.
function insert(food1){
    let statement = food1.slice(0,4)+"eat"+food1.slice(4,)
    return statement
}
let food1="the quick fox jumped over the lazy dog"
console.log(insert(food1));

//3.
function countString(sentence){
let nCount=sentence.match(/the/g).length
return nCount
}
let sentence="The quick brown fox jumped over the lazy dog"
console.log(countString(sentence));

//4.
function findWords(words1){
    let newWords=words1.indexOf("are")
    return newWords
}
let words1="The pupils are reading in the library"
console.log(findWords(words1));

//5.
function word4(tx){
let t=tx.split("").sort().join()
return t
}
const tx="sevink"
console.log(word4(tx));

//6.
function sum1(numz){
    numz.forEach(num => {
       
        console.log( num*2);
    })
    return numz
}
const numz = [1,2,3,4,5];


function mStr(arr){
    for(a of arr){
        if(a.split("")){
return a
        }
    }
}
let arr=["leila"]
console.log(mStr(arr));

function arraySorted(arr1,arr2){
result= [...arr1, ...arr2]
return result.sort((a,b)=>a-b)
}
let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9]
console.log(arraySorted(arr1,arr2));

function myString0(str){
    let a=str.split("").reverse().join("")
    return a
}
console.log(myString0("hello"));

function removeDuplicates(xx){
    var a=xx.split(' ');
    var x2=[];
    for (var i in a)
    if (x2.indexOf(a[i])==-1)x2.push(a[i])
    return x2.join(' ');
}
let xx="my man my man my man"
console.log(removeDuplicates(xx));

function removeDups(y2){
    let original=[...new Set(y2)].join('')
    return original
}
console.log(removeDups("my dad my dad my dad"));

function myInts(numbers1){
    let newValues=numbers1.sort()
    return newValues
}
let numbers1=[1,3,6,7,8,2,4]
console.log(myInts(numbers1));

function myList(numbers2){
    return [...new Set(numbers2)];
}
let numbers2=[2,2,3,5,3,6,7,7,8,4,4]
console.log(myList(numbers2));

function mySentence(word41){
let a=word41.split("").reverse().join('')
return a
}
let word41="i am a girl"
console.log(mySentence(word41));
//create a program that takes a base and exponent as input and calculates the exponential value
function calculateExponent(base,exponent){
    let f =base**exponent
    return f
}
console.log(calculateExponent(10,4));
//create a program 
function isAnagram(x,y){
   if (x.sort==y.sort){
       return "is anagram"
    }
   else{
        return "not anagram"
    }
    
}
console.log(isAnagram("silent","listen"));
//create a program that takes in a string as input and counts the number of vowels in it.
function myString(word){
    return word.match(/[aeiouAEIOU]/g).length;
}
console.log(myString("lEilamArtin"));

const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
  
  // Use map to calculate the average test score for each student
  const studentAverages = students.map(student => {
    const sum = student.scores.reduce((acc, score) => acc + score);
    return { name: student.name, average: sum / student.scores.length };
  });
  // Use filter to only select students with an average above 90
  const highPerformers = studentAverages.filter(student => student.average >= 85);
  console.log(highPerformers);

  const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];


  const productsByCategory = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
  
  // Use map to calculate the average price for each category
  const avgPriceByCategory = Object.keys(productsByCategory).map(category => {
    const sum = productsByCategory[category].reduce((acc, product) => acc + product.price, 0);
    return { category: category, average: sum / productsByCategory[category].length };
  });

  console.log(avgPriceByCategory);
  
  // Use filter to only select categories with an average above a certain threshold
  const highPricedCategories = avgPriceByCategory.filter(category => category.average > 50);
   

  //BOJECTS
  function array11(array){
   array.forEach(a=>{
        if(a>5);
    })
    return a
  }
  const array=["yvonne","leila","asha"]
  console.log(Array(array11(array)));

  //
  const studentz=[
    {name:"yvonne",class:"lovelace",scores:[58,90,87,]},
    {name:"yvonne",class:"lovelace",scores:[58,90,87,]},
    {name:"yvonne",class:"lovelace",scores:[58,90,87,]}  
  ]
  function averageScre(studentz){
  let sum = studentz.reduce((acc,curr)=>acc+curr)
    let average=sum/studentz.length
    return average; 
  }
  console.log(averageScre(studentz));



//CLASSES



class Following{
    constructor(user){
        this.user=user;
        this.listOfFollower=[]
    }
    addFollowers(follower){
        if(this.listOfFollower.includes(follower)){
            console.log("already exists");
        }
        else{
            this.listOfFollower.push(follower)
        }
    }
}
const yvonne=new Following("Yvonne");
yvonne.addFollowers("faith")
console.log(yvonne)




class ConveyorBelt {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem() {
        return this.items.shift();
    }
}
// Example usage:
const conveyorBelt = new ConveyorBelt();
conveyorBelt.addItem("Item1");
conveyorBelt.addItem("Item2");
console.log("Items on the conveyor belt:", conveyorBelt.items);
const removedItem = conveyorBelt.removeItem();
console.log("Removed item:", removedItem);
console.log("Updated items on the conveyor belt:", conveyorBelt.items);



class Inventory {
    constructor(){
        this.listOfProducts=[]
    }
    addProducts(product,quantity){
        const item = {product:product,quantity:quantity};
        return this.listOfProducts.push(item);
    }
    removeProduct(){
        this.listOfProducts.shift()
    }
    updateProducts(product,UpdatedItem){
        
    }
}
const rice = new Inventory("rice")
rice.addProducts("rice","45.98kgs")
rice.addProducts("Unga", "67.90kgs")
rice.addProducts("Blueband","67.0kgs")
rice.addProducts("rice","89kgs")
rice.removeProduct()
console.log(rice);

class StudentGrade{
    constructor(){
        this.listOfStudents=[]
    }
    addStudents(studentName,subjects,scores){
        const studentDetails={studentName:studentName,subjects:subjects,scores:scores}
        this.listOfStudents.push(studentDetails)
    }
}

class Taskmanager {
    constructor() {
        this.listoftasks = [];
    }
    addtask(name, description, deadline, priority) {
        let id = this.listoftasks.length + 1;
        const newtask = {
            name: name,
            description: description,
            deadline: deadline,
            priority: priority,
            id: id,
            category: "To-do"
        };
        this.listoftasks.push(newtask);
        return "Task successfully added";
    }                     
    edittask(id, taskdetails = {}) {
        let found = false;
        this.listoftasks.forEach(task => {
            if (task.id === id) {
                found = true;
                Object.keys(taskdetails).forEach(key => {
                    task[key] = taskdetails[key];
                });
            }
        });
        if (found) {
            return "Task successfully updated";
        } else {
            return "Task not found";
        }
    }
    setReminder(id, reminderDate) {
        const task = this.listoftasks.find(task => task.id === id);
        if (task) {
            task.reminder = reminderDate;
            return "Reminder set successfully";
        } else {
            return "Task not found";
        }
    }
}
// Example usage
const taskManager = new Taskmanager();
console.log(taskManager.addtask("Task 1", "Description 1", "2024-05-10", "High")); // Output: Task successfully added
console.log(taskManager.addtask("Task 2", "Description 2", "2024-05-15", "Medium")); // Output: Task successfully added
console.log(taskManager.listoftasks); // Output: [{name: "Task 1", description: "Description 1", deadline: "2024-05-10", priority: "High", id: 1, category: "To-do"}, {name: "Task 2", description: "Description 2", deadline: "2024-05-15", priority: "Medium", id: 2, category: "To-do"}]
console.log(taskManager.setReminder(1, "2024-05-08")); // Output: Reminder set successfully
console.log(taskManager.listoftasks); // Output: [{name: "Task 1", description: "Description 1", deadline: "2024-05-10", priority: "High", id: 1, category: "To-do", reminder: "2024-05-08"}, {name: "Task 2", description: "Description 2", deadline: "2024-05-15", priority: "Medium", id: 2, category: "To-do"}]
