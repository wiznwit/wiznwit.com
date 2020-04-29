export const state = {
  title: '404 - nicht gefunden',
  lang: 'de',
}

export const View = () => [
  h3(state.title),
  p('Hier ist leider nichts als Leere..'),
  p([Link({ to: '/' }, 'Klicke hier'), ' um ruhigere Gewässer zu erreichen.']),
]
