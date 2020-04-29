export const View = () =>
  div({ class: 'KickStarter' }, [
    Link({ to: 'https://www.kickstarter.com/projects/evocell/evocell/' }, [
      img({ src: '/img/kickstarter.jpg', alt: 'support us on kickstarter' }),
    ]),
  ])

export const style = {
  width: '90%',
  textAlign: 'center',
  margin: '1em auto 0',
}
