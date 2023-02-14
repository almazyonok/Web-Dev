function ucFirst(text) {
  return text.substr(0, 1).toUpperCase() + text.substr(1, text.length)
}

function checkSpam(text) {
  let loweCaseText = text.toLowerCase()
  return loweCaseText.includes('viagra') || lowerStr.includes('xxx');
}

function truncate(str, maxlength) {
  return (str.length > maxlength) ? str.substr(0, maxlength - 1) + '…' : str;
}

function extractCurrencyValue(str) {
  return +str.substr(1, str.length - 1);
}