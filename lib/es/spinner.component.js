var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Based on from https://github.com/qimingweng/react-spinjs */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Spinner as SpinJS } from './spin.js/spin';
import './spin.js/spin.css';

var Spinner = (_temp = _class = function (_React$PureComponent) {
  _inherits(Spinner, _React$PureComponent);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  Spinner.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    setTimeout(function () {
      _this2.spinner = new SpinJS(_this2.props.config);
      _this2.spinner.spin(_this2.container);
    }, this.props.delay);
  };

  Spinner.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.spinner) {
      this.spinner.stop();
    }
  };

  Spinner.prototype.render = function render() {
    var _this3 = this;

    return React.createElement('span', { ref: function ref(el) {
        _this3.container = el;
      } });
  };

  return Spinner;
}(React.PureComponent), _class.defaultProps = {
  config: {
    color: '#FAC51D',
    width: 4
  },
  delay: 500
}, _temp);
export { Spinner as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGlubmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJTcGlubmVyIiwiU3BpbkpTIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRUaW1lb3V0Iiwic3Bpbm5lciIsInByb3BzIiwiY29uZmlnIiwic3BpbiIsImNvbnRhaW5lciIsImRlbGF5IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJzdG9wIiwicmVuZGVyIiwiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiY29sb3IiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxXQUFXQyxNQUFwQixRQUFrQyxnQkFBbEM7QUFDQSxPQUFPLG9CQUFQOztJQUVxQkQsTzs7Ozs7Ozs7O29CQWNuQkUsaUIsZ0NBQW9CO0FBQUE7O0FBQ2xCQyxlQUFXLFlBQU07QUFDZixhQUFLQyxPQUFMLEdBQWUsSUFBSUgsTUFBSixDQUFXLE9BQUtJLEtBQUwsQ0FBV0MsTUFBdEIsQ0FBZjtBQUNBLGFBQUtGLE9BQUwsQ0FBYUcsSUFBYixDQUFrQixPQUFLQyxTQUF2QjtBQUNELEtBSEQsRUFHRyxLQUFLSCxLQUFMLENBQVdJLEtBSGQ7QUFJRCxHOztvQkFFREMsb0IsbUNBQXVCO0FBQ3JCLFFBQUksS0FBS04sT0FBVCxFQUFrQjtBQUNoQixXQUFLQSxPQUFMLENBQWFPLElBQWI7QUFDRDtBQUNGLEc7O29CQUVEQyxNLHFCQUFTO0FBQUE7O0FBQ1AsV0FBTyw4QkFBTSxLQUFLLGFBQUNDLEVBQUQsRUFBUTtBQUFFLGVBQUtMLFNBQUwsR0FBaUJLLEVBQWpCO0FBQXNCLE9BQTNDLEdBQVA7QUFDRCxHOzs7RUE3QmtDZixNQUFNZ0IsYSxVQU1sQ0MsWSxHQUFlO0FBQ3BCVCxVQUFRO0FBQ05VLFdBQU8sU0FERDtBQUVOQyxXQUFPO0FBRkQsR0FEWTtBQUtwQlIsU0FBTztBQUxhLEM7U0FOSFQsTyIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJhc2VkIG9uIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3FpbWluZ3dlbmcvcmVhY3Qtc3BpbmpzICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBTcGlubmVyIGFzIFNwaW5KUyB9IGZyb20gJy4vc3Bpbi5qcy9zcGluJztcbmltcG9ydCAnLi9zcGluLmpzL3NwaW4uY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bpbm5lciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbmZpZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29uZmlnOiB7XG4gICAgICBjb2xvcjogJyNGQUM1MUQnLFxuICAgICAgd2lkdGg6IDQsXG4gICAgfSxcbiAgICBkZWxheTogNTAwLFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNwaW5uZXIgPSBuZXcgU3BpbkpTKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgICAgIHRoaXMuc3Bpbm5lci5zcGluKHRoaXMuY29udGFpbmVyKTtcbiAgICB9LCB0aGlzLnByb3BzLmRlbGF5KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnNwaW5uZXIpIHtcbiAgICAgIHRoaXMuc3Bpbm5lci5zdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c3BhbiByZWY9eyhlbCkgPT4geyB0aGlzLmNvbnRhaW5lciA9IGVsOyB9fSAvPjtcbiAgfVxufVxuIl19