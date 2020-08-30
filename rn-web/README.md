# Set up

### Web

`cd rtl/packages/web && yarn start`

### Mobile

`cd rtl/packages/app && wml add ../common ./node_modules/@rtl/common` (First time only!)
`cd rtl/packages/app && wml start`
`yarn start`

## Notes

- Mobile -> we are using a non hoisting technique to keep app react and react-native depenedencies in the local node_modules
- Mobile -> symlinking in react-native is an unresolved issue. Therefore, we are using wml to copy changes to the common dir to the native dir for faster development.
