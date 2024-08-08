import { Meta, StoryObj } from '@storybook/react';
import MyLabel from '../components/MyLabel';

const meta = {
  title: 'UI/labels/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: { control: 'inline-radio' },
    fontColor: { control: 'color' }
  }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic label",
    size: "normal",
    allCaps: false,
    color: "text-primary",
    fontColor: "#000000"
  }
};

export const AllCaps: Story = {
  args: {
    label: "AllCaps label",
    size: "normal",
    allCaps: true,
  }
};

export const Secondary: Story = {
  args: {
    label: "Secondary label",
    size: "normal",
    color: "text-secondary"
  }
};

export const CustomColor: Story = {
  args: {
    label: "CustomColor label",
    size: "normal",
    fontColor: "crimson"
  }
};