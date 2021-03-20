# React Baraja-JS [![npm version](https://badge.fury.io/js/react-baraja-js.svg)](https://badge.fury.io/js/react-baraja-js) [![](https://img.shields.io/npm/dm/react-baraja-js)](https://www.npmjs.com/package/react-baraja-js)

![Preview](https://raw.githubusercontent.com/nuxy/baraja-js/master/package.png)

_Baraja_ is a JavaScript plugin that allows to move elements in a card-like fashion and spreads them like one would spread a deck of cards on a table.  It uses CSS transforms for rotating and translating the items.

There are several options available that will create various spreading possibilities of the items, for example, moving the items laterally or rotating them in a fan-like way.

Checkout the [demo](https://nuxy.github.io/baraja-js) for examples of use.

## Dependencies

- [Node.js](https://nodejs.org)

## Installation

Add to an existing [React](https://reactjs.org) project using [YARN](https://yarnpkg.com).

    $ yarn add react-baraja-js

## Usage

```javascript
import React    from 'react';
import BarajaJS from '../dist/react-baraja-js';

const cards = [
  {
    imageSrc: 'path/to/image1.png',
    title: 'card 1',
    details: 'this is card 1'
  },
  {
    imageSrc: 'path/to/image2.png',
    title: 'card 2',
    details: 'this is card 2'
  },
  {
    imageSrc: 'path/to/image3.png',
    title: 'card 3',
    details: 'this is card 3'
  },
  {
    imageSrc: 'path/to/image4.png',
    title: 'card 4',
    details: 'this is card 4'
  },

  // add more cards ...
]

export default class Demo extends React.Component {
  constructor() {
    super();

    this.state = {
      fan: {}
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

  render() {
    return (
      <React.Fragment>
        <BarajaJS fan={fan}>
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

        <button id="fan-button" onClick={() => this.fanEvent()}>Fan right</button>
      </React.Fragment>
    );
  }
};
```

## Component Props

| Name     | Type     | Description              |
|----------|----------|--------------------------|
| id       | String   | Default `baraja-js`      |
| options  | Object   | Override animation [defaults](https://github.com/nuxy/baraja-js#global-options). |
| add      | String   | Card item [HTML markup](https://github.com/nuxy/baraja-js#html-markup). |
| fan      | Object   | Configure [fan options](https://github.com/nuxy/baraja-js#fan-options). |
| close    | Boolean  | Close the deck if `true` |
| last     | Boolean  | Show last card if `true` |
| next     | Boolean  | Show next card if `true` |

## Documentation

- [Methods](https://github.com/nuxy/baraja-js#methods)
- [Fan options](https://github.com/nuxy/baraja-js#fan-options)

## Developers

### CLI options

Run [ESLint](https://eslint.org) on project sources:

    $ npm run lint

Transpile ES6 sources (using [Babel](https://babeljs.io)) and minify to a distribution:

    $ npm run build

Bundle [demo](https://github.com/nuxy/react-baraja-js/tree/master/demo) sources (using [Webpack](https://webpack.js.org)):

    $ npm run webpack

## Contributions

If you fix a bug, or have a code you want to contribute, please send a pull-request with your changes. (Note: Before committing your code please ensure that you are following the [Node.js style guide](https://github.com/felixge/node-style-guide))

## Versioning

This package is maintained under the [Semantic Versioning](https://semver.org) guidelines.

## License and Warranty

This package is distributed in the hope that it will be useful, but without any warranty; without even the implied warranty of merchantability or fitness for a particular purpose.

_Baraja-JS_ is provided under the terms of the [MIT license](http://www.opensource.org/licenses/mit-license.php)

Demo and proof-of-concept by [Codrops](https://www.codrops.com) [[LICENSE](http://tympanus.net/codrops/licensing)]

Demo background patterns by [Subtle Patterns](https://subtlepatterns.com) [[LICENSE](http://creativecommons.org/licenses/by-sa/3.0/deed.en_US
)]

Demo card illustrations by [Jason Custer](http://dribbble.com/jdelamancha)

## Author

[Marc S. Brooks](https://github.com/nuxy)
