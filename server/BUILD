load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")
load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
load("@k8s_deploy//:defaults.bzl", "k8s_deploy")
load("@npm_bazel_typescript//:index.bzl", "ts_library")

package(default_visibility = ["//visibility:public"])

nodejs_binary(
    name = "server_binary",
    configuration_env_vars = [
        "GOOGLE_APPLICATION_CREDENTIALS",
        "ENV",
        "SERVICE_NAME",
        "VERSION",
    ],
    data = [
        ":server_library",
        "//app:app_bundle.js",
        "//static",
    ],
    entry_point = "//server:server.ts",
)

nodejs_image(
    name = "server_image",
    configuration_env_vars = [
        "GOOGLE_APPLICATION_CREDENTIALS",
        "ENV",
        "SERVICE_NAME",
        "VERSION",
    ],
    data = [
        ":server_library",
        "//app:app_bundle.js",
        "//static",
    ],
    entry_point = "//server:server.ts",
    node_modules = "@npm//:node_modules",
)

k8s_deploy(
    name = "deploy",
    images = {
        "gcr.io/YOUR_REPO_NAME_HERE/{{NAME}}:server_image": ":server_image",
    },
    template = ":deployment.yaml",
)

ts_library(
    name = "server_library",
    srcs = ["server.ts"],
    data = [
        "//:package.json",
    ],
    deps = [
        "//server/handler",
        "@npm//@types/express",
        "@npm//@types/node",
        "@npm//express",
        "@npm//http",
        "@npm//protobufjs",
    ],
)
