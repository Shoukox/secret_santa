export class Participant{
    id: number;
    name: string;

    isPaired: boolean;
    whoPaired: Participant | undefined;

    constructor(id: number, name: string, isPaired: boolean, whoPaired: Participant | undefined){
        this.id = id;
        this.name = name;
        this.isPaired = isPaired;
        this.whoPaired = whoPaired;
    }
}