import { ToyReact,Component} from './ToyReact'

console.log("main");
require('./lib.js');

class Mycomponent extends Component{
    render(){
        return <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
            <div>{
            this.children
        }</div>
        </div>
    }
}

let a = <Mycomponent name="a" id="ida">
    <div>777</div>
    </Mycomponent>

ToyReact.render(
    a,document.body
)

// let a = <div name="a" id = "ida">
//     <span>Hello</span>
//     <span>World</span>
//     <span>!</span>
// </div>
// console.log(a);
// document.body.appendChild(a)



// let a = <Mycomponent name="a" />
