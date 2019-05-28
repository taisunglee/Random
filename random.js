var random = {
	resultData: [],
	valid: function (_no){
		var isExist = true;
		this.resultData.forEach(no => {
			if(_no === no) isExist = false;
		});
		return isExist;
	},
	result: function(minNo, maxNo, randomNo, sortType){

		if(isNaN(minNo) || isNaN(maxNo) || isNaN(randomNo)){
			return {isSucces: false, msg: '숫자만 입력하세요.', data: []};
		}

		if(minNo > maxNo){
			return {isSucces: false, msg: '최소값이 최대값보다 큽니다.', data: []};
		}

		this.resultData = [];
		var data = [];
		var max = 0;
		
		for(var i = minNo; i <= maxNo ; i++){
			var currentNo = parseInt(i);
			data.push(currentNo.toFixed(1));   

			for(var a = 1; a < 10 ; a++){
				currentNo = currentNo + (a * 0.1);

				data.push(currentNo.toFixed(1));   
			}
		}

		max = data.length;

		for(var i = 0 ; i < randomNo ; i++){
			var index = Math.floor( Math.random() * max);
			var val = data[index];
		
			if(this.valid(val)) this.resultData.push(data[index]);
			else i--;
			
		}
		if(sortType === 'asc'){
			this.resultData.sort((a, b) => {
				return a - b
			});
		}else{
			this.resultData.sort((a, b) => {
				return b - a;
			});
		}

		return {isSucces:true, msg:'ok', data: this.resultData};
	}
}

