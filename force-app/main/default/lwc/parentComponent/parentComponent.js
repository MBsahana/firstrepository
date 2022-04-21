import { LightningElement,track } from 'lwc';
export default class ParentComponent extends LightningElement {
    @track barVal ;
    passToParent(event){
        this.barVal = event.detail;
    }
    constructor()
{
     super();
     console.log("Parent Constructor Called");
}
connectedCallback()
{
     console.log("Parent ConnectedCallBack Called");
}
renderedCallback()
{
     console.log("Parent renderedCallback Called");
}
disconnectedCallback()
{
     console.log("Parent disconnectedCallback Called");
}
}