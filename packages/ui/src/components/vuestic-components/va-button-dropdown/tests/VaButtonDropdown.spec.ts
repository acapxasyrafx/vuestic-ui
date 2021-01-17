import VaButtonDropdown from '../VaButtonDropdown.vue'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

describe('VaButtonDropdown', () => {
  // it('should render without an error', () => {
  //   const wrapper: any = mount(VaButtonDropdown)
  //   expect(wrapper.isVueInstance()).toBeTruthy()
  // })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaButtonDropdown as unknown) as ColorThemeMixin),
    ).not.toThrow()
  })
})
