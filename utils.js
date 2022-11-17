/**
 * @typedef {import('prettier').Options} Options
 */

/**
 * @typedef {{
 *   files: string | string[];
 *   options: Options;
 * }} Override
 */

/**
 * @typedef { Options & {overrides?: Override[]} } Config
 */

/**
 * 定义 `prettier` 配置
 *
 * @param {Config} [config] 配置
 * @returns {Config}
 */
function defineConfig(config = {}) {
  return config;
}

/**
 * 合并 `prettier` 配置
 *
 * @param  {...Config} configs
 * @returns {Config}
 */
function mergeConfig(...configs) {
  return configs.reduce(
    (result, config) => ({
      ...result,
      ...config,
      ...(result.overrides || config.overrides
        ? {
            overrides: [...(result.overrides || []), ...(config.overrides || [])],
          }
        : {}),
    }),
    {},
  );
}

module.exports = {
  defineConfig,
  mergeConfig,
};
