declare module "csurf-sep" {
  import express from "express-serve-static-core";

  global {
    namespace Express {
      interface Request {
        csrfToken(): string;
      }
    }
  }

  function csurf(options?: {
    value?: (req: express.Request) => string;
    /**
     * @default false
     */
    cookie?: csurf.CookieOptions | boolean;
    ignoreMethods?: string[];
    sessionKey?: string;
  }): csurf.RequestHandler;

  namespace csurf {
    interface CookieOptions extends express.CookieOptions {
      /**
       * @default '_csrf'
       */
      key?: string;
    }

    interface RequestHandler extends express.RequestHandler {
      verify: () => express.RequestHandler;
      generate: () => express.RequestHandler;
    }
  }

  export = csurf;
}
