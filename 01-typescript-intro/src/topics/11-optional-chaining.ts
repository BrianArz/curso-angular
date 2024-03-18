
export interface Passenger {
    name: string,
    children?: string[];
}

const passengerOne: Passenger = {
    name: 'Vide'
}

const passengerTwo: Passenger = {
    name: 'Brian',
    children: [ 'Kory', 'Daiki' , 'Jirou']
}

const printChildrenNumber = ( passenger: Passenger ): number => {
    const howManyChildren = passenger.children?.length || 0; //optional chaining
    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

printChildrenNumber(passengerOne);
printChildrenNumber(passengerTwo);
