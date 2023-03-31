import middy from "@middy/core";
import cors from "@middy/http-cors";
import httpSecurityHeaders from "@middy/http-security-headers";

/**
 * Creates a Lambda handler with the necessary middlewares.
 *
 * @param handler - Lambda handler to wrap in middleware.
 * @returns Handler with middleware.
 */
export function createHandler(handler: any) {
  const h = middy(handler);
  h.use(cors()).use(httpSecurityHeaders());
  return h;
}
