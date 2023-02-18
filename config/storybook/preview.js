import { addDecorator } from '@storybook/react';
import { Theme, ThemeProvider } from '../../src/app/providers/ThemeProvider';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SidebarDecorator }
    from '../../src/shared/config/storybook/SidebarDecorator/SidebarDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
addDecorator(SidebarDecorator);
