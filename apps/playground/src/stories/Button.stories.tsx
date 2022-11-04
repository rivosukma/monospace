import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "space-ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ["primary", "secondary", "danger"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    order: {
      options: ["start", "end"],
      control: { type: "radio" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "sm",
  order: "end",
  loading: true,
  fullWidth: true,
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
