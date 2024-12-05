class LogoIsbasiApiError extends Error {
	constructor(message, statusCode) {
		super(message);
		this.name = 'LogoIsbasiApiError';
		this.statusCode = statusCode;
	}
}

export default LogoIsbasiApiError;
