import type { Meta, StoryObj } from '@storybook/react';
import TooltipContainer from '../../components/TooltipContainer';
import React from 'react';

const meta: Meta<typeof TooltipContainer> = {
    title: 'Tooltip',
    component: TooltipContainer,
};
export default meta;
type Story = StoryObj<typeof TooltipContainer>;

export const Default: Story = {
    render: () => <TooltipContainer />,
};