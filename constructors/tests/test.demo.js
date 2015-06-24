var myObj = {
  name: "calvin",
  age: 50,
  fullname: function () {
    return this.name + " webster";
  }
};

describe('should be easy tests', function () {

  it('should be an object type', function () {
    expect(myObj).to.be.an('object');
  });

  it('fullname returns fullname string', function () {
    expect(myObj.fullname()).to.equal("calvin webster");
  });

  it('should work with expect', function() {
      expect(2).to.equal(2);
    });
});
