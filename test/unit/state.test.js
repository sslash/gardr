var state = require('../../src/lib/state.js');

describe('state', function() {

    it('should be defined', function() {
        expect(state).toBeDefined();
    });

    it('creating a new state object', function(){

        var obj = state.create('someName');

        expect(obj).toEqual(jasmine.any(Object));
        expect(obj.state).toBe(0);
    });

    it('should replace PASTIES_UNIQUE_ID with a unique id', function () {
        var opts = {url: 'http://test.com/?misc=PASTIES_UNIQUE_ID&foo=bar'};
        var url1 = state.create('test_unique', opts).getData().url;
        var url2 = state.create('test_unique2', opts).getData().url;
        expect(url1.indexOf('PASTIES_UNIQUE_ID')).toEqual(-1);
        expect(url1).not.toEqual(url2.url);
    });

});