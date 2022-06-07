import React from 'react';
import { Button as Button$1 } from 'antd';

var index = function (_ref) {
  var title = _ref.title;
  return /*#__PURE__*/ React.createElement('h1', null, title);
};

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = '';
styleInject(css_248z);

var Button = function Button() {
  return /*#__PURE__*/ React.createElement(
    Button$1,
    {
      type: 'primary',
    },
    '\u6309\u94AE',
  );
};

export { Button, index as Foo };
