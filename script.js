// Select DOM elements
const inputText = document.getElementById('inputText');
const encodeButton = document.getElementById('encodeButton');
const decodeButton = document.getElementById('decodeButton');
const outputText = document.getElementById('outputText');

// Encode Button Click Event
encodeButton.addEventListener('click', () => {
  const text = inputText.value;
  if (text.trim() === '') {
    alert('Please enter some text to encode.');
    return;
  }
  try {
    const encodedText = encodeURIComponent(text);
    outputText.value = encodedText;
  } catch (error) {
    outputText.value = 'Error encoding text.';
  }
});

// Decode Button Click Event
decodeButton.addEventListener('click', () => {
  const text = inputText.value;
  if (text.trim() === '') {
    alert('Please enter some text to decode.');
    return;
  }
  try {
    const decodedText = decodeURIComponent(text);
    outputText.value = decodedText;
  } catch (error) {
    outputText.value = 'Error decoding text.';
  }
});
