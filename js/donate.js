function donate(id) {
    const donateAmountValue = getInputFieldValueById(id);
    const donateAmount = parseFloat(donateAmountValue);
  
    if (!donateAmountValue || isNaN(donateAmount) || donateAmount <= 0) {
      alert('Please Enter a Valid Amount');
    } else {
      document.getElementById('my_modal_3').showModal();
      const defaultAmountElement = document.getElementById('defaultAmount');
      const defaultAmount = parseFloat(defaultAmountElement.innerText);
  
      const newAmount = defaultAmount - donateAmount;
      defaultAmountElement.innerText = newAmount.toFixed(2);
  
      document.getElementById(id).value = ""; 
  
      // Add to history section

      const donatePlaceName = donatePlace(id);
      const historyContainer = document.getElementById('history-container');
      const p = document.createElement('p');
      
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      const formattedTime = currentDate.toLocaleTimeString('en-BD', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      
      p.innerText = `Donated: ${donateAmount.toFixed(2)} BDT at ${donatePlaceName} on ${formattedDate} at ${formattedTime}`;
      historyContainer.appendChild(p);
      
      // Show history section if hidden
      const historyBody = document.getElementById('history-body');
      if (historyBody.classList.contains('hidden')) {
        historyBody.classList.remove('hidden');
      }
      
    }
  }
  