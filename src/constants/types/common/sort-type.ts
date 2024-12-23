export const SORT_TYPE = {
	ASC: 'ASC',
	DESC: 'DESC',
} as const;

export type SortType = (typeof SORT_TYPE)[keyof typeof SORT_TYPE];
