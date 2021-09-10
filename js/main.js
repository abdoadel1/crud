var nameInput = document.getElementById('productName');
var categoryInput = document.getElementById('productCategory');
var priceInput = document.getElementById('productPrice');
var descriptionInput = document.getElementById('productDescription');
var tBody = document.getElementById('tbody');
var searchInput = document.getElementById('search');
var mainBtn = document.getElementById('mainBtn');
var updateBtn = document.getElementById('updateBtn');
// our local storage start
var productList =[];
if(localStorage.getItem('oldProduct') !=null){
  productList = JSON.parse(localStorage.getItem('oldProduct'));
  displayProduct();
}
// our local storage end

// adding function
function addProduct(){
  var newPrice = Number(priceInput.value);
  var singleProduct = {
    name:nameInput.value,
    category:categoryInput.value,
    price:newPrice,
    description:descriptionInput.value,
  }
  productList.push(singleProduct);
  displayProduct();
  clearForm();
  localStorage.setItem('oldProduct', JSON.stringify(productList));
}
// clear function
function clearForm(){
  nameInput.value = "",
  categoryInput.value = "",
  priceInput.value = "",
  descriptionInput.value = ""
}
// display function
function displayProduct(){
  var str ="";
  
  for (i=0;i<productList.length;i++){
    str +=`<tr id="${i}">
    <td>${i}</td>
    <td>${productList[i].name}</td>
    <td>${productList[i].category}</td>
    <td>${productList[i].price}</td>
    <td>${productList[i].description}</td>
    <td>
      <button class="btn btn-warning" onclick="updateProduct(${i});">

        <i class="fas fa-edit"></i>


      </button>
    </td>
    <td>
      <button class="btn btn-danger" onclick="deleteProduct(${i});">
        <i class="fas fa-trash"></i>
      </button>
    </td>
</tr>`
  }
  tBody.innerHTML = str;
}
// delete fuction start
function deleteProduct(productIndex){
  productList.splice(productIndex,1);
  localStorage.setItem('oldProduct', JSON.stringify(productList));
  displayProduct()

}
// search function
function searchProduct(searchWord){
  var str ="";
  for(i=0;i<productList.length;i++){
    if(productList[i].name.toLowerCase().includes(searchWord.toLowerCase())){
      str +=`<tr>
    <td>${i}</td>
    <td>${productList[i].name}</td>
    <td>${productList[i].category}</td>
    <td>${productList[i].price}</td>
    <td>${productList[i].description}</td>
    <td>
      <button class="btn btn-warning" onclick="updateProduct(${i});">

        <i class="fas fa-edit"></i>


      </button>
    </td>
    <td>
      <button class="btn btn-danger" onclick="deleteProduct(${i});">
        <i class="fas fa-trash"></i>
      </button>
    </td>
</tr>`
    }
  }
  tBody.innerHTML = str;
}

// update function start
updateBtn.style.display = "none" ;
function updateProduct(index){
  nameInput.value = productList[index].name;
  categoryInput.value = productList[index].category;
  priceInput.value = productList[index].price;
  descriptionInput.value = productList[index].description;
  mainBtn.style.display = "none";
  document.getElementById(index).style.display="none";
  updateBtn.style.display = "inline-block" ;
  localStorage.setItem("updateIndex",index);
}
function update(){
  var newPrice = Number(priceInput.value);
  var index = localStorage.getItem("updateIndex");
  productList[index].name=nameInput.value;
  productList[index].category=categoryInput.value;
  productList[index].price=newPrice;
  productList[index].description=descriptionInput.value;
  document.getElementById(index).style.display="block";
  displayProduct();
  clearForm();
  localStorage.setItem('oldProduct', JSON.stringify(productList));
  updateBtn.style.display = "none";
  mainBtn.style.display = "inline-block";
}






























// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}













// if(localStorage.getItem('savedProducts') != null){
//   productList = JSON.parse(localStorage.getItem('savedProducts'));
//   displayProduct();
// }else{
//   productList =[];
// }





// var productList = [];

// function addProduct() {
//     var newPrice = Number(priceInput.value);
//     var singleProduct = {
//         productName: nameInput.value,
//         productCategory:CategoryInput.value,
//         productPrice:newPrice,
//         productDescription:DescriptionInput.value,
//     }
    
//     productList.push(singleProduct);
//     displayProducts();
//     console.log(productList);
// }
// function displayProducts(){
//     var str = "";
//     for(i=0;i<productList.length;i++){
//         str+=`     

      //<tr>
//         <td>${i+1}</td>
//         <td>${productList[i].productName}</td>
//         <td>${productList[i].productCategory}</td>
//         <td>${productList[i].productPrice}</td>
//         <td>${productList[i].productDescription}</td>
//         <td>
//           <button class="btn btn-warning">
    
//             <i class="fas fa-edit"></i>
    
    
//           </button>
//         </td>
//         <td>
//           <button class="btn btn-danger">
//             <i class="fas fa-trash"></i>
//           </button>
//         </td>
//         </tr>
//         <tr>
         
//         </tr>`
    
//     }
//     document.getElementById('tbody').innerHTML= str;
    
// }