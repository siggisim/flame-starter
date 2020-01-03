load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")
load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
load("@k8s_deploy//:defaults.bzl", "k8s_deploy")

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
        "//{{PATH}}/app:app_bundle.js",
        "//{{PATH}}/server",
        "//{{PATH}}/static",
    ],
    entry_point = "//{{PATH}}/server:server.ts",
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
        "//{{PATH}}/app:app_bundle.js",
        "//{{PATH}}/server",
        "//{{PATH}}/static",
    ],
    entry_point = "//{{PATH}}/server:server.ts",
    node_modules = "@npm//:node_modules",
)

k8s_deploy(
    name = "deploy",
    images = {
        "gcr.io/sunlit-hook-110823/siggisim:server_image": ":server_image",
    },
    template = ":deployment.yaml",
)
