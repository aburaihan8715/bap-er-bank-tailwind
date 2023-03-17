// get input element value by id
const getInputValue=(inputId)=>{
  const inputElement=document.getElementById(inputId);
  const inputValue=parseFloat(inputElement.value);
  return inputValue;
}
// set text element content by id
const getTextElementContent=(inputId)=>{
  const textElement=document.getElementById(inputId);
  const textContent=parseFloat(textElement.innerText);
  return textContent;
}
// set text element content by id
const setTextElementContent=(id, content)=>{
  let textElement = document.getElementById(id);
  textElement.innerText = content;
}
// reset input value
const resetInputValue=(inputId)=>{
  let inputElement=document.getElementById(inputId);
  inputElement.value="";
}
// ==================end====================

