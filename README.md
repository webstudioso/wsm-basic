 # Webstudio Basic Module

This module adds basic blocks such as image, video, iframe, text to the `Webstudio` editor

 ![Webstudio Module Basic](https://github.com/webstudioso/wsm-basic/actions/workflows/production.yml/badge.svg)

### Testing and Building Module
```
npm i
npm run test
npm run build
```

### Publish to NPMJS
```
npm publish
```

### Importing Dependency in Webstudio
Add it to the project, this is compatible with `grapesjs` as well.
```shell
npm i --save wsm-basic@latest
```
To import in the editor add the file and include it as a Plugin
```js
import PluginBasic from "wsm-basic"

const editor = grapesjs.init({
    container: "#gjs",
    plugins: [
        PluginBasic
    ],
})
```