import './greeter.scss';
//import './greeter.css';
import greetText from './greeter.json';
import img1 from './img1.jpg';
export function add(){
   let greet=document.createElement('div');
   greet.classList.add('greet');
   greet.textContent=greetText;
   return greet;
}
