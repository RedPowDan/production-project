import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Создает стили из Js строк
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Транслирует CSS в CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]-[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            // Компилит Sass в CSS
            'sass-loader',
        ],
    };
}
