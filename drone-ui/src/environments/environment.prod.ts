// This environment is used in production. It has authentication enabled, so if you use it locally make sure you
// created an AWS user pool and configured 'src/aws-exports.ts'.

// WARNING: This is a **sample** file. It will be overwritten by Terraform bootstrapping scripts.

// FIXME: currently 'environment.ts' is replaced by prod configuration in Terraform, because for whatever reason
// dev environment is built in Docker even with 'npm build --prod', so it's easier to replace dev config with generated
// prod config instead.

export const environment = {
  production: true,
  authenticationEnabled: false
};
