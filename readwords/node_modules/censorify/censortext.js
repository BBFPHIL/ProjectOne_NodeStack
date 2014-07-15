//Censoring words of a text file node.js module

//Default list of node.s
var censoredWords = ["sad", "mad", "bad"];

//Global array of censored words
var customCensoredWords = [];

function censor(inStr){
    for (idx in censoredWords){
        inStr = inStr.replace(censoredWords[idx], "*****");
    }
    for (idx in customCensoredWords){
        inStr = inStr.replace(customCensoredWords[idx], "*****");
    }
    return inStr;
}

function addCensoredWord(word){
    customCensoredWords.push(word);
}

function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;