import getElement from "./root"

export default class Article{
    constructor(property){
        this.head = property.head;
        this.description = property.description
    }
    render(){
        let app = getElement()
        let h = document.createElement("h1")        
        h.innerText = this.head

        let p = document.createElement("p")
        p.innerText = this.description

        app.append(h)
        app.append(p)
    }
}