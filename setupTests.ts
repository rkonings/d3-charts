// https://medium.com/@salihunuruddeen/how-to-configure-jestjs-unit-test-environment-for-test-in-react-js-7b8b6b9a2a0b
import 'jsdom-global/register';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() });
