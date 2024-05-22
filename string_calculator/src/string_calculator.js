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
		let rows = map.split('\n');
        for (let i = 0; i < rows.length; i++) {
            let col = rows[i].indexOf('X');
            if (col !== -1) {
                return `${col},${rows.length - 1 - i}`;
            }
        }
		
		let xPosition = map.indexOf('X');
    	return `${xPosition},0`;
	}
};
