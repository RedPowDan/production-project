import { Story } from '@storybook/react';
import React from 'react';
import { SidebarProvider } from 'app/providers/SidebarProvider';

export const SidebarDecorator = (StoryComponent: Story) => (
    <SidebarProvider>
        <StoryComponent />
    </SidebarProvider>
);
