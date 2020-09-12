import React    from 'react';
import ReactDOM from 'react-dom';
import BarajaJS from '../dist/react-baraja';

/* eslint-disable max-len */
const cards = [
  {
    imgSrc: 'https://nuxy.github.io/baraja-js/images/1.jpg',
    title: 'Coco Loko',
    details: 'Total bicycle rights in blog four loko raw denim ex, helvetica sapiente odio placeat.'
  },
  {
    imgSrc: 'https://nuxy.github.io/baraja-js/images/2.jpg',
    title: 'Vermouth Land',
    details: 'Velit chambray fugiat, enim aesthetic esse ullamco typewriter.'
  },
  {
    imgSrc: 'https://nuxy.github.io/baraja-js/images/3.jpg',
    title: 'Electrodynamics',
    details: 'Before they sold out PBR magna jean shorts non seitan ea. Dolor wolf pop-up.'
  },
  {
    imgSrc: 'https://nuxy.github.io/baraja-js/images/4.jpg',
    title: 'Retinal Bliss',
    details: 'Locavore vero ad, before they sold out food truck bushwick helvetica.'
  },
  {
    imgSrc: 'https://nuxy.github.io/baraja-js/images/5.jpg',
    title: 'Disco Fever',
    details: 'Cillum laboris consequat, qui elit retro next level skateboard freegan hella.'
  },
  {
    imgSrc: 'https://nuxy.github.io/baraja-js/images/6.jpg',
    title: 'Serenity',
    details: 'Truffaut wes anderson hoodie 3 wolf moon labore, fugiat lomo iphone eiusmod vegan.'
  },
  {
    imgSrc: 'https://nuxy.github.io/baraja-js/images/7.jpg',
    title: 'Dark Honor',
    details: 'Chillwave mustache pinterest, marfa seitan umami id farm-to-table iphone.'
  },
  {
    imgSrc: 'https://nuxy.github.io/baraja-js/images/8.jpg',
    title: 'Nested Happiness',
    details: 'Minim post-ironic banksy american apparel iphone wayfarers.'
  },
  {
    imgSrc: 'https://nuxy.github.io/baraja-js/images/9.jpg',
    title: 'Cherry Country',
    details: 'Sint vinyl Austin street art odd future id trust fund, terry richardson cray.'
  },
  {
    imgSrc: 'https://nuxy.github.io/baraja-js/images/10.jpg',
    title: 'Cherry Country',
    details: 'Sint vinyl Austin street art odd future id trust fund, terry richardson cray.'
  },
  {
    imgSrc: 'https://nuxy.github.io/baraja-js/images/11.jpg',
    title: 'Coco Loko',
    details: 'Total bicycle rights in blog four loko raw denim ex, helvetica sapiente odio placeat.'
  },
  {
    imgSrc: 'https://nuxy.github.io/baraja-js/images/12.jpg',
    title: 'Vermouth Land',
    details: 'Velit chambray fugiat, enim aesthetic esse ullamco typewriter.'
  }
];
/* eslint-enable max-len */

class Demo extends React.Component {
  render() {
    return (
      <BarajaJS id="baraja-el">
        {cards.map(({imgSrc, title, details}) => {
          return (
            <React.Fragment>
              <img src={imgSrc} alt={title} />
              <h4>{title}</h4>
              <p>{details}</p>
            </React.Fragment>
          );
        })}
      </BarajaJS>
    );
  }
};

ReactDOM.render(<Demo />, document.getElementById('main'));
