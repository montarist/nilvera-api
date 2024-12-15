export const enum ItemType {
	Product = 1, // Ürün
	Service = 2, // Hizmet
}

/**
 * Enumeration representing different types of firms/companies
 * @enum {number}
 * @readonly
 * @description
 * This enum defines the classification of firms based on their organizational structure:
 * - Personal (0): Represents individual or sole proprietorship businesses
 * - Corporate (1): Represents corporate or institutional businesses
 *
 * @example
 * ```typescript
 * const firmType = FirmType.Personal; // 0
 * const companyType = FirmType.Corporate; // 1
 * ```
 *
 * @remarks
 * - This is a const enum which is completely removed during compilation for better performance
 * - Values are used in database and API communications
 * - Turkish translations are provided in comments for reference
 */
export const enum FirmType {
	Personal = 0, // Bireysel
	Corporate = 1, // Kurumsal
}

/**
 * Interface for withholding tax configuration
 * @interface Withholding
 * @property {string} code - Withholding tax code
 * @property {string} description - Withholding tax description
 * @property {number} rate - Withholding tax rate
 * @property {string} rateText - Withholding tax rate as text
 */
export interface Withholding {
	code: string;
	description?: string;
	rate?: number;
	rateText?: string;
}
