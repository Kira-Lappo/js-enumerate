var chai = require('chai');
const expect = chai.expect;
const iterate = require("./../enumeration.iterator").iterate;

// Arrange
var tenSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Defines a Mocha test suite to group tests of similar kind together
describe("Enumeration.Iterator Positive Tests", function () {

  it("where() : array has subset for condition : correct subset is returned", function () {
    // Act
    var result = iterate(tenSource)
      .where(i => i == 5)
      .toArray();

    // Assert
    expect(1).to.equal(result.length);
    expect(5).to.equal(result[0]);
  });

  it("count() : array not empty : correct value is returned", function () {
    // Act
    var result = iterate(tenSource)
      .count();

    // Assert
    expect(10).to.equal(result);
  });

  it("count(condition) : array has subset for condition : correct value is returned", function () {
    // Act
    var result = iterate(tenSource)
      .count(i => i % 2);

    // Assert
    expect(5).to.equal(result);
  });

  it("any() : array is not empty : true is returned", function () {
    // Act
    var result = iterate(tenSource)
      .any();

    // Assert
    expect(true).to.equal(result);
  });

  it("any() : array is empty : false is returned", function () {
    // Act
    var result = iterate([])
      .any();

    // Assert
    expect(false).to.equal(result);
  });

  it("all(condition) : all items are correct : true is returned", function () {
    // Act
    var result = iterate(tenSource)
      .all(i => i > 0);

    // Assert
    expect(true).to.equal(result);
  });

  it("concat(secondArray) : items are concatenated", function () {
    // Act
    var secondArray = [42, 3.14, 88];
    var result = iterate(tenSource)
      .concat(secondArray)
      .toArray();

    // Assert
    expect(secondArray.length + tenSource.length).to.equal(result.length);
  });

  it("contains(item) : array contains item : true is returned", function () {
    // Act
    var result = iterate(tenSource)
      .contains(5);

    // Assert
    expect(true).to.equal(result);
  });

  it("elementAt(index) : array contains item : correct value is returned", function () {
    // Act
    var result = iterate(tenSource)
      .elementAt(5);

    // Assert
    expect(6).to.equal(result);
  });

  it("toKeyValue(index) : array is converted correctly", function () {
    // Act
    var result = iterate(tenSource)
      .toKeyValue(i => "i" + i, i => i*3/2);

    // Assert
    expect(result["i1"]).to.equal(1*3/2);
    expect(result["i2"]).to.equal(2*3/2);
    expect(result["i3"]).to.equal(3*3/2);
    expect(result["i4"]).to.equal(4*3/2);
  });

  it("distinct() : unique elements remained only", function () {
    // Act
    var result = iterate([2,3,2,3,2,4])
      .distinct()
      .toArray();

    // Assert
    expect(3).to.equal(result.length);
    expect(true).to.equal(result.includes(2));
    expect(true).to.equal(result.includes(3));
    expect(true).to.equal(result.includes(4));
  });
});