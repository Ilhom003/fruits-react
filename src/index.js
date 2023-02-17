import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Img1 from './assets/imgs/cherry.png'
import Img2 from './assets/imgs/apple.png'

const fruits = [
  { id: 1, img: Img1, name: 'Cherry', },
  { id: 2, img: Img2, name: 'Apple', },
  { id: 3, img: Img1, name: 'Cherry', },
  { id: 4, img: Img2, name: 'Apple', },
  { id: 5, img: Img1, name: 'Cherry', },
  { id: 6, img: Img2, name: 'Apple', },
  { id: 7, img: Img1, name: 'Cherry', },
  { id: 8, img: Img2, name: 'Apple', },
  { id: 9, img: Img1, name: 'Cherry', },
  { id: 10, img: Img2, name: 'Apple', },
  { id: 11, img: Img1, name: 'Cherry', },
  { id: 12, img: Img2, name: 'Apple', },
  { id: 13, img: Img1, name: 'Cherry', },
  { id: 14, img: Img2, name: 'Apple', },
  { id: 15, img: Img1, name: 'Cherry', },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='wrapper'>
      <h1 className='title'>Fruits</h1>
      <div className='container'>
        {fruits.map((fruit) => {
          return (
            <App key={fruit.id} data={fruit} />

          )
        })}
      </div>
    </div>
  </React.StrictMode>
);

