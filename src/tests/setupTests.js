// required to make Enzyme work with the React v16 adapter
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import dotEnv from 'dotenv';

dotEnv.config({ path: '.env.test' });

Enzyme.configure({
    adapter: new Adapter()
});