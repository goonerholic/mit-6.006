/**
 *
 * @param {number[]} A
 */

function insertionSort(A) {
	for (let i = 1; i < A.length; i++) {
		let j = i;
		while (j > 0 && A[j] < A[j - 1]) {
			swap(A, j, j - 1);
			j--;
		}
	}
	return A;
}

function swap(A, i, j) {
	const temp = A[j];
	A[j] = A[i];
	A[i] = temp;
}

/**
 *
 * @param {number[]} A
 */

function mergeSort(A, i = 0, j = A.length) {
	// base case
	if (j - i <= 1) {
		return A.slice(i, j);
	}

	const n = Math.floor((i + j) / 2);
	const left = mergeSort(A, i, n);
	const right = mergeSort(A, n, j);
	return merge(left, right);

	// 0, 1, 2, 3, 4, 5 // n = 3 // 0, 1, 2, 3 //
}

/**
 *
 * @param {number[]} A
 * @param {number[]} B
 */
function merge(A, B) {
	const merged = [];
	while (A.length || B.length) {
		if (!A.length) {
			merged.push(...B);
			break;
		}
		if (!B.length) {
			merged.push(...A);
			break;
		}
		if (A[0] <= B[0]) {
			merged.push(A.shift());
		} else {
			merged.push(B.shift());
		}
	}
	return merged;
}

console.log(insertionSort([4, 3, 5, 2, 6, 7]));
console.log(mergeSort([4, 3, 5, 2, 6, 7]));
console.log(merge([1, 3, 5], [2, 4, 6]));
