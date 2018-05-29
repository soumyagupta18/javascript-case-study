var CokeSong = require('./coke-song');

describe('Song', function () {
  var song = new CokeSong();

  it('prints an arbitrary verse', function () {
    var expected = '8 cans of coke in the box, 8 cans of coke.\nTake one down and pass it around, 7 cans of coke in the box.\n';
    expect(song.verse(8)).toEqual(expected);
  });

  xit('handles 2 cans', function () {
    var expected = '2 cans of coke in the box, 2 cans of coke.\nTake one down and pass it around, 1 can of coke in the box.\n';
    expect(song.verse(2)).toEqual(expected);
  });

  xit('handles 1 can', function () {
    var expected = '1 can of coke in the box, 1 can of coke.\nTake it down and pass it around, no more cans of coke in the box.\n';
    expect(song.verse(1)).toEqual(expected);
  });

  xit('handles 0 cans', function () {
    var expected = 'No more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n';
    expect(song.verse(0)).toEqual(expected);
  });

  xit('sings several verses', function () {
    var expected = '8 cans of coke in the box, 8 cans of coke.\nTake one down and pass it around, 7 cans of coke in the box.\n\n7 cans of coke in the box, 7 cans of coke.\nTake one down and pass it around, 6 cans of coke in the box.\n\n6 cans of coke in the box, 6 cans of coke.\nTake one down and pass it around, 5 cans of coke in the box.\n';
    expect(song.sing(8, 6)).toEqual(expected);
  });

  xit('sings the rest of the verses', function () {
    var expected = '3 cans of coke in the box, 3 cans of coke.\nTake one down and pass it around, 2 cans of coke in the box.\n\n2 cans of coke in the box, 2 cans of coke.\nTake one down and pass it around, 1 can of coke in the box.\n\n1 can of coke in the box, 1 can of coke.\nTake it down and pass it around, no more cans of coke in the box.\n\nNo more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n';
    expect(song.sing(3)).toEqual(expected);
  });
});

