/**
 * Generic type for API responses that include both the data and curl command
 * @template T The type of the response data
 */
export type ApiResponse<T> = {
    /** The actual response data */
    data: T;
    /** The curl command that can be used to reproduce the request */
    curlCommand: string;
}; 