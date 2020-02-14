//@see https://github.com/yarnpkg/berry/issues/943

it('works with v3', () => {
    const {Link} = require('react-router');
    expect(Link).toBeTruthy();
});

it('works with v5', () => {
    const {Link} = require('react-router-dom');
    expect(Link).toBeTruthy();
});