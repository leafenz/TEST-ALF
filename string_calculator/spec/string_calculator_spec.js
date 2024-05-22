describe('Spaceship', function() {
	beforeEach(function() {
		spaceshipFinder = new StringCalculator();
	});

	it('should return "Spaceship lost forever." for an empty string', function() {
		expect(spaceshipFinder.find('')).toEqual("Spaceship lost forever.");
	});

	it('should return "Spaceship lost forever." for an empty string', function() {
		expect(spaceshipFinder.find('....X....')).toEqual("4,0");
	});

});