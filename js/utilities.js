function getInputFieldValueById(id){
   const inputValue = document.getElementById(id).value;
   return inputValue;
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    return textValue;
}

// donate place
function donatePlace(id){
    const getDonatePlace = document.getElementById(id).innerText;
    return getDonatePlace;
}
// show section
function showSection(id){
document.getElementById('donation-body').classList.remove('hidden');
document.getElementById('history-body').classList.add('hidden');

}
function showTheSection(id){
document.getElementById('donation-body').classList.add('hidden');
document.getElementById('history-body').classList.remove('hidden');

}