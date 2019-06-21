# React SharePoint Monorepository

 This is a monorepository project to create SharePoint Webparts in React.

 It contains 4 packages linked with lerna:

 - commons
 - app
 - sharepoint
 - storybook

Main libraries used: 

- @uirouter/react: 0.8.7
- axios: 0.18.0
- formik: 1.4.2
- i18next: 15.0.2
- office-ui-fabric-react: 5.131.0
- react: 16.3.2
- react-ga: 2.5.7
- redux: 4.0.1
- redux-saga: 0.16.2 
- yup: 0.26.6

# Prerequisites

  - Node Version  > 8.13.0 <= 9.0
  - Lerna: ```npm install -g lerna```
  - yeoman(yo):  ```npm install -g yo```
    - generator sharePoint ```npm install -g @microsoft/generator-sharepoint@1.7.1```

# Getting Started
## Install
To install the project execute in the root folder:

```bash
npm install
```
## Execute Application

To execute a package start it by executing in a separated terminal:

```bash
npm start
```