import { useReactToPrint } from 'react-to-print';

function useCustomHook(i) {
	return useReactToPrint({
		content: () => elRefs.current[i],
	});
}
