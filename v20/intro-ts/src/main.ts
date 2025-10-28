import './style.css'
import {name, hpPoints} from './topics/intro'
import './topics/object'

const app = document.querySelector<HTMLDivElement>('#app');

app!.innerHTML = name + " " + hpPoints;

