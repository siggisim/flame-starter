load("@npm_bazel_typescript//:index.bzl", "ts_devserver", "ts_library")
load("@npm_bazel_rollup//:index.bzl", "rollup_bundle")

package(default_visibility = ["//visibility:public"])

rollup_bundle(
    name = "app_bundle",
    config_file = "rollup.config.js",
    entry_point = "app.tsx",
    deps = [
        ":app",
        "@npm//rollup-plugin-commonjs",
        "@npm//rollup-plugin-node-resolve",
    ],
)

ts_library(
    name = "app",
    srcs = glob(["*.tsx"]),
    deps = [
        "//app/root",
        "@npm//@types/react",
        "@npm//@types/react-dom",
        "@npm//react",
        "@npm//react-dom",
    ],
)
