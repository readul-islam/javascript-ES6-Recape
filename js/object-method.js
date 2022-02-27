
// object method 
const friends = {
    id: 10,
    name: 'Abdul Alim',
    Work: "don't work",
    study: 'BM Collage',
    greet: function(num1, num2) { const money =num1 * num2 * this.id;
        console.log(money);
        
        console.log('The name is' + ' ' + this.name); },
    
   
}

friends.greet(700, 10);
const findId =friends.id;
console.log(findId);
