import { LightningElement,track,api } from 'lwc';
import FirstName from '@salesforce/schema/Account.Name'
import LastName from '@salesforce/schema/Account.Industry';
export default class LDS extends LightningElement {
    @api recordId;
    @api objectApiName;
    @track fieldsname=[FirstName,LastName];
    connectedCallback(){
        this.objectName= this.objectApiName;
    }
}