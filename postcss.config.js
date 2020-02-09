module.exports = {
    plugins: [
        require("postcss-preset-env"),
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
        require("postcss-nested"),
        require("@fullhuman/postcss-purgecss")({

            // Specify the paths to all of the template files in your project
            content: [
                "./src/XnsAudioPlayerSimple.vue",
                "./src/PlaybackProgress.vue"
            ],
        })
    ],
};