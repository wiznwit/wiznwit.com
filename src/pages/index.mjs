export const View = state => [
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
      ]),
    ]),
  ]),
]
