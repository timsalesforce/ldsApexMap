import { LightningElement, wire } from 'lwc';
import mapArg from '@salesforce/apex/WithMap.mapArg';
import mapArg2 from '@salesforce/apex/WithMap.mapArg2';

export default class ApexMap extends LightningElement {
    mapVal = new Map();
    objVal = {};

    val1;
    val2;

    async connectedCallback() {
        this.mapVal.set('one', 'two');
        this.objVal['one'] = 'two';
        this.val1 = await mapArg2({theMap: this.mapVal});
        this.val2 = await mapArg2({theMap: this.objVal});
    }

    @wire(mapArg, { theMap: '$mapVal' })
    wire1;

    @wire(mapArg, { theMap: '$objVal' })
    wire2;


}