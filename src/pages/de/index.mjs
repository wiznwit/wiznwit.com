export const state = {
  lang: 'de',
}

export const View = state => [
  Social(),
  LanguageSwitch(state),

  div({ class: 'hex__container' }, [
    div({ class: 'hex hero' }, [Hex(), WNWLogo(state)]),

    div({ class: 'hex about' }, [
      Hex(),
      div({ class: 'hex__content annotated' }, [
        p('wir sind ein stamm von '),
        p('erfindern, programmierern,'),
        p('ingeneuren, philosophen,'),
        p('aktivisten, hackern, künstlern,'),
        p('clowns und wissenschaftlern.'),

        h2([p('wir sind hexen und'), p('zauberer bei der arbeit.')]),

        Link({ to: '/de/impressum/' }, 'impressum'),
      ]),
    ]),

    div({ class: 'hex small hexpaper' }, [
      div({ class: 'container' }, [
        Link({ class: 'hex__link', to: 'https://www.facebook.com/HexPapier/' }, [
          Hex(),
          span('Hexpapier'),
        ]),
      ]),
    ]),
  ]),
]
