import Dummy from '@/components/Dummy.vue'

describe('Dummy', () => {
  it('renders title', async () => {
    const { findByTestId } = global.mount(Dummy)
    expect(await findByTestId('title')).toHaveTextContent('Title')
  })
})
