export const View = state => [
  Social(state),
  LanguageSwitch(state),

  div({ class: 'hex__container' }, [
    div({ class: 'hex hero' }, [Hex(), WNWLogo(state)]),

    div({ class: 'hex about' }, [
      Hex(),
      div({ class: 'hex__content annotated' }, [
        p('we are a tribe of'),
        p('makers, programmers,'),
        p('engineers, philosophers,'),
        p('activists, hackers, artists,'),
        p('clowns, and scientists.'),

        h2([p('we are wizards and'), p(' witches at work')]),

        Link({ to: '/impressum/' }, 'impressum'),
      ]),
    ]),

    div({ class: 'hex small hexpaper' }, [
      div({ class: 'container' }, [
        Link({ class: 'hex__link', to: 'https://www.facebook.com/HexPapier/' }, [
          Hex(),
          span('Hexpaper'),
        ]),
      ]),
    ]),
  ]),
]
