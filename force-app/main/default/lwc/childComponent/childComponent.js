import { LightningElement, api } from 'lwc';
export default class ChildComponent extends LightningElement {
     @api getValueFromParent;
constructor()
{
     super();
     console.log("Child Constructor Called");
}
connectedCallback()
{
     console.log("Child ConnectedCallBack Called");
}
renderedCallback()
{
     console.log("Child renderedCallback Called");
}
disconnectedCallback()
{
     console.log("Child disconnectedCallback Called");
}
}