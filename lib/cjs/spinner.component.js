'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp; /* Based on from https://github.com/qimingweng/react-spinjs */
/* eslint-disable react/forbid-prop-types */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _spin = require('./spin.js/spin');

require('./spin.js/spin.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spinner = (_temp = _class = function (_React$PureComponent) {
  _inherits(Spinner, _React$PureComponent);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  Spinner.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    setTimeout(function () {
      _this2.spinner = new _spin.Spinner(_this2.props.config);
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

    return _react2.default.createElement('span', { ref: function ref(el) {
        _this3.container = el;
      } });
  };

  return Spinner;
}(_react2.default.PureComponent), _class.defaultProps = {
  config: {
    color: '#FAC51D',
    width: 4
  },
  delay: 500
}, _temp);
exports.default = Spinner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGlubmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiU3Bpbm5lciIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0VGltZW91dCIsInNwaW5uZXIiLCJTcGluSlMiLCJwcm9wcyIsImNvbmZpZyIsInNwaW4iLCJjb250YWluZXIiLCJkZWxheSIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwic3RvcCIsInJlbmRlciIsImVsIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiY29sb3IiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7bUJBQUE7QUFDQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7b0JBY25CQyxpQixnQ0FBb0I7QUFBQTs7QUFDbEJDLGVBQVcsWUFBTTtBQUNmLGFBQUtDLE9BQUwsR0FBZSxJQUFJQyxhQUFKLENBQVcsT0FBS0MsS0FBTCxDQUFXQyxNQUF0QixDQUFmO0FBQ0EsYUFBS0gsT0FBTCxDQUFhSSxJQUFiLENBQWtCLE9BQUtDLFNBQXZCO0FBQ0QsS0FIRCxFQUdHLEtBQUtILEtBQUwsQ0FBV0ksS0FIZDtBQUlELEc7O29CQUVEQyxvQixtQ0FBdUI7QUFDckIsUUFBSSxLQUFLUCxPQUFULEVBQWtCO0FBQ2hCLFdBQUtBLE9BQUwsQ0FBYVEsSUFBYjtBQUNEO0FBQ0YsRzs7b0JBRURDLE0scUJBQVM7QUFBQTs7QUFDUCxXQUFPLHdDQUFNLEtBQUssYUFBQ0MsRUFBRCxFQUFRO0FBQUUsZUFBS0wsU0FBTCxHQUFpQkssRUFBakI7QUFBc0IsT0FBM0MsR0FBUDtBQUNELEc7OztFQTdCa0NDLGdCQUFNQyxhLFVBTWxDQyxZLEdBQWU7QUFDcEJWLFVBQVE7QUFDTlcsV0FBTyxTQUREO0FBRU5DLFdBQU87QUFGRCxHQURZO0FBS3BCVCxTQUFPO0FBTGEsQztrQkFOSFQsTyIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJhc2VkIG9uIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3FpbWluZ3dlbmcvcmVhY3Qtc3BpbmpzICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBTcGlubmVyIGFzIFNwaW5KUyB9IGZyb20gJy4vc3Bpbi5qcy9zcGluJztcbmltcG9ydCAnLi9zcGluLmpzL3NwaW4uY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bpbm5lciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbmZpZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29uZmlnOiB7XG4gICAgICBjb2xvcjogJyNGQUM1MUQnLFxuICAgICAgd2lkdGg6IDQsXG4gICAgfSxcbiAgICBkZWxheTogNTAwLFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNwaW5uZXIgPSBuZXcgU3BpbkpTKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgICAgIHRoaXMuc3Bpbm5lci5zcGluKHRoaXMuY29udGFpbmVyKTtcbiAgICB9LCB0aGlzLnByb3BzLmRlbGF5KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnNwaW5uZXIpIHtcbiAgICAgIHRoaXMuc3Bpbm5lci5zdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c3BhbiByZWY9eyhlbCkgPT4geyB0aGlzLmNvbnRhaW5lciA9IGVsOyB9fSAvPjtcbiAgfVxufVxuIl19