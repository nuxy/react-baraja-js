import React    from 'react';
import ReactDOM from 'react-dom';
import BarajaJS from '../dist/react-baraja';

/* eslint-disable max-len */
const cards = [
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/1.jpg',
    title: 'Coco Loko',
    details: 'Total bicycle rights in blog four loko raw denim ex, helvetica sapiente odio placeat.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/2.jpg',
    title: 'Vermouth Land',
    details: 'Velit chambray fugiat, enim aesthetic esse ullamco typewriter.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/3.jpg',
    title: 'Electrodynamics',
    details: 'Before they sold out PBR magna jean shorts non seitan ea. Dolor wolf pop-up.',
    addItems: true
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/4.jpg',
    title: 'Retinal Bliss',
    details: 'Locavore vero ad, before they sold out food truck bushwick helvetica.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/5.jpg',
    title: 'Disco Fever',
    details: 'Cillum laboris consequat, qui elit retro next level skateboard freegan hella.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/6.jpg',
    title: 'Serenity',
    details: 'Truffaut wes anderson hoodie 3 wolf moon labore, fugiat lomo iphone eiusmod vegan.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/7.jpg',
    title: 'Dark Honor',
    details: 'Chillwave mustache pinterest, marfa seitan umami id farm-to-table iphone.',
    addItems: true
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/8.jpg',
    title: 'Nested Happiness',
    details: 'Minim post-ironic banksy american apparel iphone wayfarers.',
    addItems: true
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/9.jpg',
    title: 'Lobster Maker',
    details: 'Far deference cupidatat non proident escape, he could greatest mister uninspired.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/10.jpg',
    title: 'Cherry Country',
    details: 'Sint vinyl Austin street art odd future id trust fund, terry richardson cray.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/11.jpg',
    title: 'Future Dynamo',
    details: 'Delicacy omnis nice, well upright, would loral sed quia small dream.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/12.jpg',
    title: 'Breaking Bad',
    details: 'French it rain adipisci necessary textile war ullam corporis time.'
  }
];
/* eslint-enable max-len */

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      add: null,
      fan: {},
      last: false,
      next: false,
      close: false
    };
  }

  // Fan right
  fanEvent() {
    this.setState({
      fan: {
        direction: 'right',
        easing: 'ease-out',
        origin: {
          x: 25,
          y: 100
        },
        speed: 500,
        range: 90,
        center: true
      }
    });
  }

  // Fan left
  fan2Event() {
    this.setState({
      fan: {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          x: 75,
          y: 100
        },
        speed: 500,
        range: 90,
        center: true
      }
    });
  }

  // Fan right (asym.)
  fan3Event() {
    this.setState({
      fan: {
        direction: 'right',
        easing: 'ease-out',
        origin: {
          minX: 20,
          maxX: 80,
          y: 100
        },
        speed: 500,
        range: 90,
        translation: 60,
        center: true
      }
    });
  }

  // Fan left (asym.)
  fan4Event() {
    this.setState({
      fan: {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          minX: 20,
          maxX: 80,
          y: 100
        },
        speed: 500,
        range: 90,
        translation: 60,
        center: true
      }
    });
  }

  // Rotated spread (horizontal)
  fan5Event() {
    this.setState({
      fan: {
        direction: 'right',
        easing: 'ease-out',
        origin: {
          x: 50, y: 200
        },
        speed: 500,
        range: 100,
        center: true
      }
    });
  }

  // Rotated spread (vertical)
  fan6Event() {
    this.setState({
      fan: {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          x: 200,
          y: 50
        },
        speed: 500,
        range: 80,
        center: true
      }
    });
  }

  // Linear spread right
  fan7Event() {
    this.setState({
      fan: {
        direction: 'right',
        easing: 'ease-out',
        origin: {
          x: 50,
          y: 200
        },
        speed: 500,
        range: 20,
        translation: 300,
        center: false
      }
    });
  }

  // Linear spread left
  fan8Event() {
    this.setState({
      fan: {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          x: 50,
          y: 200
        },
        speed: 500,
        range: 20,
        translation : 300,
        center: false
      }
    });
  }

  // Linear spread right (irregular)
  fan9Event() {
    this.setState({
      fan: {
        direction: 'right',
        easing: 'ease-out',
        origin: {
          x: 50,
          y: 200
        },
        speed: 500,
        range: 20,
        translation: 300,
        center: false,
        scatter: true
      }
    });
  }

  // Linear spread left (irregular)
  fan10Event() {
    this.setState({
      fan: {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          x: 50,
          y: 200
        },
        speed: 500,
        range: 20,
        translation: 300,
        center: false,
        scatter: true
      }
    });
  }

  // Other 1
  fanOther1Event() {
    this.setState({
      fan: {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          x: 25,
          y: 100
        },
        speed: 500,
        range: 130,
        center: false
      }
    });
  }

  // Other 2
  fanOther2Event() {
    this.setState({
      fan: {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          x: 50,
          y: 90
        },
        speed: 500,
        range: 360,
        center: false
      }
    });
  }

  // Other 3
  fanOther3Event() {
    this.setState({
      fan: {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          x: 50,
          y: 100
        },
        speed: 500,
        range: 330,
        center: true
      }
    });
  }

  // Other 4
  fanOther4Event() {
    this.setState({
      fan: {
        direction: 'right',
        easing: 'ease-out',
        origin: {
          minX: 20,
          maxX: 80,
          y: 100
        },
        speed: 500,
        range: 90,
        translation: 60,
        center: true,
        scatter: true
      }
    });
  }

  addEvent() {
    let html = '';

    cards.forEach(({imageSrc, title, details, addItems}) => {
      if (addItems) {
        html += `
          <li>
            <img src=${imageSrc} alt=${title} />
            <h4>${title}</h4>
            <p>${details}</p>
          </li>
        `;
      }
    });

    this.setState({
      add: html
    });
  }

  closeEvent() {
    this.setState({
      close: !this.state.close
    });
  }

  lastEvent() {
    this.setState({
      last: !this.state.last
    });
  }

  nextEvent() {
    this.setState({
      next: !this.state.next
    });
  }

  render() {
    return React.createElement(
      <React.Fragment>
        <nav className="actions">
          <span id="nav-fan" onClick={() => this.fanEvent()}>
            Fan right
          </span>

          <span id="nav-fan2" onClick={() => this.fan2Event()}>
            Fan left
          </span>

          <span id="nav-fan3" onClick={() => this.fan3Event()}>
            Fan right (asym.)
          </span>

          <span id="nav-fan4" onClick={() => this.fan4Event()}>
            Fan left (asym.)
          </span>

          <span id="nav-fan5" onClick={() => this.fan5Event()}>
            Rotated spread (horizontal)
          </span>

          <span id="nav-fan6" onClick={() => this.fan6Event()}>
            Rotated spread (vertical)
          </span>

          <span id="nav-fan7" onClick={() => this.fan7Event()}>
            Linear spread right
          </span>

          <span id="nav-fan8" onClick={() => this.fan8Event()}>
            Linear spread left
          </span>

          <span id="nav-fan9" onClick={() => this.fan9Event()}>
            Linear spread right (irregular)
          </span>

          <span id="nav-fan10" onClick={() => this.fan10Event()}>
            Linear spread left (irregular)
          </span>

          <span id="nav-fanOther1" onClick={() => this.fanOther1Event()}>
            other
          </span>

          <span id="nav-fanOther2" onClick={() => this.fanOther2Event()}>
            other
          </span>

          <span id="nav-fanOther3" onClick={() => this.fanOther3Event()}>
            other
          </span>

          <span id="nav-fanOther4" onClick={() => this.fanOther4Event()}>
            other...
          </span>

          <span id="add" onClick={() => this.addEvent()}>
            Add items
          </span>
        </nav>

        <div className="baraja-demo">
          <BarajaJS id="baraja-el" {...this.state}>
            {cards.map(({imageSrc, title, details}, index) => {
              return (
                <React.Fragment key={index}>
                  <img src={imageSrc} alt={title} />
                  <h4>{title}</h4>
                  <p>{details}</p>
                </React.Fragment>
              );
            })}
          </BarajaJS>
        </div>

        <nav className="actions light">
          <span id="nav-prev" onClick={() => this.lastEvent()}>
            &lt;
          </span>

          <span id="nav-next" onClick={() => this.nextEvent()}>
            &gt;
          </span>

          <span id="close" onClick={() => this.closeEvent()}>
            close
          </span>
        </nav>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('main'));
