export const HANGFIRE_HANGFIRE_ENDPOINTS = {
  POST_HANGFIRE_BATCH_INSERT: "/api/v1.0/hangfire/batch-insert",
  POST_HANGFIRE_SCHEDULED_BATCH_INSERT: "/api/v1.0/hangfire/scheduled/batch-insert",
  POST_HANGFIRE_EXECUTE_JOB: "/api/v1.0/hangfire/execute-job",
  GET_HANGFIRE: "/api/v1.0/hangfire",
  POST_HANGFIRE_GETJOBLIST: "/api/v1.0/hangfire/getjoblist",
} as const;