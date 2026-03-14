(function () {
  'use strict';

  /* ── Hide old nav/header/footer elements immediately ─── */
  var hideStyle = document.createElement('style');
  hideStyle.textContent = '#menu,#icatch,#navi,#header,div.menu,div.navi,div#footer,div#footMenu{display:none!important}body{padding-top:64px!important}';
  document.head.appendChild(hideStyle);

  /* ── Inject Google Fonts (Inter) ─────────────────────── */
  var fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans+JP:wght@400;700&display=swap';
  document.head.appendChild(fontLink);

  /* ── Inject header styles ─────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = [
    '#event-header {',
    '  position: fixed; top: 0; left: 0; right: 0; z-index: 9999;',
    '  height: 60px;',
    '  display: flex; align-items: center; justify-content: space-between;',
    '  padding: 0 1.5rem;',
    '  background: rgba(7,17,30,0.88);',
    '  backdrop-filter: blur(14px);',
    '  -webkit-backdrop-filter: blur(14px);',
    '  border-bottom: 1px solid rgba(255,255,255,0.07);',
    '  font-family: "Inter", "Noto Sans JP", sans-serif;',
    '}',
    '#event-header .eh-logo {',
    '  font-size: 1rem; font-weight: 700; color: #eef4ff !important;',
    '  text-decoration: none !important; letter-spacing: .02em;',
    '}',
    '#event-header nav { display: flex; gap: .25rem; }',
    '#event-header nav a {',
    '  color: #94b8d0 !important; font-size: .78rem; font-weight: 500;',
    '  text-decoration: none !important; padding: .35rem .65rem;',
    '  border-radius: 6px;',
    '  transition: background .2s, color .2s;',
    '}',
    '#event-header nav a:hover {',
    '  background: rgba(14,165,233,0.15);',
    '  color: #38bdf8 !important;',
    '}',
    '#event-header .eh-back {',
    '  font-size: .78rem; color: #94b8d0 !important;',
    '  text-decoration: none !important; padding: .35rem .65rem;',
    '  border: 1px solid rgba(255,255,255,0.12); border-radius: 6px;',
    '  transition: border-color .2s, color .2s;',
    '}',
    '#event-header .eh-back:hover {',
    '  border-color: rgba(14,165,233,0.5);',
    '  color: #38bdf8 !important;',
    '}',
    '@media (max-width: 600px) {',
    '  #event-header nav { display: none; }',
    '  #event-header .eh-logo { font-size: .9rem; }',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  /* ── Build header element ─────────────────────────────── */
  var header = document.createElement('div');
  header.id = 'event-header';

  /* Unicode escapes ensure correct rendering regardless of page charset */
  var logo = document.createElement('a');
  logo.className = 'eh-logo';
  logo.href = '/';
  /* \u6c34\u5de5\u5b66\u7814\u7a76\u5ba4 = 水工学研究室 */
  logo.textContent = '\u6c34\u5de5\u5b66\u7814\u7a76\u5ba4';
  header.appendChild(logo);

  var nav = document.createElement('nav');
  var navLinks = [
    /* \u30db\u30fc\u30e0 = ホーム */
    { href: '/',            label: '\u30db\u30fc\u30e0' },
    /* \u7814\u7a76\u30c6\u30fc\u30de = 研究テーマ */
    { href: '/#research',   label: '\u7814\u7a76\u30c6\u30fc\u30de' },
    /* \u30e1\u30f3\u30d0\u30fc = メンバー */
    { href: '/#members',    label: '\u30e1\u30f3\u30d0\u30fc' },
    /* \u6d3b\u52d5\u30d6\u30ed\u30b0 = 活動ブログ */
    { href: '/events.html', label: '\u6d3b\u52d5\u30d6\u30ed\u30b0' },
    /* \u30a2\u30af\u30bb\u30b9 = アクセス */
    { href: '/#access',     label: '\u30a2\u30af\u30bb\u30b9' }
  ];
  navLinks.forEach(function (item) {
    var a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.label;
    nav.appendChild(a);
  });
  header.appendChild(nav);

  var back = document.createElement('a');
  back.className = 'eh-back';
  back.href = '/events.html';
  /* \u2190 \u30d6\u30ed\u30b0\u4e00\u89a7 = ← ブログ一覧 */
  back.textContent = '\u2190 \u30d6\u30ed\u30b0\u4e00\u89a7';
  header.appendChild(back);

  /* ── Insert header at top of body ─────────────────────── */
  document.body.insertBefore(header, document.body.firstChild);

  /* ── Build & inject footer at end of body ─────────────── */
  var footer = document.createElement('div');
  footer.id = 'event-footer';

  var fLogo = document.createElement('div');
  fLogo.className = 'ef-logo';
  /* \u6c34\u5de5\u5b66\u7814\u7a76\u5ba4 = 水工学研究室 */
  fLogo.textContent = '\u6c34\u5de5\u5b66\u7814\u7a76\u5ba4';
  footer.appendChild(fLogo);

  var fAddr = document.createElement('div');
  fAddr.className = 'ef-address';
  /* 愛媛大学 工学部 社会基盤工学科 / 〒790-8577 愛媛県松山市文京町3 */
  fAddr.innerHTML =
    '\u611b\u5a9b\u5927\u5b66 \u5de5\u5b66\u90e8 \u793e\u4f1a\u57fa\u76e4\u5de5\u5b66\u79d1<br>' +
    '\u3012790-8577 \u611b\u5a9b\u770c\u677e\u5c71\u5e02\u6587\u4eac\u753a3';
  footer.appendChild(fAddr);

  var fSns = document.createElement('div');
  fSns.className = 'ef-sns';
  var fInsta = document.createElement('a');
  fInsta.href = 'https://www.instagram.com/suiko.lab.ehime?igsh=bWUyc3FoMjl5enpq&utm_source=qr';
  fInsta.target = '_blank';
  fInsta.rel = 'noopener noreferrer';
  fInsta.innerHTML =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>' +
    '<circle cx="12" cy="12" r="4"/>' +
    '<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>' +
    '</svg> @suiko.lab.ehime';
  fSns.appendChild(fInsta);
  footer.appendChild(fSns);

  var fCopy = document.createElement('p');
  fCopy.className = 'ef-copy';
  /* © 2025 Hydraulic Engineering Laboratory... */
  fCopy.textContent = '\u00a9 2025 Hydraulic Engineering Laboratory, Ehime University. All Rights Reserved.';
  footer.appendChild(fCopy);

  document.body.appendChild(footer);

})();
