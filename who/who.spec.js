
var Who = require('./who');

describe('Name', function () {
  var who = new Who();

  it('gives one to you if no parameter given', function () {
    expect(who.name()).toEqual('One for you, one for me.');
  });

  it('gives one to Alice if \'Alice\' is given', function () {
    expect(who.name('Alice')).toEqual('One for Alice, one for me.');
  });
});
