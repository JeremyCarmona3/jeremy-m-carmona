import ProjectsCard from './projects-card';

export default {
  title: 'Example/ProjectsCard',
  component: ProjectsCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};
export const Primary = {
  args: {
    label: 'ProjectsCard',
  },
};
