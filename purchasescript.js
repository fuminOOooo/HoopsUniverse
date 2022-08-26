const purchase = document.getElementById("myForm")

function submitForm(e){
    const purchases = new FormData(purchase)
    
    const name = purchases.get('customerName')
    const phone = purchases.get('customerPhone')
    const email = purchases.get('customerEmail')
    const gender = purchases.get('customerGender')
    const age = purchases.get('customerAge')
    const district = purchases.get('customerDistrict')
    const address = purchases.get('customerAddress')
    const postal = purchases.get('customerPostal')
    const notes = purchases.get('customerNotes')
    let error = []
    if(!name){
        error.push("Please fill out the customer name\n")
    }
    if(name.length < 3){
        error.push("Customer Name must at least have 3 words\n")
    }
    if(phone.length != 10 ){
        error.push('Phone number must be 10 digits\n')
    }
    if(!email){
        error.push("Please insert your email\n")
    }
    if(!email.endsWith("@gmail.com")){
        error.push("The email domain you entered is not available or not associated with gmail.\n")
    }
    if(age < 1 ||age > 100 ){
        error.push("Age is not a valid age for this purchase\n")
        
    }
    if(error.length > 0){
        alert(error.join(""));
        e.preventDefault();
    }
    else{
        alert("Purchase Successful")
    }
}
    
    purchase.addEventListener('submit',submitForm)

