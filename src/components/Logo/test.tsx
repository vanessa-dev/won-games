import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    //renderizar o commponente `render`
    //selecionar o elemento que a gente quer testar `screen` (queries) - getByLabel
    //expect - assertion
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color black it is passed', () => {
    //renderizar o commponente `render`
    //selecionar o elemento que a gente quer testar `screen` (queries) - getByLabel
    //expect - assertion
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
