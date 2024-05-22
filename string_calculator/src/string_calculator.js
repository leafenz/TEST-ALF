// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.find = function(map) {
	if(map===''){
		return 'Spaceship lost forever.'
	}
	else{
		let xPosition = map.indexOf('X');
    	return `${xPosition},0`;
	}
};
