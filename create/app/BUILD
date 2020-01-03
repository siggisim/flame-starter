load("@npm_bazel_typescript//:index.bzl", "ts_devserver", "ts_library")
load("@build_bazel_rules_nodejs//:defs.bzl", "rollup_bundle")

package(default_visibility = ["//visibility:public"])

rollup_bundle(
    name = "app_bundle",
    enable_code_splitting = False,
    entry_point = "app.ts",
    globals = {
        "protobufjs/minimal": "protobuf",
    },
    deps = [
        ":app",
    ],
)

ts_library(
    name = "app",
    srcs = glob(["*.tsx"]),
    deps = [
        "@npm//@types/react",
        "@npm//@types/react-dom",
        "@npm//react",
        "@npm//react-dom",
    ],
)
