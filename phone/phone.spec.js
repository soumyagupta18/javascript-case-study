var PhoneNumber = require('./phone');

describe('PhoneNumber()', function () {
  it('cleans the number', function () {
    var phone = new PhoneNumber('(223) 456-7890');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('cleans numbers with dots', function () {
    var phone = new PhoneNumber('223.456.7890');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('cleans numbers with multiple spaces', function () {
    var phone = new PhoneNumber('223 456   7890   ');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('invalid when 9 digits', function () {
    var phone = new PhoneNumber('123456789');
    expect(phone.number()).toEqual(null);
  });

  xit('invalid when 11 digits does not start with a 1', function () {
    var phone = new PhoneNumber('22234567890');
    expect(phone.number()).toEqual(null);
  });

  xit('valid when 11 digits and starting with 1', function () {
    var phone = new PhoneNumber('12234567890');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('valid when 11 digits and starting with 1 even with punctuation', function () {
    var phone = new PhoneNumber('+1 (223) 456-7890');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('invalid when more than 11 digits', function () {
    var phone = new PhoneNumber('321234567890');
    expect(phone.number()).toEqual(null);
  });
});
