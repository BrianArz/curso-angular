
function addNumbers(a: number, b:number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${ a + b }`;
}

function multiply( firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
}

// const result: number = addNumbers(1, 2);
// const resultArrow: string = addNumbersArrow(1,2);
// const multiplyResult: number = multiply(5);
//console.log({ result, resultArrow, multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


const healCharacter = ( character: Character, amount: number ) =>{
    character.hp += amount;
} 

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Health points: ${this.hp}`);
    }
}

healCharacter( strider, 30);

strider.showHp();

export {};