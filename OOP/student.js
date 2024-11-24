import { Person } from "./person.js";
export class Student extends Person {
    _name;
    constructor(_name = "") {
        super();
        this._name = _name;
    }
    get Name() {
        return this._name;
    }
    set Name(val) {
        this._name = val;
    }
}
