//Item 1 Increment
const incrementItemBtn1 = document.getElementById("incrementItem1");
incrementItemBtn1.addEventListener("click", function(){
   itemIncrementor("itemCount1" , "itemPrice1");
});
//Item 2 Increment
const incrementItemBtn2 = document.getElementById("incrementItem2");
incrementItemBtn2.addEventListener("click", function(){
   itemIncrementor("itemCount2" , "itemPrice2");
});
// Item 1 Decrement
const decrementItemBtn1 = document.getElementById("decrementItem1");
decrementItemBtn1.addEventListener("click", function(){
   itemDecrementor( "itemCount1" , "itemPrice1");
})
// Item 2 Decrement
const decrementItemBtn2 = document.getElementById("decrementItem2");
decrementItemBtn2.addEventListener("click", function(){
   itemDecrementor( "itemCount2" , "itemPrice2")
})
// Item 1 Delete
const itemDeleteBtn1 = document.getElementById("removeItem1");
itemDeleteBtn1.addEventListener("click", function(){
   RemoveItemFromCart("item1", "itemPrice1")
})
// Item 2 Delete
const itemDeleteBtn2 = document.getElementById("removeItem2");
itemDeleteBtn2.addEventListener("click", function(){
   RemoveItemFromCart("item2", "itemPrice2")
})


//Checkout 
const checkOutBtn = document.getElementById('checkoutbtn')
var itemsWrapper = document.getElementById('itemswrapper');
checkOutBtn.addEventListener("click", function(){
   itemsWrapper.innerHTML = '<img class="w-100" src="https://ema-john.firebaseapp.com/static/media/giphy.e800c846.gif">';
})

// Functionality for Item Increment
function itemIncrementor(itemCountId, itemPriceId ){
   const itemCount = document.getElementById(itemCountId).value;
   const newItemCount = parseFloat(itemCount) + 1;

   document.getElementById(itemCountId).value = newItemCount;

   const itemPrice = document.getElementById(itemPriceId).innerText;
   const itemPriceAmount = parseFloat(itemPrice);

   //Containing Original Product price Every time even after changing on dom
   const itemOriginalPrice = itemPriceAmount / itemCount;

   const incrementedPrice =  itemOriginalPrice * newItemCount;
   document.getElementById(itemPriceId).innerText = incrementedPrice;
   updateTotal();

}

// Functionality for Item Decrement
function itemDecrementor(itemCountId, itemPriceId ){
   const itemCount = document.getElementById(itemCountId).value;
   const newItemCount = parseFloat(itemCount) - 1;
   const itemPrice = document.getElementById(itemPriceId).innerText;
   var itemPriceAmount = parseFloat(itemPrice);
   
   //Containing Original Product price Every time even after changing on dom
   const itemOriginalPrice = itemPriceAmount / itemCount;

   //Hiding Product on 0 
   if(newItemCount <= 1){
      document.getElementById(itemCountId).value= 1;
      document.getElementById(itemPriceId).innerText = itemOriginalPrice;
   }else{

      document.getElementById(itemCountId).value = newItemCount;

      const decrementedPrice =  itemOriginalPrice * newItemCount;
         document.getElementById(itemPriceId).innerText = decrementedPrice;
         updateTotal();
      }

}

// Functionality for Item Remove
function RemoveItemFromCart(itemId, ItemPriceId){
   document.getElementById(itemId).style.display= "none";
   document.getElementById(ItemPriceId).innerText = 0;
   updateTotal();
}

function updateTotal(){
   const priceOfItem1 = document.getElementById("itemPrice1").innerText;
   const priceOfItem2 = document.getElementById("itemPrice2").innerText;
   const getSubTotal = parseFloat(priceOfItem1) + parseFloat(priceOfItem2);
   document.getElementById('subtotal').innerText = getSubTotal;
   // Adding 5% tax with price Amount
   const tax = getSubTotal * 5 / 100 ;
   document.getElementById('tax').innerText =  tax;
   document.getElementById('total').innerText = getSubTotal + tax;

   if(getSubTotal < 1){
      checkOutBtn.style.display ="none";
   }

}

//Setting Total and Subtotal on first load
updateTotal();