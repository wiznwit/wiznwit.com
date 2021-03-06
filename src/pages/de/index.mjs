export const state = {
  lang: 'de',
}

export const View = state => [
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
      ]),
    ]),
  ]),
]
