const middy = require("@middy/core");
const cors = require("@middy/http-cors");
const httpSecurityHeaders = require("@middy/http-security-headers");

/**
 * Creates a Lambda handler with the necessary middlewares.
 *
 * @param handler - Lambda handler to wrap in middleware.
 * @returns Handler with middleware.
 */
function createHandler(handler) {
  return middy(handler).use(cors()).use(httpSecurityHeaders());
}

module.exports = createHandler;
