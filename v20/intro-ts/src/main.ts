import './style.css'
import {name, hpPoints} from './topics/intro'
import './topics/object'
import './topics/functions'
import './topics/hw-01'
import './topics/object-destructure'

const app = document.querySelector<HTMLDivElement>('#app');

app!.innerHTML = name + " " + hpPoints;

