
function countWords() {
    // Get the input text from the textarea and split the text into an array of words

    var words = document.getElementById("inputText").textContent.trim().split(/\s+/);
    console.log(words);

   //Filter out empty strings
    words = words.filter(function(word) {
        return word.length > 0;
    });

    var longestWord = findLongestWord(words);
    console.log(longestWord);
    var wordCountElement = document.getElementById("wordCount");
    wordCountElement.innerHTML = "Words Count: " + words.length;
     
    // Highlight the longest word
    const regex = new RegExp(longestWord,'g');
    const highlighted = document.getElementById("inputText").textContent.replace(regex, `<span id="longestWord"> ${regex} </span>`);
    inputText.innerHTML = highlighted;

}
  function findLongestWord(words) {
    var longestWord = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) 
            longestWord = words[i];
    }
    return longestWord;
}
   
