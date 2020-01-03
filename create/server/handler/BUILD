load("@npm_bazel_typescript//:index.bzl", "ts_library")

package(default_visibility = ["//visibility:public"])

ts_library(
    name = "handler",
    srcs = glob(["*.ts"]),
    deps = [
        "@npm//@types/express",
        "@npm//@types/moment",
        "@npm//@types/node",
        "@npm//@types/request",
        "@npm//express",
        "@npm//moment",
        "@npm//protobufjs",
        "@npm//request",
    ],
)
