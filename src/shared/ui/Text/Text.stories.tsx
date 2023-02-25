import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const LightText = Template.bind({});
LightText.args = {
    title: 'Some text text text text text text text',
    text: 'Some text text text text text text text',
};

export const LightTextOnlyTitle = Template.bind({});
LightTextOnlyTitle.args = {
    title: 'Some text text text text text text text',
};

export const LightTextOnlyText = Template.bind({});
LightTextOnlyText.args = {
    text: 'Some text text text text text text text',
};

export const LightTextError = Template.bind({});
LightTextError.args = {
    title: 'Some text text text text text text text',
    text: 'Some text text text text text text text',
    theme: TextTheme.ERROR,
};

export const DarkText = Template.bind({ });
DarkText.args = {
    title: 'Some text text text text text text text',
    text: 'Some text text text text text text text',
};
DarkText.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTextOnlyTitle = Template.bind({});
DarkTextOnlyTitle.args = {
    title: 'Some text text text text text text text',
};
DarkTextOnlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTextOnlyText = Template.bind({});
DarkTextOnlyText.args = {
    text: 'Some text text text text text text text',
};
DarkTextOnlyText.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTextError = Template.bind({});
DarkTextError.args = {
    title: 'Some text text text text text text text',
    text: 'Some text text text text text text text',
    theme: TextTheme.ERROR,
};
DarkTextError.decorators = [ThemeDecorator(Theme.DARK)];
