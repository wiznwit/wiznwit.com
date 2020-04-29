export const state = {
  lang: 'de',
}

export const View = state =>
  div({ class: 'impressum section' }, [
    Social(),
    LanguageSwitch(state),
    Link({ to: '/de/' }, Hat(state)),

    div({ class: 'slogan' }, [
      h1({ class: 'anim' }, 'WIZARDS @ WORK'),
      h2([
        span({ class: 'anim' }, 'magisch'),
        span({ class: 'anim' }, ' verwandelte'),
        span({ class: 'anim' }, ' paradigmen'),
      ]),

      p([
        'wir sind ein stamm von erfindern, programmierern, philosophen,',
        ' aktivisten, hackern, künstlern, clowns und wissenschaftlern.',
      ]),
      p('wir sind zauberer und hexen bei der arbeit.'),
    ]),

    div({ class: 'content' }, [
      h2('Impressum'),

      h3('Wizards at Work GmbH'),
      h4('IT-Dienstleistungen, Softwareentwicklung'),

      p('ATU: 71 16 08 06'),
      p('FN: 454377b'),
      p('FB-Gericht: Wien'),

      p('Firmensitz:'),
      p('Stolzenthalergasse 6/1A + 2A'),
      p('1080 Wien / Austria'),

      p([
        span('Email: '),
        a({ href: 'mailto:office@wizardsatwork.at' }, 'office@wizardsatwork.at'),
      ]),
      p('Mitglied der WKÖ, WKW'),
    ]),
  ])
