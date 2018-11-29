# rn-0.57-typescript-starter

TypeScript + Import alias path on React Native 0.57

## 1. Initialize project

```bash
$ react-native init sampleapp
$ cd sampleapp
$ yarn add -D typescript @types/react @types/react-native
```

## 2. Configure tsconfig & package.json to use alias path

### Generate tsconfig.json & modify it for react-native

```bash
$ yarn tsc --init --pretty --jsx react
```

```json
// root/package.json
{
    "compilerOptions": {
        ...
        "target": "es6",
        "lib": ["es6"],
        "noEmit": true,
        "isolatedModules": true,
        "moduleResolution": "node",
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "experimentalDecorators": true,
        ...
    },
    "include": ["src"]
}
```

### Add & Modify package.json to use alias path

```json
// root/package.json
{
    "compilerOptions": {
        ...
        "baseUrl": "./",
        "paths": {
            "Containers": ["src/containers"],
            "Components": ["src/components"]
        }
        ...
    }
}
```

```json
// root/src/containers/package.json
{
    "name": "Containers"
}

// root/src/components/package.json
{
    "name": "Components"
}
```

### 3. Then use alias path from any components

```java
// src/components/index.ts
import Sample from "./Sample";

export { Sample };

// src/containers/SampleContainer
import { Sample } from "Components";

class SampleContainer extends React.Component {
  public render() {
    return <Sample>{this.props.children}</Sample>;
  }
}
```
