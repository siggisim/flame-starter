load("@npm_bazel_typescript//:index.bzl", "ts_library")

package(default_visibility = ["//visibility:public"])

ts_library(
    name = "root",
    srcs = glob(["*.tsx"]),
    deps = [
        "@npm//@types/react",
        "@npm//protobufjs",
        "@npm//react",
    ],
)
