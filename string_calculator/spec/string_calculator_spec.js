describe('Spaceship', function() {
	beforeEach(function() {
		spaceshipFinder = new StringCalculator();
	});

	it('should return "Spaceship lost forever." for an empty string', function() {
		expect(spaceshipFinder.find('')).toEqual("Spaceship lost forever.");
	});
	it('should return "4,0" for the row: ....X....', function() {
		expect(spaceshipFinder.find('....X....')).toEqual("4,0");
	});
	it('should return "Spaceship lost forever." for the map: „..........\n..........\n..........\n..........\n..........\n..........“', function() {
		expect(spaceshipFinder.find('..........\n..........\n..........\n..........\n..........\n..........')).toEqual("Spaceship lost forever.");
	});
	it('should return "0,0" for the map: ..........\n..........\n..........\n..........\n..........\nX.........', function() {
		expect(spaceshipFinder.find('..........\n..........\n..........\n..........\n..........\nX.........')).toEqual("0,0");
	});
	it('should return "0,0" for the map: ..........\n..........\n..........\n..........\n..........\nX.........', function() {
		expect(spaceshipFinder.find('..........\n..........\n..........\n..........\n..........\nX.........')).toEqual("0,0");
	});
	it('should return "9,0" for the map: "..........\n..........\n..........\n..........\n..........\n.........X"', function() {
        expect(spaceshipFinder.find('..........\n..........\n..........\n..........\n..........\n.........X')).toEqual("9,0");
	});
	it('should return [7, 2] for the map: "..........\n..........\n..........\n.......X..\n..........\n.........."', function() {
        expect(spaceshipFinder.find('..........\n..........\n..........\n.......X..\n..........\n..........')).toEqual("7,2");
    });

});