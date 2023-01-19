import { render, screen } from '@testing-library/react'
import List from './List'

const dataList = ['html', 'css', 'js']

describe('List component', () => {
  it('List renders', () => {
    render(<List items={dataList} />)

    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getByText('html')).toBeInTheDocument()
  })

  it('List renders without data', () => {
    render(<List />)

    expect(screen.queryByRole('list')).toBeNull()
  })

  it('List snapshot', () => {
    const view = render(<List items={ dataList }/>);

    expect(view).toMatchSnapshot();
  })

  it('List empty snapshot', () => {
    const view = render(<List />);

    expect(view).toMatchSnapshot();
  })
})