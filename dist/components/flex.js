'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flex = function (_React$Component) {
  _inherits(Flex, _React$Component);

  function Flex() {
    _classCallCheck(this, Flex);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Flex).apply(this, arguments));
  }

  _createClass(Flex, [{
    key: 'renderChildren',
    value: function renderChildren() {
      return _react2.default.Children.map(this.props.children, function (child) {
        var childProps = Object.assign({}, child.props);

        if ('flex-order' in childProps) {
          if (!childProps.style) {
            childProps.style = {};
          }
          childProps.style.order = childProps.order;
        }

        if ('flex-grow' in childProps) {
          if (!childProps.style) {
            childProps.style = {};
          }
          childProps.style.flexGrow = childProps['flex-grow'];
        }

        if ('flex-shrink' in childProps) {
          if (!childProps.style) {
            childProps.style = {};
          }
          childProps.style.flexShrink = childProps['flex-shrink'];
        }

        if ('flex-basis' in childProps) {
          if (!childProps.style) {
            childProps.style = {};
          }
          childProps.style.flexBasis = childProps['flex-basis'];
        }

        if ('align' in childProps) {
          if (!childProps.style) {
            childProps.style = {};
          }
          childProps.style.alignSelf = childProps['align'];
        }

        return _react2.default.cloneElement(child, childProps);
      });
    }
  }, {
    key: 'style',
    value: function style() {
      var _props = this.props;
      var inline = _props.inline;
      var column = _props.column;
      var stack = _props.stack;
      var reverse = _props.reverse;
      var wrap = _props.wrap;


      var noWrap = this.props['no-wrap'];
      var justifyContent = this.props['justify-content'];
      var alignItems = this.props['align-items'];
      var alignContent = this.props['align-content'];

      var style = {
        display: 'flex',
        flexDirection: 'row'
      };

      if (inline) {
        style.display = 'inline-flex';
      }

      if (column || stack) {
        style.flexDirection = 'column';
      }

      if (reverse) {
        if (column || stack) {
          style.flexDirection = 'column-reverse';
        } else {
          style.flexDirection = 'row-reverse';
        }
      }

      if (wrap) {
        if (wrap === 'reverse') {
          style.flexWrap = 'wrap-reverse';
        } else {
          style.flexWrap = 'wrap';
        }
      }

      if (wrap === false) {
        style.flexWrap = 'nowrap';
      }

      if (justifyContent) {
        style.justifyContent = justifyContent;
      }

      if (alignItems) {
        style.alignItems = alignItems;
      }

      if (alignContent) {
        style.alignContent = alignContent;
      }

      return style;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.style() },
        this.renderChildren()
      );
    }
  }]);

  return Flex;
}(_react2.default.Component);

Flex.propTypes = {
  "inline": _react2.default.PropTypes.bool,
  "column": _react2.default.PropTypes.bool,
  "stack": _react2.default.PropTypes.bool,
  "reverse": _react2.default.PropTypes.bool,
  "wrap": _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.string]),
  "justify-content": _react2.default.PropTypes.string,
  "align-items": _react2.default.PropTypes.string,
  "align-content": _react2.default.PropTypes.string
};
exports.default = Flex;