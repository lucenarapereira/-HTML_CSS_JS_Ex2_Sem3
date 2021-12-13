function Calculator(button){
  const value1 = parseInt(document.getElementById('value1').value);
  const value2 = parseInt(document.getElementById('value2').value);
  var signal = button.value;

  if(!(isNaN(value1)||isNaN(value2))){
    var calc = eval(`${value1}${signal}${value2}`);
    var total = document.getElementById('result');
    total.value = `${calc}`;
  }else{
    alert('Informe números inteiros');
  };
}; 