console.log("Product");
// ~~~~~~~~~~~~~~~~~~~~Increment button------------------//
let plus= document.querySelector(".plus"),
    minus = document.querySelector(".minus")

    num = document.querySelector(".num");
   let a = 0;
   let SumTicket = 0 ;
   console.log(document.querySelector(".ProductName").textContent);
   let ProductName = document.querySelector(".ProductName").textContent;

   plus.addEventListener("click", ()=>{
        a++;
        a = (a < 10 ) ? "0" + a : a ;
        num.innerText = a ;
        console.log(a);
         SumTicket = a*100 ;
         console.log(document.getElementById("total")) ;
         let element1 =  document.getElementById("total") ;
         element1.innerText = SumTicket ;
         console.log(SumTicket);
   });

   minus.addEventListener("click", ()=>{
        a--;
        a = (a < 10 ) ? "0" + a : a ;

        if (a > 0 ){
            num.innerText = a ;
            console.log(a);
        }else {
                a=0;
        }

         SumTicket = a*100 ;
         console.log(document.getElementById("total")) ;
         let element1 =  document.getElementById("total") ;
         element1.innerText = SumTicket ;
         console.log(SumTicket);
   });

   // ---------------------- Updating the total ----------------------//
   SumTicket = a*100 ;

   console.log(document.getElementById("total")) ;
   let element1 =  document.getElementById("total") ;
   element1.innerText = SumTicket ;

    // ----------------------- Updating Ticket cart ----------------------//


    let cart = document.querySelector(".cart");
    cart.addEventListener("click", ()=> {
            console.log("adding to cart");

            let table1 = document.getElementById('cart');
            let row = document.createElement('tr');

            let cell1 = document.createElement('td');
            cell1.textContent = ProductName +" ";
            row.appendChild(cell1)

            let cell2 = document.createElement('td');
            cell2.textContent = "Number of Ticket " + a;
            row.appendChild(cell2)

            let cell3 = document.createElement('td');
            cell3.textContent = " Rs " + SumTicket;
            row.appendChild(cell3)

            let cell4 = document.createElement('td');
            cell4.textContent = document.createElement('button');

            table1.appendChild(row);
            a.toString();
            SumTicket.toString();

            //Saving on storage to retrieve it at cart.js file
            let buyArray = [ProductName, a, SumTicket];
            console.log(buyArray);
            localStorage.setItem('ProductNameKey', ProductName)
            localStorage.setItem('NumTicketKey', a)
            localStorage.setItem('SumTicketKey', SumTicket)
    });


//-----------------------Buy Now Button--------------------//
    let buyNow = document.querySelector(".buyNow");
    buyNow.addEventListener("click", ()=> {
            alert("Thank you!")
    });


//-----------------------Updating Cart----------------//

   console.log(ProductName);
   console.log(a);
   console.log(SumTicket);







//    let Product[
//            {id: 1, name: , numOfTicket: a ,sum: SumTicket },
//            {id: 2, name:}
//      ];
