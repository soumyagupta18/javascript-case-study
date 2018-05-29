var School = require('./student-grade');

describe('School', function () {
  var school;

  beforeEach(function () {
    school = new School();
  });

  it('a new school has an empty roster', function () {
    expect(school.roster()).toEqual({});
  });

  xit('adding a student adds them to the roster for the given grade', function () {
    school.add('Aamir', 2);
    var expectedDb = { 2: [ 'Aamir' ] };
    expect(school.roster()).toEqual(expectedDb);
  });

  xit('adding more students to the same grade adds them to the roster', function () {
    school.add('Bhavana', 2);
    school.add('James', 2);
    school.add('Pari', 2);
    var expectedDb = { 2: [ 'Bhavana', 'James', 'Pari' ] };
    expect(school.roster()).toEqual(expectedDb);
  });

  xit('adding students to different grades adds them to the roster', function () {
    school.add('Chetan', 3);
    school.add('Shruti', 7);
    var expectedDb = { 3: [ 'Chetan' ], 7: [ 'Shruti' ] };
    expect(school.roster()).toEqual(expectedDb);
  });

  xit('grade returns the students in that grade in alphabetical order', function () {
    school.add('Faizan', 5);
    school.add('Tanveer', 5);
    school.add('Sapna', 1);
    var expectedStudents = [ 'Tanveer', 'Faizan' ];
    expect(school.grade(5)).toEqual(expectedStudents);
  });

  xit('grade returns an empty array if there are no students in that grade', function () {
    expect(school.grade(1)).toEqual([]);
  });

  xit('the students names in each grade in the roster are sorted', function () {
    school.add('Jennifer', 4);
    school.add('Kareem', 6);
    school.add('Christopher', 4);
    school.add('Kyle', 3);
    var sorted = {
      3: [ 'Kyle' ],
      4: [ 'Christopher', 'Jennifer' ],
      6: [ 'Kareem' ]
    };
    expect(school.roster()).toEqual(sorted);
  });
});
