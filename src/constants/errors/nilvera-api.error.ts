export class NilveraApiError extends Error {
    constructor(
        public message: string,
        public statusCode: number,
        public errorCode?: string,
        public errorDetails?: any,
        public requestUrl?: string,
        public requestData?: any,
        public curlCommand?: string
    ) {
        super(message);
        this.name = 'NilveraApiError';
    }

    toString(): string {
        return `NilveraApiError: ${this.message} (Status: ${this.statusCode}, Code: ${this.errorCode || 'N/A'})
Curl Command: ${this.curlCommand || 'N/A'}`;
    }
} 