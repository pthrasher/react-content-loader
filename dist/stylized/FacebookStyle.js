(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '../Wrap'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('../Wrap'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.Wrap);
        global.FacebookStyle = mod.exports;
    }
})(this, function (exports, _react, _Wrap) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _Wrap2 = _interopRequireDefault(_Wrap);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var FacebookStyle = function FacebookStyle(props) {
        return _react2.default.createElement(
            _Wrap2.default,
            props,
            _react2.default.createElement('rect', { x: '0', y: '0', rx: '5', ry: '5', width: '70', height: '70' }),
            _react2.default.createElement('rect', { x: '80', y: '17', rx: '4', ry: '4', width: '300', height: '13' }),
            _react2.default.createElement('rect', { x: '80', y: '40', rx: '3', ry: '3', width: '250', height: '10' }),
            _react2.default.createElement('rect', { x: '0', y: '80', rx: '3', ry: '3', width: '350', height: '10' }),
            _react2.default.createElement('rect', { x: '0', y: '100', rx: '3', ry: '3', width: '400', height: '10' }),
            _react2.default.createElement('rect', { x: '0', y: '120', rx: '3', ry: '3', width: '360', height: '10' })
        );
    };

    exports.default = FacebookStyle;
});