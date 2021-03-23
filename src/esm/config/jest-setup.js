import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({
  adapter: new Adapter()
}); // Make Enzyme functions available in all test files without importing

global.shallow = shallow;
global.render = render;
global.mount = mount;