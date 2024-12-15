export const PROFILE_PROFILE_ENDPOINTS = {
	GET_PROFILE_USERID: '/api/v1.0/profile/{userId}',
	PUT_PROFILE: '/api/v1.0/profile',
	POST_PROFILE_ALLOW_APPLICATIONS_TAXNO: '/api/v1.0/profile/allow-applications/{taxNo}',
	POST_PROFILE_ALLOW_APPLICATIONS_STATUS_APPLICATIONID_STATUS_TAXNO: '/api/v1.0/profile/allow-applications-status/{applicationId}/{status}/{taxNo}',
} as const;
