function donate(id){
    console.log(id);
    const donateAmountValue = getInputFieldValueById(id);
    console.log(donateAmountValue);
    const donateAmount = parseFloat(donateAmountValue);
    
    if(!donateAmountValue || isNaN(donateAmountValue)){
        alert('Please Enter Valid amount');
    }
    else{
      document.getElementById('my_modal_3').showModal();
      const defaultAmountElement = document.getElementById('defaultAmount');
        const defaultAmount = parseFloat(defaultAmountElement.innerText);
        
        const newAmount = defaultAmount - donateAmount;

        defaultAmountElement.innerText = newAmount.toFixed(2);

        document.getElementById('my_modal_3').showModal();

        document.getElementById('donateAmount').value = ""; 
    }
}