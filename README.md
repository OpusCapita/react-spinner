# react-spinner

### Description
Wait indicator to be shown on top of any container.

### Installation
```
npm install @opuscapita/react-spinner
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-spinner)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.

### API
Uses [spin.js](https://spin.js.org/), checkout styling options there. 

| Prop name | Type   | Default                              | Description                           |
| --------- | ------ | ------------------------------------ | --------------------------------------|
| delay     | number | 500                                  | Delay to show spinner                 |
| config    | object | { color: '#FAC51D', width: 4 }       | Spin.js config options                |

### Code example

```jsx
import Spinner from '@opuscapita/react-spinner';

function SpinnerView() {
  return (
    <Spinner />
  );
}
```
