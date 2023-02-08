import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        // Если true: Открывает автоматически страницу в браузере
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
