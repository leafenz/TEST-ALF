// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.find = function(map) {
	if(map){
		let rows = map.split('\n');
        for (let i = 0; i < rows.length; i++) {
            let col = rows[i].indexOf('X');
            if (col !== -1) {
                return `${col},${rows.length - 1 - i}`;
            }
        }
	}
	return 'Spaceship lost forever.';
	};