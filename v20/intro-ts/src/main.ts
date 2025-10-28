import './style.css'
import {name, hpPoints} from './topics/intro'
import './topics/object'
import './topics/functions'
import './topics/hw-01'

const app = document.querySelector<HTMLDivElement>('#app');

app!.innerHTML = name + " " + hpPoints;

