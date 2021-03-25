# app-layout

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test-unit
```

### Run your end-to-end tests
```
yarn test-e2e
```

### Release the package
```
yarn release
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Usage

Requires vue@2.x, vuetify@2.x and lodash@4.x

Install the package in your project

```
yarn add @4tw/ui-app-layout
```

Register the component in your project

``` javascript
import AppLayout from '@4tw/ui-app-layout'

export default {
    name: 'MyAwesomeComponent',
    components: { AppLayout },
}
```

Use the component in your projects template

``` html
<template>
    <AppLayout>
        <!-- Your code goes here -->
    </AppLayout>
</template>
```

### Api

**Props**

| Name         | Type    | Default | Description                                           |
|--------------|---------|---------|-------------------------------------------------------|
| apps         | Array   | []      | The apps listed in the AppSwitcher                    |
| currentApp   | Object  | null    | The current selected app in the AppSwitcher           |
| customer     | String  | ''      | Will be listed in the toolbar next to the AppSwitcher |
| version      | String  | ''      | Will be listed next to the company attribution        |
| showHelp     | Boolean | false   | Enables the Help Button                               |
| showFeedback | Boolean | false   | Enables the feedback Button                           |
| miniVariant  | Boolean | false   | Enables the mini variant of the navigation            |

**Events**

| Name                | Description                                                                        |
|---------------------|------------------------------------------------------------------------------------|
| help                | Emits when the help button has been clicked                                        |
| feedback            | Emits when the feedback button has been clicked                                    |
| update:current-app  | Emits the current app when the current app has been changed                        |
| update:mini-variant | Emits the current state of the mini variant when the mini variant has been changed |

**Slots**

| Name            | Description                                                                   |
|-----------------|-------------------------------------------------------------------------------|
| navigation-main | Slot to fill in the navigation items                                          |
| navigation-root | Slot to replace the whole navigation drawer                                   |
| toolbar-main    | Slot to fill in the left section of the toolbar                               |
| toolbar-root    | Slot to replace the whole toolbar                                             |
| toolbar-actions | Slot to fill in actions for the toolbar next to the user menu                 |
| fallback-app    | Slot to define an app when no other apps are available                        |
| usermenu        | Slot to fill in the usermenu                                                  |
| avatar          | Slot to replace the whole avatar                                              |
| avatar-image    | Slot to set image of the user avatar                                          |
| default         | Slot to define the content section. Usually needs a `v-main` to work properly |
