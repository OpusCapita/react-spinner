'use strict';

exports.__esModule = true;
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var defaults = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    scale: 1.0,
    corners: 1,
    color: '#000',
    fadeColor: 'transparent',
    animation: 'spinner-line-fade-default',
    rotate: 0,
    direction: 1,
    speed: 1,
    zIndex: 2e9,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: '0 0 1px transparent',
    position: 'absolute'
};
var Spinner = /** @class */function () {
    function Spinner(opts) {
        if (opts === void 0) {
            opts = {};
        }
        this.opts = __assign({}, defaults, opts);
    }
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
     * stop() internally.
     */
    Spinner.prototype.spin = function (target) {
        this.stop();
        this.el = document.createElement('div');
        this.el.className = this.opts.className;
        this.el.setAttribute('role', 'progressbar');
        css(this.el, {
            position: this.opts.position,
            width: 0,
            zIndex: this.opts.zIndex,
            left: this.opts.left,
            top: this.opts.top,
            transform: "scale(" + this.opts.scale + ")"
        });
        if (target) {
            target.insertBefore(this.el, target.firstChild || null);
        }
        drawLines(this.el, this.opts);
        return this;
    };
    /**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */
    Spinner.prototype.stop = function () {
        if (this.el) {
            if (typeof requestAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.animateId);
            } else {
                clearTimeout(this.animateId);
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
            this.el = undefined;
        }
        return this;
    };
    return Spinner;
}();
exports.Spinner = Spinner;
/**
 * Sets multiple style properties at once.
 */

function css(el, props) {
    for (var prop in props) {
        el.style[prop] = props[prop];
    }
    return el;
}
/**
 * Returns the line color from the given string or array.
 */
function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length];
}
/**
 * Internal method that draws the individual lines.
 */
function drawLines(el, opts) {
    var borderRadius = Math.round(opts.corners * opts.width * 500) / 1000 + 'px';
    var shadow = 'none';
    if (opts.shadow === true) {
        shadow = '0 2px 4px #000'; // default shadow
    } else if (typeof opts.shadow === 'string') {
        shadow = opts.shadow;
    }
    var shadows = parseBoxShadow(shadow);
    for (var i = 0; i < opts.lines; i++) {
        var degrees = ~~(360 / opts.lines * i + opts.rotate);
        var backgroundLine = css(document.createElement('div'), {
            position: 'absolute',
            top: -opts.width / 2 + "px",
            width: opts.length + opts.width + 'px',
            height: opts.width + 'px',
            background: getColor(opts.fadeColor, i),
            borderRadius: borderRadius,
            transformOrigin: 'left',
            transform: "rotate(" + degrees + "deg) translateX(" + opts.radius + "px)"
        });
        var delay = i * opts.direction / opts.lines / opts.speed;
        delay -= 1 / opts.speed; // so initial animation state will include trail
        var line = css(document.createElement('div'), {
            width: '100%',
            height: '100%',
            background: getColor(opts.color, i),
            borderRadius: borderRadius,
            boxShadow: normalizeShadow(shadows, degrees),
            animation: 1 / opts.speed + "s linear " + delay + "s infinite " + opts.animation
        });
        backgroundLine.appendChild(line);
        el.appendChild(backgroundLine);
    }
}
function parseBoxShadow(boxShadow) {
    var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
    var shadows = [];
    for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {
        var shadow = _a[_i];
        var matches = shadow.match(regex);
        if (matches === null) {
            continue; // invalid syntax
        }
        var x = +matches[2];
        var y = +matches[5];
        var xUnits = matches[4];
        var yUnits = matches[7];
        if (x === 0 && !xUnits) {
            xUnits = yUnits;
        }
        if (y === 0 && !yUnits) {
            yUnits = xUnits;
        }
        if (xUnits !== yUnits) {
            continue; // units must match to use as coordinates
        }
        shadows.push({
            prefix: matches[1] || '',
            x: x,
            y: y,
            xUnits: xUnits,
            yUnits: yUnits,
            end: matches[8]
        });
    }
    return shadows;
}
/**
 * Modify box-shadow x/y offsets to counteract rotation
 */
function normalizeShadow(shadows, degrees) {
    var normalized = [];
    for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
        var shadow = shadows_1[_i];
        var xy = convertOffset(shadow.x, shadow.y, degrees);
        normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);
    }
    return normalized.join(', ');
}
function convertOffset(x, y, degrees) {
    var radians = degrees * Math.PI / 180;
    var sin = Math.sin(radians);
    var cos = Math.cos(radians);
    return [Math.round((x * cos + y * sin) * 1000) / 1000, Math.round((-x * sin + y * cos) * 1000) / 1000];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcGluLmpzL3NwaW4uanMiXSwibmFtZXMiOlsiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlZmF1bHRzIiwibGluZXMiLCJ3aWR0aCIsInJhZGl1cyIsInNjYWxlIiwiY29ybmVycyIsImNvbG9yIiwiZmFkZUNvbG9yIiwiYW5pbWF0aW9uIiwicm90YXRlIiwiZGlyZWN0aW9uIiwic3BlZWQiLCJ6SW5kZXgiLCJjbGFzc05hbWUiLCJ0b3AiLCJsZWZ0Iiwic2hhZG93IiwicG9zaXRpb24iLCJTcGlubmVyIiwib3B0cyIsInNwaW4iLCJ0YXJnZXQiLCJzdG9wIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjc3MiLCJ0cmFuc2Zvcm0iLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiZHJhd0xpbmVzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJhbmltYXRlSWQiLCJjbGVhclRpbWVvdXQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ1bmRlZmluZWQiLCJwcm9wcyIsInByb3AiLCJzdHlsZSIsImdldENvbG9yIiwiaWR4IiwiYm9yZGVyUmFkaXVzIiwiTWF0aCIsInJvdW5kIiwic2hhZG93cyIsInBhcnNlQm94U2hhZG93IiwiZGVncmVlcyIsImJhY2tncm91bmRMaW5lIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInRyYW5zZm9ybU9yaWdpbiIsImRlbGF5IiwibGluZSIsImJveFNoYWRvdyIsIm5vcm1hbGl6ZVNoYWRvdyIsImFwcGVuZENoaWxkIiwicmVnZXgiLCJfaSIsIl9hIiwic3BsaXQiLCJtYXRjaGVzIiwibWF0Y2giLCJ4IiwieSIsInhVbml0cyIsInlVbml0cyIsInB1c2giLCJwcmVmaXgiLCJlbmQiLCJub3JtYWxpemVkIiwic2hhZG93c18xIiwieHkiLCJjb252ZXJ0T2Zmc2V0Iiwiam9pbiIsInJhZGlhbnMiLCJQSSIsInNpbiIsImNvcyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBSUEsV0FBWSxhQUFRLFVBQUtBLFFBQWQsSUFBMkJDLE9BQU9DLE1BQWxDLElBQTRDLFVBQVNDLENBQVQsRUFBWTtBQUNuRSxTQUFLLElBQUlDLENBQUosRUFBT0MsSUFBSSxDQUFYLEVBQWNDLElBQUlDLFVBQVVDLE1BQWpDLEVBQXlDSCxJQUFJQyxDQUE3QyxFQUFnREQsR0FBaEQsRUFBcUQ7QUFDakRELFlBQUlHLFVBQVVGLENBQVYsQ0FBSjtBQUNBLGFBQUssSUFBSUksQ0FBVCxJQUFjTCxDQUFkO0FBQWlCLGdCQUFJSCxPQUFPUyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNSLENBQXJDLEVBQXdDSyxDQUF4QyxDQUFKLEVBQ2JOLEVBQUVNLENBQUYsSUFBT0wsRUFBRUssQ0FBRixDQUFQO0FBREo7QUFFSDtBQUNELFdBQU9OLENBQVA7QUFDSCxDQVBEO0FBUUEsSUFBSVUsV0FBVztBQUNYQyxXQUFPLEVBREk7QUFFWE4sWUFBUSxDQUZHO0FBR1hPLFdBQU8sQ0FISTtBQUlYQyxZQUFRLEVBSkc7QUFLWEMsV0FBTyxHQUxJO0FBTVhDLGFBQVMsQ0FORTtBQU9YQyxXQUFPLE1BUEk7QUFRWEMsZUFBVyxhQVJBO0FBU1hDLGVBQVcsMkJBVEE7QUFVWEMsWUFBUSxDQVZHO0FBV1hDLGVBQVcsQ0FYQTtBQVlYQyxXQUFPLENBWkk7QUFhWEMsWUFBUSxHQWJHO0FBY1hDLGVBQVcsU0FkQTtBQWVYQyxTQUFLLEtBZk07QUFnQlhDLFVBQU0sS0FoQks7QUFpQlhDLFlBQVEscUJBakJHO0FBa0JYQyxjQUFVO0FBbEJDLENBQWY7QUFvQkEsSUFBSUMsVUFBVSxhQUFlLFlBQVk7QUFDckMsYUFBU0EsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDbkIsWUFBSUEsU0FBUyxLQUFL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R0FBSixHQUFVZCxJQUFJYSxHQUFmLElBQXNCLElBQWpDLElBQXlDLElBRHRDLEVBRUhsQyxLQUFLQyxLQUFMLENBQVcsQ0FBQyxDQUFDbUIsQ0FBRCxHQUFLYyxHQUFMLEdBQVdiLElBQUljLEdBQWhCLElBQXVCLElBQWxDLElBQTBDLElBRnZDLENBQVA7QUFJSCIsImZpbGUiOiJzcGluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgZGVmYXVsdHMgPSB7XG4gICAgbGluZXM6IDEyLFxuICAgIGxlbmd0aDogNyxcbiAgICB3aWR0aDogNSxcbiAgICByYWRpdXM6IDEwLFxuICAgIHNjYWxlOiAxLjAsXG4gICAgY29ybmVyczogMSxcbiAgICBjb2xvcjogJyMwMDAnLFxuICAgIGZhZGVDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBhbmltYXRpb246ICdzcGlubmVyLWxpbmUtZmFkZS1kZWZhdWx0JyxcbiAgICByb3RhdGU6IDAsXG4gICAgZGlyZWN0aW9uOiAxLFxuICAgIHNwZWVkOiAxLFxuICAgIHpJbmRleDogMmU5LFxuICAgIGNsYXNzTmFtZTogJ3NwaW5uZXInLFxuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgc2hhZG93OiAnMCAwIDFweCB0cmFuc3BhcmVudCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG59O1xudmFyIFNwaW5uZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3Bpbm5lcihvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgICAgIHRoaXMub3B0cyA9IF9fYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0cyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIHNwaW5uZXIgdG8gdGhlIGdpdmVuIHRhcmdldCBlbGVtZW50LiBJZiB0aGlzIGluc3RhbmNlIGlzIGFscmVhZHlcbiAgICAgKiBzcGlubmluZywgaXQgaXMgYXV0b21hdGljYWxseSByZW1vdmVkIGZyb20gaXRzIHByZXZpb3VzIHRhcmdldCBieSBjYWxsaW5nXG4gICAgICogc3RvcCgpIGludGVybmFsbHkuXG4gICAgICovXG4gICAgU3Bpbm5lci5wcm90b3R5cGUuc3BpbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc05hbWUgPSB0aGlzLm9wdHMuY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgncm9sZScsICdwcm9ncmVzc2JhcicpO1xuICAgICAgICBjc3ModGhpcy5lbCwge1xuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMub3B0cy5wb3NpdGlvbixcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgekluZGV4OiB0aGlzLm9wdHMuekluZGV4LFxuICAgICAgICAgICAgbGVmdDogdGhpcy5vcHRzLmxlZnQsXG4gICAgICAgICAgICB0b3A6IHRoaXMub3B0cy50b3AsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoXCIgKyB0aGlzLm9wdHMuc2NhbGUgKyBcIilcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUodGhpcy5lbCwgdGFyZ2V0LmZpcnN0Q2hpbGQgfHwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZHJhd0xpbmVzKHRoaXMuZWwsIHRoaXMub3B0cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3RvcHMgYW5kIHJlbW92ZXMgdGhlIFNwaW5uZXIuXG4gICAgICogU3RvcHBlZCBzcGlubmVycyBtYXkgYmUgcmV1c2VkIGJ5IGNhbGxpbmcgc3BpbigpIGFnYWluLlxuICAgICAqL1xuICAgIFNwaW5uZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGVJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRlSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZWwucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gU3Bpbm5lcjtcbn0oKSk7XG5leHBvcnQgeyBTcGlubmVyIH07XG4vKipcbiAqIFNldHMgbXVsdGlwbGUgc3R5bGUgcHJvcGVydGllcyBhdCBvbmNlLlxuICovXG5mdW5jdGlvbiBjc3MoZWwsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBwcm9wcykge1xuICAgICAgICBlbC5zdHlsZVtwcm9wXSA9IHByb3BzW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGxpbmUgY29sb3IgZnJvbSB0aGUgZ2l2ZW4gc3RyaW5nIG9yIGFycmF5LlxuICovXG5mdW5jdGlvbiBnZXRDb2xvcihjb2xvciwgaWR4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb2xvciA9PSAnc3RyaW5nJyA/IGNvbG9yIDogY29sb3JbaWR4ICUgY29sb3IubGVuZ3RoXTtcbn1cbi8qKlxuICogSW50ZXJuYWwgbWV0aG9kIHRoYXQgZHJhd3MgdGhlIGluZGl2aWR1YWwgbGluZXMuXG4gKi9cbmZ1bmN0aW9uIGRyYXdMaW5lcyhlbCwgb3B0cykge1xuICAgIHZhciBib3JkZXJSYWRpdXMgPSAoTWF0aC5yb3VuZChvcHRzLmNvcm5lcnMgKiBvcHRzLndpZHRoICogNTAwKSAvIDEwMDApICsgJ3B4JztcbiAgICB2YXIgc2hhZG93ID0gJ25vbmUnO1xuICAgIGlmIChvcHRzLnNoYWRvdyA9PT0gdHJ1ZSkge1xuICAgICAgICBzaGFkb3cgPSAnMCAycHggNHB4ICMwMDAnOyAvLyBkZWZhdWx0IHNoYWRvd1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2Ygb3B0cy5zaGFkb3cgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHNoYWRvdyA9IG9wdHMuc2hhZG93O1xuICAgIH1cbiAgICB2YXIgc2hhZG93cyA9IHBhcnNlQm94U2hhZG93KHNoYWRvdyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRzLmxpbmVzOyBpKyspIHtcbiAgICAgICAgdmFyIGRlZ3JlZXMgPSB+figzNjAgLyBvcHRzLmxpbmVzICogaSArIG9wdHMucm90YXRlKTtcbiAgICAgICAgdmFyIGJhY2tncm91bmRMaW5lID0gY3NzKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogLW9wdHMud2lkdGggLyAyICsgXCJweFwiLFxuICAgICAgICAgICAgd2lkdGg6IChvcHRzLmxlbmd0aCArIG9wdHMud2lkdGgpICsgJ3B4JyxcbiAgICAgICAgICAgIGhlaWdodDogb3B0cy53aWR0aCArICdweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBnZXRDb2xvcihvcHRzLmZhZGVDb2xvciwgaSksXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQnLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZShcIiArIGRlZ3JlZXMgKyBcImRlZykgdHJhbnNsYXRlWChcIiArIG9wdHMucmFkaXVzICsgXCJweClcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBkZWxheSA9IGkgKiBvcHRzLmRpcmVjdGlvbiAvIG9wdHMubGluZXMgLyBvcHRzLnNwZWVkO1xuICAgICAgICBkZWxheSAtPSAxIC8gb3B0cy5zcGVlZDsgLy8gc28gaW5pdGlhbCBhbmltYXRpb24gc3RhdGUgd2lsbCBpbmNsdWRlIHRyYWlsXG4gICAgICAgIHZhciBsaW5lID0gY3NzKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBnZXRDb2xvcihvcHRzLmNvbG9yLCBpKSxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgYm94U2hhZG93OiBub3JtYWxpemVTaGFkb3coc2hhZG93cywgZGVncmVlcyksXG4gICAgICAgICAgICBhbmltYXRpb246IDEgLyBvcHRzLnNwZWVkICsgXCJzIGxpbmVhciBcIiArIGRlbGF5ICsgXCJzIGluZmluaXRlIFwiICsgb3B0cy5hbmltYXRpb24sXG4gICAgICAgIH0pO1xuICAgICAgICBiYWNrZ3JvdW5kTGluZS5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZExpbmUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhcnNlQm94U2hhZG93KGJveFNoYWRvdykge1xuICAgIHZhciByZWdleCA9IC9eXFxzKihbYS16QS1aXStcXHMrKT8oLT9cXGQrKFxcLlxcZCspPykoW2EtekEtWl0qKVxccysoLT9cXGQrKFxcLlxcZCspPykoW2EtekEtWl0qKSguKikkLztcbiAgICB2YXIgc2hhZG93cyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBib3hTaGFkb3cuc3BsaXQoJywnKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHNoYWRvdyA9IF9hW19pXTtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBzaGFkb3cubWF0Y2gocmVnZXgpO1xuICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7IC8vIGludmFsaWQgc3ludGF4XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHggPSArbWF0Y2hlc1syXTtcbiAgICAgICAgdmFyIHkgPSArbWF0Y2hlc1s1XTtcbiAgICAgICAgdmFyIHhVbml0cyA9IG1hdGNoZXNbNF07XG4gICAgICAgIHZhciB5VW5pdHMgPSBtYXRjaGVzWzddO1xuICAgICAgICBpZiAoeCA9PT0gMCAmJiAheFVuaXRzKSB7XG4gICAgICAgICAgICB4VW5pdHMgPSB5VW5pdHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgPT09IDAgJiYgIXlVbml0cykge1xuICAgICAgICAgICAgeVVuaXRzID0geFVuaXRzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4VW5pdHMgIT09IHlVbml0cykge1xuICAgICAgICAgICAgY29udGludWU7IC8vIHVuaXRzIG11c3QgbWF0Y2ggdG8gdXNlIGFzIGNvb3JkaW5hdGVzXG4gICAgICAgIH1cbiAgICAgICAgc2hhZG93cy5wdXNoKHtcbiAgICAgICAgICAgIHByZWZpeDogbWF0Y2hlc1sxXSB8fCAnJyxcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgeFVuaXRzOiB4VW5pdHMsXG4gICAgICAgICAgICB5VW5pdHM6IHlVbml0cyxcbiAgICAgICAgICAgIGVuZDogbWF0Y2hlc1s4XSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBzaGFkb3dzO1xufVxuLyoqXG4gKiBNb2RpZnkgYm94LXNoYWRvdyB4L3kgb2Zmc2V0cyB0byBjb3VudGVyYWN0IHJvdGF0aW9uXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNoYWRvdyhzaGFkb3dzLCBkZWdyZWVzKSB7XG4gICAgdmFyIG5vcm1hbGl6ZWQgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIHNoYWRvd3NfMSA9IHNoYWRvd3M7IF9pIDwgc2hhZG93c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgc2hhZG93ID0gc2hhZG93c18xW19pXTtcbiAgICAgICAgdmFyIHh5ID0gY29udmVydE9mZnNldChzaGFkb3cueCwgc2hhZG93LnksIGRlZ3JlZXMpO1xuICAgICAgICBub3JtYWxpemVkLnB1c2goc2hhZG93LnByZWZpeCArIHh5WzBdICsgc2hhZG93LnhVbml0cyArICcgJyArIHh5WzFdICsgc2hhZG93LnlVbml0cyArIHNoYWRvdy5lbmQpO1xuICAgIH1cbiAgICByZXR1cm4gbm9ybWFsaXplZC5qb2luKCcsICcpO1xufVxuZnVuY3Rpb24gY29udmVydE9mZnNldCh4LCB5LCBkZWdyZWVzKSB7XG4gICAgdmFyIHJhZGlhbnMgPSBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkaWFucyk7XG4gICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZGlhbnMpO1xuICAgIHJldHVybiBbXG4gICAgICAgIE1hdGgucm91bmQoKHggKiBjb3MgKyB5ICogc2luKSAqIDEwMDApIC8gMTAwMCxcbiAgICAgICAgTWF0aC5yb3VuZCgoLXggKiBzaW4gKyB5ICogY29zKSAqIDEwMDApIC8gMTAwMCxcbiAgICBdO1xufVxuIl19