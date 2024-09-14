const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1)

}
console.log(capitalize("cam"))

const reverseString = (str) => {
    let newStr = ""

    for (let i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    return newStr
}

console.log(reverseString("Khoane"))

const calculator = {
    add: function (a, b) {
        return a + b
    },

    subtract: function (a, b) {
        return a - b
    },

    multiply: function (a, b) {
        return a * b
    },

    divide: function (a, b) {
        if (b === 0) {
            throw new Error("Can't divide a number to 0")
        }
        return a / b
    }
}


function ceasarCypher(str, shift) {
    return str.split('').map(char => {
        if (char >= "A" && char <= "Z") {
            return String.fromCharCode((char.charCodeAt(0) - 65 + shift + 26) % 26 + 65)
        }

        if (char >= "a" && char <= "z") {
            return String.fromCharCode((char.charCodeAt(0) - 97 + shift + 26) % 26 + 97)
        }
        return char;
    }).join('');
}
console.log(ceasarCypher("Tui la zo dich", 4))