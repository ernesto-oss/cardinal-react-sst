const merge = require("lodash.merge");

const globalConfig = require("@acme/tailwind-config/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
const localConfig = {
  content: [`./index.html`, `./src/**/*.{html,js,ts,jsx,tsx}`],
  theme: {
    extend: {},
  },
};

const mergedConfig = merge(globalConfig, localConfig);

module.exports = mergedConfig;
