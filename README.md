# at-flex-grid
A lightweight CSS3 flexbox grid with extra flex functionalities.

[![npm version](https://badge.fury.io/js/at-flex-grid.svg)](https://badge.fury.io/js/at-flex-grid) [![Bower version](https://badge.fury.io/bo/at-flex-grid.svg)](https://badge.fury.io/bo/at-flex-grid)

## Description
at-flex-grid is a simple lightweight 12 column grid implemented using CSS3 flexbox specifications.
In Addition to the 12 column grid flexbox features are provided wrapped in classes or mixins.
The Grid works flawlessly along other grids like bootstrap or foundation because of the prefix in the naming convention.

## Getting Started
- To install at-flex-grid as a dependency
    - run ``npm i --save at-flex-grid``
- To simply link the css file
    - link it in your html using ``<link rel="stylesheet" href="/pathToFile/at-flex-grid.css">``
- If you want the bootstrap3 compatible version out of the box
    - link it in your html using ``<link rel="stylesheet" href="/pathToFile/at-flex-grid-bootstrap3.css">``
- If your prefer SASS/SCSS or you would like to customize the file
    - import it in your SCSS file using ``@import 'pathToFile/at-flex-grid-grid.scss';``


## Features
- A 12 column grid using flexbox
- Flexbox features for each break point; i.e: class="at-center-xs"
- Bootstrap3 compatible version is supported under the name at-flex-grid-bootstrap3.css, utilizing the same breakpoints and container widths of Bootstrap version 3

## Customization
To customize the grid breakpoints, container widths, gutters and so on, Include the at-flex-grid.scss in your scss file and edit the following variables to suit your preferences.
```
/*
 * Grid Breakpoints
 */
// Extra small screen / phone
$grid-breakpoint-xs: 0;
// Small screen / phone
$grid-breakpoint-sm: 576px;
// Medium screen / tablet
$grid-breakpoint-md: 768px;
// Large screen / desktop
$grid-breakpoint-lg: 992px;
// Extra large screen / wide desktop
$grid-breakpoint-xl: 1200px;

/*
 * Container widths
 */
$container-max-width-sm: 540px;
$container-max-width-md: 720px;
$container-max-width-lg: 960px;
$container-max-width-xl: 1140px;

/*
 * Gutters and spacing
 */
$padding-col-x: 0.5rem;
$padding-container-x: 1rem;
```


## Contribution and Customization

### Getting Started
- To start the development server on [localhost:9001](http://localhost:9001)
    - run ``gulp start`` or ``npm start``

- To build the project to 'dist/' run ``gulp build``
    - run ``gulp build`` or ``npm run build``

### Contribution guidline
  - This project usis BEM scss naming conventions
