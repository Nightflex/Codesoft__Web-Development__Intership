function appendValue(value) {
    const resultInput = document.getElementById('result');
    resultInput.value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function deleteLast() {
    const resultInput = document.getElementById('result');
    resultInput.value = resultInput.value.slice(0, -1);
  }
  
  function calculateResult() {
    const resultInput = document.getElementById('result');
    try {
      resultInput.value = eval(resultInput.value);
    } catch (error) {
      resultInput.value = 'Error';
    }
  }