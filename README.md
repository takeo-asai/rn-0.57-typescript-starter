# rn-0.57-typescript-starter

TypeScript + Import alias path on React Native 0.57

1. Initialize project

```bash
$ react-native init sampleapp
$ cd sampleapp
$ yarn add -D typescript @types/react @types/react-native
```

2. Configure tsconfig & package.json to use alias path

Generate tsconfig.json

```bash
$ yarn tsc --init --pretty --jsx react
```

```json
{
    "compilerOptions": {
        ...
        "target": "es6",
        "lib": ["es6"],
        "noEmit": true
        "isolatedModules": true,
        "moduleResolution": "node",
        "baseUrl": "./",
        "paths": {
            "Containers": ["src/containers"],
            "Components": ["src/components"]
        },
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "experimentalDecorators": true,
        ...
    },
    "include": ["src"]
}
```
