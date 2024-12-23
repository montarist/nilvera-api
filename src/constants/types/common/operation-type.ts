export const OPERATION_TYPE = {
	UNPRINT: 'UnPrint',
	PRINT: 'Print',
} as const;

export type OperationType = (typeof OPERATION_TYPE)[keyof typeof OPERATION_TYPE];
