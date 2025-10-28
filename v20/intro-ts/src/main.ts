import './style.css'
import {name, hpPoints} from './topics/intro'

const app = document.querySelector<HTMLDivElement>('#app');

app!.innerHTML = name + " " + hpPoints;

