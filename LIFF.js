let carColor = 'red'


const car = (function(){
    return {

        changeCarColorBlack: function(){
            carColor = 'Black'
            return carColor
        },
        changeCarColorBlue: function(){
            carColor = 'Blue'
            return carColor
        }
    }
   

})();

console.log(car.changeCarColorBlack());
console.log(car.changeCarColorBlue());