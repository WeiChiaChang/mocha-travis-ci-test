var should = require('should');
var min = require('../lib/min');

describe('#min', function(){
    it('should return the minimum in array', function(done){
        var minimum = min([1, 10, 100, 1000]);
        minimum.should.equal(1);    // 測試有沒有取得正確的最小值
        done();
    })

    it('should return undefined when array is empty', function(done){
        var minimum = min([]);
        (minimum === undefined).should.be.true; // 測試有沒有傳回 undefined
        done();
    })
})