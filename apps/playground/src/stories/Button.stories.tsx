import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "space-ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Button",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "Button",
};
