export const state = {
  title: '404 - not found',
}

export const View = state => [
  h3(state.title),
  p('Unfortunately, there is nothing here but nothingness.'),
  p([Link({ to: '/' }, 'Click here'), ' to get back to safety']),
]
