# sb-client

## Getting started
If you do not have `yarn` installed, install it globally:
```bash
npm install -g yarn
```

Then, install the dependencies for the project:
```bash
yarn
```

## Development

First, it is necessary to compile the client-side config file
```bash
yarn run generate-config:dev
```

To run the app in development mode,
```bash
yarn run start:dev
```

Then, navigate to `localhost:9090` in your browser of choice.

In development mode, the Webpack Dev Server has
Hot Module Replacement enabled and will recompile
when changes occur in the `app` directory.

To run the mock API:
```bash
yarn run mock-api
```

## Production

To build the project for production, compile the config file:
```bash
yarn run generate-config:dev
```

Then, run the full production build:
```bash
yarn run build:prod
```
The output files will be located in the `dist` directory.