const kazkokszodis = document.querySelector("input");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", countVowel);

function countVowel() {
    let vowelCount = 0;
    let wordVal = kazkokszodis.value.toLowerCase();

    for (let i = 0; i < wordVal.length; i++) {
        const letter = wordVal[i];
        if (letter.match(/[aeiou]/)) { 
            vowelCount++;
        }
    }

    result.innerHTML = `${kazkokszodis.value.toUpperCase()} has ${vowelCount} vowels`;
}
