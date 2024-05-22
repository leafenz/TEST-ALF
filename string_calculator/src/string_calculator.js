// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.find = function(map) {
	if(map===''){
		return 'Spaceship lost forever.'
	}
	else{
		let xCount = (map.match(/X/) || []).length;
        if (xCount === 0) {
            return 'Spaceship lost forever.';
        }
		
		let xPosition = map.indexOf('X');
    	return `${xPosition},0`;
	}
};
