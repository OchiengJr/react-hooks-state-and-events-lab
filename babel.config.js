module.exports = {
  // Preset for compiling modern JavaScript syntax to a version compatible with the target environment
  presets: [
    "@babel/preset-env",
    // Preset for compiling JSX syntax in React components with automatic runtime import
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
