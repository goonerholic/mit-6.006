// [1D-peak finding]
function find1DPick(A, i = 0, j = A.length - 1) {
	// base case
	if (i === j) {
		return A[i];
	}
	const m = Math.floor((i + j) / 2); // middle index
	if (A[m] < A[m - 1]) {
		return find1DPick(A, i, m - 1);
	} else if (A[m] < A[m + 1]) {
		return find1DPick(A, m + 1, j);
	} else {
		return A[m];
	}
}

function find2DPick(A, i = 0, j = A.length) {
	if (i === j) {
		return findGlobalMax(A[i])[0];
	}

	const m = Math.floor((i + j) / 2); // middle column index
	const [globalMax, row] = findGlobalMax(A[m]);
	if (A[m][row] < A[m - 1][row]) {
		return find2DPick(A, i, m - 1);
	} else if (A[m][row] < A[m + 1][row]) {
		return find2DPick(A, m + 1, j);
	} else {
		return A[m][row];
	}
}

function findGlobalMax(col) {
	let max = 0;
	let index = 0;
	col.forEach((e, i) => {
		if (e > max) {
			max = e;
			index = i;
		}
	});

	return [max, index];
}
