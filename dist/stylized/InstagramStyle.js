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
        global.InstagramStyle = mod.exports;
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

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var InstagramStyle = function InstagramStyle(props) {
        return _react2.default.createElement(
            _Wrap2.default,
            _extends({}, props, { height: '480' }),
            _react2.default.createElement('circle', { cx: '30', cy: '30', r: '30' }),
            _react2.default.createElement('rect', { x: '75', y: '13', rx: '4', ry: '4', width: '100', height: '13' }),
            _react2.default.createElement('rect', { x: '75', y: '37', rx: '4', ry: '4', width: '50', height: '8' }),
            _react2.default.createElement('rect', { x: '0', y: '70', rx: '5', ry: '5', width: '400', height: '400' })
        );
    };

    exports.default = InstagramStyle;
});