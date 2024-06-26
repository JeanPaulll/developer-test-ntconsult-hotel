/*! Selectric ϟ v1.9.3 (2015-04-23) - git.io/tjl9sQ - Copyright (c) 2015 Leonardo Santos - Dual licensed: MIT/GPL */
!(function (e) {
  'use strict'
  var t = 'selectric',
    s =
      'Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll Group GroupLabel',
    o = '.sl',
    i = {
      onChange: function (t) {
        e(t).change()
      },
      maxHeight: 300,
      keySearchTimeout: 500,
      arrowButtonMarkup: '<b class="button">&#x25be;</b>',
      disableOnMobile: !0,
      openOnHover: !1,
      hoverIntentTimeout: 500,
      expandToItemText: !1,
      responsive: !1,
      preventWindowScroll: !0,
      inheritOriginalWidth: !1,
      allowWrap: !0,
      customClass: { prefix: t, camelCase: !1, overwrite: !0 },
      optionsItemBuilder: '{text}',
      labelBuilder: '{text}'
    },
    n = {
      add: function (e, t, s) {
        this[e] || (this[e] = {}), (this[e][t] = s)
      },
      remove: function (e, t) {
        delete this[e][t]
      }
    },
    l = {
      replaceDiacritics: function (e) {
        for (
          var t = '40-46 50-53 54-57 62-70 71-74 61 47 77'.replace(/\d+/g, '\\3$&').split(' '),
            s = t.length;
          s--;

        )
          e = e.toLowerCase().replace(RegExp('[' + t[s] + ']', 'g'), 'aeiouncy'.charAt(s))
        return e
      },
      format: function (e) {
        var t = arguments
        return ('' + e).replace(/{(\d+|(\w+))}/g, function (e, s, o) {
          return o && t[1] ? t[1][o] : t[s]
        })
      },
      nextEnabledItem: function (e, t) {
        for (; e[(t = (t + 1) % e.length)].disabled; );
        return t
      },
      previousEnabledItem: function (e, t) {
        for (; e[(t = (t > 0 ? t : e.length) - 1)].disabled; );
        return t
      },
      toDash: function (e) {
        return e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      },
      triggerCallback: function (s, o) {
        var i = o.element,
          a = o.options['on' + s]
        e.isFunction(a) && a.call(i, i, o),
          n[s] &&
            e.each(n[s], function () {
              this.call(i, i, o)
            }),
          e(i).trigger(t + '-' + l.toDash(s), o)
      }
    },
    a = e(document),
    r = e(window),
    c = function (n, c) {
      function d(t) {
        if (
          ((j.options = e.extend(!0, {}, i, j.options, t)),
          (j.classes = {}),
          (j.element = n),
          l.triggerCallback('BeforeInit', j),
          j.options.disableOnMobile && Y)
        )
          return void (j.disableOnMobile = !0)
        C(!0)
        var o = j.options.customClass,
          a = s.split(' '),
          r = F.width()
        e.each(a, function (e, t) {
          var s = o.prefix + t
          j.classes[t.toLowerCase()] = o.camelCase ? s : l.toDash(s)
        }),
          (x = e('<input/>', { class: j.classes.input, readonly: Y })),
          (k = e('<div/>', { class: j.classes.items, tabindex: -1 })),
          (T = e('<div/>', { class: j.classes.scroll })),
          (D = e('<div/>', {
            class: o.prefix,
            html: j.options.arrowButtonMarkup
          })),
          (I = e('<p class="label"/>')),
          (y = F.wrap('<div>').parent().append(D.prepend(I), k, x)),
          (A = { open: m, close: g, destroy: C, refresh: u, init: d }),
          F.on(A).wrap('<div class="' + j.classes.hideselect + '">'),
          e.extend(j, A),
          ($ = j.options.labelBuilder),
          j.options.inheritOriginalWidth && r > 0 && y.width(r),
          p()
      }

      function p() {
        j.items = []
        var t = F.children(),
          s = '<ul>',
          i = t.filter(':selected').index(),
          n = 0
        ;(B = S = ~i ? i : 0),
          (E = t.length) &&
            (t.each(function () {
              function t() {
                var t = e(this),
                  o = t.html(),
                  i = t.prop('disabled'),
                  a = j.options.optionsItemBuilder
                ;(j.items[n] = {
                  element: t,
                  value: t.val(),
                  text: o,
                  slug: l.replaceDiacritics(o),
                  disabled: i
                }),
                  (s += l.format(
                    '<li data-index="{1}" class="{2}">{3}</li>',
                    n,
                    e.trim(
                      [
                        n == B ? 'selected' : '',
                        n == E - 1 ? 'last' : '',
                        i ? 'disabled' : ''
                      ].join(' ')
                    ),
                    e.isFunction(a) ? a(j.items[n], t, n) : l.format(a, j.items[n])
                  )),
                  n++
              }

              var o = e(this)
              if (o.is('optgroup')) {
                var i = o.prop('disabled'),
                  a = o.children()
                ;(s += l.format(
                  '<ul class="{1}"><li class="{2}">{3}</li>',
                  e.trim([j.classes.group, i ? 'disabled' : '', o.prop('class')].join(' ')),
                  j.classes.grouplabel,
                  o.prop('label')
                )),
                  i && a.prop('disabled', !0),
                  a.each(t),
                  (s += '</ul>')
              } else t.call(o)
            }),
            k.append(T.html(s + '</ul>')),
            I.html(e.isFunction($) ? $(j.items[B]) : l.format($, j.items[B]))),
          D.add(F).add(y).add(x).off(o),
          y.prop(
            'class',
            [
              j.classes.wrapper,
              j.options.customClass.overwrite
                ? F.prop('class').replace(/\S+/g, j.options.customClass.prefix + '-$&')
                : F.prop('class'),
              j.options.responsive ? j.classes.responsive : ''
            ].join(' ')
          ),
          F.prop('disabled')
            ? (y.addClass(j.classes.disabled), x.prop('disabled', !0))
            : ((R = !0),
              y
                .removeClass(j.classes.disabled)
                .on('mouseenter' + o + ' mouseleave' + o, function (t) {
                  e(this).toggleClass(j.classes.hover),
                    j.options.openOnHover &&
                      (clearTimeout(j.closeTimer),
                      'mouseleave' == t.type
                        ? (j.closeTimer = setTimeout(g, j.options.hoverIntentTimeout))
                        : m())
                }),
              D.on('click' + o, function (e) {
                L ? g() : m(e)
              }),
              x
                .prop({ tabindex: P, disabled: !1 })
                .on('keypress' + o, h)
                .on('keydown' + o, function (e) {
                  h(e),
                    clearTimeout(j.resetStr),
                    (j.resetStr = setTimeout(function () {
                      x.val('')
                    }, j.options.keySearchTimeout))
                  var t = e.keyCode || e.which
                  if (t > 36 && 41 > t) {
                    if (
                      !j.options.allowWrap &&
                      ((39 > t && 0 == S) || (t > 38 && S + 1 == j.items.length))
                    )
                      return
                    b(l[(39 > t ? 'previous' : 'next') + 'EnabledItem'](j.items, S))
                  }
                })
                .on('focusin' + o, function (e) {
                  x.one('blur', function () {
                    x.blur()
                  }),
                    L || m(e)
                })
                .on('oninput' in x[0] ? 'input' : 'keyup', function () {
                  x.val().length &&
                    e.each(j.items, function (e, t) {
                      return RegExp('^' + x.val(), 'i').test(t.slug) && !t.disabled
                        ? (b(e), !1)
                        : void 0
                    })
                }),
              F.prop('tabindex', !1),
              (O = e('li', k.removeAttr('style'))
                .on({
                  mousedown: function (e) {
                    e.preventDefault(), e.stopPropagation()
                  },
                  click: function () {
                    return b(e(this).data('index'), !0), !1
                  }
                })
                .filter('[data-index]'))),
          l.triggerCallback('Init', j)
      }

      function u() {
        l.triggerCallback('Refresh', j), p()
      }

      function h(e) {
        var t = e.keyCode || e.which
        13 == t && e.preventDefault(), /^(9|13|27)$/.test(t) && (e.stopPropagation(), b(S, !0))
      }

      function f() {
        var e = k.closest(':visible').children(':hidden').addClass(j.classes.tempshow),
          t = j.options.maxHeight,
          s = k.outerWidth(),
          o = D.outerWidth() - (s - k.width())
        !j.options.expandToItemText || o > s
          ? (M = o)
          : (k.css('overflow', 'scroll'),
            y.width(9e4),
            (M = k.width()),
            k.css('overflow', ''),
            y.width('')),
          k.width(M).height() > t && k.height(t),
          e.removeClass(j.classes.tempshow)
      }

      function m(s) {
        l.triggerCallback('BeforeOpen', j),
          s && (s.preventDefault(), s.stopPropagation()),
          R &&
            (f(),
            e('.' + j.classes.hideselect, '.' + j.classes.open)
              .children()
              [t]('close'),
            (L = !0),
            (H = k.outerHeight()),
            (W = k.height()),
            y.addClass(j.classes.open),
            x.val('').is(':focus') || x.focus(),
            a.on('click' + o, g).on('scroll' + o, v),
            v(),
            j.options.preventWindowScroll &&
              a.on('mousewheel' + o + ' DOMMouseScroll' + o, '.' + j.classes.scroll, function (t) {
                var s = t.originalEvent,
                  o = e(this).scrollTop(),
                  i = 0
                'detail' in s && (i = -1 * s.detail),
                  'wheelDelta' in s && (i = s.wheelDelta),
                  'wheelDeltaY' in s && (i = s.wheelDeltaY),
                  'deltaY' in s && (i = -1 * s.deltaY),
                  ((o == this.scrollHeight - W && 0 > i) || (0 == o && i > 0)) && t.preventDefault()
              }),
            w(S),
            l.triggerCallback('Open', j))
      }

      function v() {
        y.toggleClass(
          j.classes.above,
          y.offset().top + y.outerHeight() + H > r.scrollTop() + r.height()
        )
      }

      function g() {
        if ((l.triggerCallback('BeforeClose', j), B != S)) {
          l.triggerCallback('BeforeChange', j)
          var t = j.items[S].text
          F.prop('selectedIndex', (B = S)).data('value', t),
            I.html(e.isFunction($) ? $(j.items[S]) : l.format($, j.items[S])),
            l.triggerCallback('Change', j)
        }
        a.off(o), y.removeClass(j.classes.open), (L = !1), l.triggerCallback('Close', j)
      }

      function b(e, t) {
        void 0 != e &&
          (j.items[e].disabled ||
            (O.removeClass('selected')
              .eq((S = e))
              .addClass('selected'),
            w(e),
            t && g()))
      }

      function w(e) {
        var t = O.eq(e).outerHeight(),
          s = O[e].offsetTop,
          o = T.scrollTop(),
          i = s + 2 * t
        T.scrollTop(i > o + H ? i - H : o > s - t ? s - t : o)
      }

      function C(e) {
        R &&
          (k.add(D).add(x).remove(),
          !e && F.removeData(t).removeData('value'),
          F.prop('tabindex', P).off(o).off(A).unwrap().unwrap(),
          (R = !1))
      }

      var x,
        k,
        T,
        D,
        I,
        y,
        O,
        S,
        B,
        H,
        W,
        M,
        E,
        A,
        $,
        j = this,
        F = e(n),
        L = !1,
        R = !1,
        Y = /android|ip(hone|od|ad)/i.test(navigator.userAgent),
        P = F.prop('tabindex')
      d(c)
    }
  ;(e.fn[t] = function (s) {
    return this.each(function () {
      var o = e.data(this, t)
      o && !o.disableOnMobile
        ? '' + s === s && o[s]
          ? o[s]()
          : o.init(s)
        : e.data(this, t, new c(this, s))
    })
  }),
    (e.fn[t].hooks = n)
})(jQuery)
