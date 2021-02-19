import React from 'react'
import { shallow } from 'enzyme'
import ArticlesPage from './ArticlesPage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/ArticlesPage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<ArticlesPage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<ArticlesPage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
