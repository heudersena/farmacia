module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" }}],
        "@babel/preset-typescript",
    ],
    plugins: [
        [
        "module-resolver",
        {
            alias: {
                "@controllers": "./src/controllers",
                "@middleware": "./src/middleware",
                "@services": "./src/services",
                "@routes": "./src/router",
            },
        },
    ],
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
],
};