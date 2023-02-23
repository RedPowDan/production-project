import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Text 23 4823-9 efwoiwe fweh weuh weuh weeu fwe fhweufwehfu weuhfwe hh ewhufwhw  erg ere r e reer er e re  e e ee e e ehfhwe hwh wef hwhuwehweh',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({ });
Light.args = {
    isOpen: true,
    children: 'Text 23 4823-9 efwoiwe fweh weuh weuh weeu fwe fhweufwehfu weuhfwe hh ewhufwhw  erg ere r e reer er e re  e e ee e e ehfhwe hwh wef hwhuwehweh',
};
