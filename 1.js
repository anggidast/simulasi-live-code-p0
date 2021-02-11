/**

Kamu diminta untuk membuat gambar potongan rantai dengan '-' dan 'o'
sesuai dengan input variable `total` yang disediakan.
Berikut adalah contoh pengaplikasiannya:

- input: 3
output:
o-o
-o-
o-o

- input: 4
output:
o-o-
-o-o
o-o-
-o-o

- input: 5
output:
o-o-o
-o-o-
o-o-o
-o-o-
o-o-o


*/
var total = 10

// Your Code Here
for (var i = 0; i < total; i++) {
    var temp = ''
    for (var j = 0; j < total; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0) {
                temp += 'o'
            } else {
                temp += '-'
            }
        } else {
            if (j % 2 == 0) {
                temp += '-'
            } else {
                temp += 'o'
            }
        }
    }
    console.log(temp);
}