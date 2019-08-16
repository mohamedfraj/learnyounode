
var tab = process.argv;
var sum=0;

    for (var i = 2; i < tab.length; i++) {
          sum = sum + Number(tab[i])
    }

console.log(sum)