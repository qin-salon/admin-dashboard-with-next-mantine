const PATH = {
  INDEX: "/",
  NOTIFICATION: "/notification",
  SETTINGS: "/settings",
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  FORGOT_PASSWORD: "/auth/forgot-password",
} as const;

/** @package */
export const getPath = (pathKey: keyof typeof PATH, ...args: string[]) => {
  const val = PATH[pathKey];

  if (!args) {
    return val;
  }

  const dirs = val.slice(1).split("/");

  const newPath = dirs.map((dir) => {
    if (dir.match(/\[.*?\]/)) {
      const replaceDir = args[0];
      args.shift();
      return replaceDir;
    }
    return dir;
  });

  return "/" + newPath.join("/");
};
