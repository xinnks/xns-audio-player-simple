module.exports = {
    plugins: [
        require("postcss-preset-env"),
        require("tailwindcss"),
        require("@fullhuman/postcss-purgecss")({

            // Specify the paths to all of the template files in your project
            content: [
                "./src/XnsAudioPlayerSimple.vue"
            ],
        })
    ],
};