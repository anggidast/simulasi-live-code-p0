/**
 * WHAT IS MY EMAIL PROVIDER?
 * ==========================
 *
 * Email merupakan sebuah cara untuk kita berinteraksi antar satu dengan yang lainnya secara elektronik,
 * Banyak sekali provider yang menyediakan layanan email ini.
 *
 * Buatlah sebuah proses yang akan mengeluarkan output provider email yang digunakan oleh user.
 *
 * Contoh:
 *   - Input  : icha@hacktiv8.com
 *   - Output : Your email provider is hacktiv8
 *     (tidak menggunakan .com di belakang)
 * 
 * RULES:
 *   - Tidak diperbolehkan menggunakan built-in function:
 *     .map .filter .reduce .split .join .indexOf .findIndex .substring
 */

var input = 'icha@hacktiv8.com'
// var input = 'adastariana@gmail.com'

// Your code here
var at = 0
var dot = 0
for (var i = 0; i < input.length; i++) {
    if (input[i] == '@') {
        at = i;
    }
    if (input[i] == '.') {
        dot = i;
    }
}
console.log('Your email provider is ' + input.slice(at + 1, dot));