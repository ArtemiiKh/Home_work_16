function positive (arr) {
	const myArr = [];

	if (arr.length === 0) {
		return "Упс. Массив пустой"
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > 0) 
            myArr.push(arr[i]);
		}
	}

	if (myArr.length === 0) {
		return null;
	}

	return myArr;
}

// const arr = [1, 2, 3, -1, -2, -3]
// const arr = []
const arr = [ -1, -2, -3]

console.log(positive(arr));