let CardsArray = [];

let CardsDisplay = document.createElement("p");
let CountDisplay = document.createElement("h2");

CardsDisplay.className = "CardsDisplay";
CountDisplay.className = "CountDisplay";

function InputCards (input) {
    
    CardsArray.push(input);

    Output();

}

function CountCalculator () {

    let Count = 0;

    for (let i = 0; i < CardsArray.length; i++) {

        switch (CardsArray[i]) {

            case "2": Count += 1;
                break;
            case "3": Count += 1;
                break;
            case "4": Count += 1;
                break;
            case "5": Count += 1;
                break;
            case "6": Count += 1;
                break;

            case "10": Count -= 1;
                break;
            case "J": Count -= 1;
                break;
            case "Q": Count -= 1;
                break;
            case "K": Count -= 1;
                break;
            case "A": Count -= 1;
                break;

            default : Count += 0;
                break;

       }
 
   }

   return Count ;

}

function Output () {

    console.clear();
    console.log(CountCalculator());

    CountDisplay.textContent = CountCalculator();
    document.body.append(CountDisplay);

    CardsDisplay.textContent = CardsArray;
    document.body.append(CardsDisplay);

}