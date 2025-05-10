function valid_palindrome(str) {
    let start = 0, end = str.length - 1;

    while (start < end) {
        while (start < end && !check_alphanumeric(str[start])) start++;
        while (start < end && !check_alphanumeric(str[end])) end--;

        if (str[start].toLowerCase() !== str[end].toLowerCase()) {
            return false;
        }

        start++;
        end--;
    }
    return true;
}

function check_alphanumeric(char) {
    const code = char.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) ||  // 0-9
        (code >= 65 && code <= 90) ||  // A-Z
        (code >= 97 && code <= 122)    // a-z
    );
}

// Test
console.log(valid_palindrome("Sona,/anos")); // true