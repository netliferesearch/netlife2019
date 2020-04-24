// Use this to show name of file/template
import clp from 'console-log-plus';

const isDevelopment = process.env.NODE_ENV === 'development';

export const showTemplateName = templateName => {
  if (isDevelopment) {
    clp({
      type: 'ok',
      prefix: `You're here`,
      message: `web/src/templates/${templateName}`
    });
  }
  return null;
}
