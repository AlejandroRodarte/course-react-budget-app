// require the real moment library
const moment = require.requireActual('moment');

// mock of the default moment() function
export default (timestamp = 0) => {
    return moment(timestamp);
};