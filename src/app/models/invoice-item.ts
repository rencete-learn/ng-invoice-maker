export class InvoiceItem {
    description: string;
    quantity: number;
    price: number;

    constructor(desc: string = '', qty: number = 1, price: number = 0) {
        this.description = desc;
        this.quantity = qty;
        this.price = price;
    }
}