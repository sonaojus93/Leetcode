function isValid(str) {
    let stack = [];
    let map = {
        "}": "{",
        "]": "[",
        ")": "("
    }

    for (let i of str) {
        if (i == "(" || i == "[" || i == "{")
            stack.push(i);
        else {
            let j = stack.pop();
            if (j != map[i]) return false
        }
    }
    return (stack.length == 0) ? true : false;
}

let s = "()[]{}"
console.log(isValid(s));