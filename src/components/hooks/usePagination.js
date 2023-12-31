import {useMemo} from "react";

export const usePagination = (totalPages) => {
	let result = [];
	let resultArr = useMemo(() => {
		for (let i = 0; i < totalPages; i++) {
			result.push(i + 1);
		}
		return result;
	}, [totalPages])
	return resultArr;
}