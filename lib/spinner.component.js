'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _spin = require('spin.js');

var _spin2 = _interopRequireDefault(_spin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Based on from https://github.com/qimingweng/react-spinjs */
/* eslint-disable react/forbid-prop-types */


var Spinner = function (_React$PureComponent) {
  _inherits(Spinner, _React$PureComponent);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.setTimeout(function () {
        _this2.spinner = new _spin2.default(_this2.props.config);
        _this2.spinner.spin(_this2.container);
      }, this.props.delay);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.spinner) {
        this.spinner.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('span', { ref: function ref(el) {
          _this3.container = el;
        } });
    }
  }]);

  return Spinner;
}(_react2.default.PureComponent);

Spinner.propTypes = {
  config: _propTypes2.default.object,
  delay: _propTypes2.default.number.isRequired
};
Spinner.defaultProps = {
  config: {
    color: '#FAC51D',
    width: 4
  },
  delay: 500 // eslint-disable-line
};
exports.default = Spinner;