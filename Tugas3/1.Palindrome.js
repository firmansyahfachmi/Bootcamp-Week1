function checkPalindrom(str) {
    console.log(str);
    console.log(str == str.split('').reverse().join(''));
}

checkPalindrom('nursesrun');