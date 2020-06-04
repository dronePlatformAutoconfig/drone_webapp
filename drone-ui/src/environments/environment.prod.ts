// This environment is used in production. It has authentication enabled, so if you use it locally make sure you
// created an AWS user pool and configured 'src/aws-exports.ts'.

// WARNING: This is a **sample** file. It will be overwritten by Terraform bootstrapping scripts.
// The 'hostname' will be assigned the elastic IP address.

export const environment = {
  production: true,
  hostname: 'localhost',
  authenticationEnabled: true
};
