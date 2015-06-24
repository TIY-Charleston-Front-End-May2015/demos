describe('Character Constructor', function () {

  beforeEach(function () {
    this.hero = new Character({name: "biffy, the comma slayer", ability: "OED"});
    this.villian = new Character({name: "grog, the tolerant drinker"});
  });

  it('should be instance of Character', function () {
    expect(this.hero).to.be.an.instanceof(Character);
  });

  it('should have defaults', function () {
    expect(this.villian.ability).to.be.equal("jump 10ft");
    expect(this.hero.life).to.be.equal(100);
    expect(this.villian.life).to.be.equal(100);
  });

  it('should have properties', function () {
    expect(this.hero.name).to.be.equal("biffy, the comma slayer");
    expect(this.villian.name).to.be.equal("grog, the tolerant drinker");
    expect(this.hero.ability).to.be.equal("OED");
    expect(this.villian.ability).to.be.equal("jump 10ft");
  });

  describe('attack method', function () {
    beforeEach(function () {
      this.myWeapon = new Weapon({});
    });
    it('check that attack exists and is a function', function () {
      expect(this.hero.attack).is.a('function');
    });

    it('attack a villian should reduce life by weapon power', function () {

      expect(this.villian.life).is.equal(100);
      this.hero.chance = 10;
      this.hero.attack(this.villian, this.myWeapon);
      expect(this.villian.life).is.equal(100 - this.myWeapon.power);


    });

  });

  describe('get Weapon method', function () {
    beforeEach(function () {
      this.hero.getWeapon("machete", "blade", 99);
    });

    it('character should be able to get weapon', function () {
       expect(this.hero.weapon.name).is.equal("machete");
    });
    it('should be able to use new weapon', function () {
      expect(this.villian.life).to.equal(100);
      this.hero.chance = 10;
      this.hero.attack(this.villian, this.hero.weapon);
      expect(this.villian.life).to.equal(1);

    });


  });


});
