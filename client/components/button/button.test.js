
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Button from './button.js';

configure({adapter: new Adapter()});

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});