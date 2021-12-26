import { render, fireEvent, waitFor } from '@testing-library/react'
import SearchBar from '../forms/SearchBar'

const setup = (searchInput = '') => {
  const setSearchInput = jest.fn();
  const onSearch = jest.fn();

  const wrapper = render(<SearchBar
    searchInput={searchInput}
    searchUpdate={setSearchInput}
    onSearch={onSearch}
    searchId={'search'}
    submitId={'submit'}
  />)

  const input = wrapper.getByTestId('search')
  const submit = wrapper.getByTestId('submit')

  return {
    input,
    submit,
    setSearchInput,
    onSearch,
    ...wrapper,
  }
}

describe('<SearchBar /> ', () => {
  describe('has a search input that is', () => {
    it('rendered', () => {
      const { input } = setup()

      expect(input).toBeDefined()
    })

    it('onChange', () => {
      const { input } = setup()

      fireEvent.change(input, { target: { value: 'test...' } })

      expect(input.value).toBe('test...')
    })
  })

  describe('has a submit search button that is', () => {
    it('rendered', () => {
      const { submit } = setup()

      expect(submit).toBeDefined()
    })

    it('trigger callback on click', async () => {
      const { submit, onSearch } = setup('test')

      fireEvent.click(submit)

      expect(onSearch).toHaveBeenCalled();
    })
  })
})