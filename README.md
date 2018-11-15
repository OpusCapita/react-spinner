# Spinner

### Description

Wait indicator to be shown on top of any container.

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
