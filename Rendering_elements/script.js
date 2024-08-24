import { createRoot } from 'react-dom/client'
import './style.css'

const imgCard = <div className='imgCard'>
    <img src='https://i.insider.com/5df10d81fd9db229ba736a77?width=700' alt='iphone'></img>
    <div className='content'>
    <h3>iphone 13 pro</h3>
    <p>Apple</p>
    <p><b>$999</b></p>
    </div>
</div>

const root = createRoot(document.getElementById('root'))

root.render(imgCard)
console.log('Hello world!!!')
