export const EXPORT_TYPE = {
	XML: 'Xml',
	PDF: 'Pdf',
	ONE_PAGE_PDF: 'OnePagePdf',
} as const;

export type ExportType = (typeof EXPORT_TYPE)[keyof typeof EXPORT_TYPE];
