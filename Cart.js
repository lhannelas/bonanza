console.log("cart");

    let checkOut = document.querySelector("#checkOut");
    checkOut.addEventListener("click", ()=> {
        console.log("Proceeding to payment");
        let Proceed = confirm("Proceed to Payment");
        if (Proceed === true){
            alert("Thank you ");
        }
        });

        let ProductName = localStorage.getItem('ProductNameKey');
        console.log(ProductName);
        let NumTicket = localStorage.getItem('NumTicketKey');
        let SumTicket = localStorage.getItem('SumTicketKey');
        NumTicket = Number(NumTicket);
        SumTicket = Number(SumTicket);

        let table = document.querySelector('sampleTable');
        let row = document.createElement('tr');

        let ticketItem = document.createElement('td');
         ticketItem.textContent = ProductName;
        row.appendChild(ticketItem);
        console.log(ticketItem);

        let quantity = document.createElement('td');
         quantity.textContent = NumTicket;

        row.appendChild(quantity);
        console.log(quantity)

        let price = document.createElement('td');
         price.textContent = SumTicket;
        row.appendChild(price);
        console.log(price)

        table.appendChild(row);

        let rowLength = document.getElementById('sampleTable').rows.length;


        //UpdatingSummary
         console.log(document.getElementById("NumItems")) ;
                let NumItems =  document.getElementById("NumItems") ;
                NumItems.innerText = rowLength ;

         console.log(document.getElementById("TotalCart")) ;
                let TotalCart =  document.getElementById("TotalCart") ;
                TotalCart.innerText = rowLength ;






// check table.appendChild(row)
//        table.appendChild(row);
//
//        console.log(table);
