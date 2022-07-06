// complete the given function

function palindrome(str){
    let start = 0, end = 0;

    while (start < end) {
        if (str.charAt(start++) != str.charAt(end--)){
            return false;
        }
    }

    return true;
}
module.exports = palindrome
