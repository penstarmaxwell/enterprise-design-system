# Button Component

## Purpose
Buttons trigger actions within an interface. They should communicate their purpose, importance and current state clearly.

## Variants

- **Primary:** Main action within a view or workflow.
- **Secondary:** Supporting action with lower visual emphasis.
- **Tertiary:** Low-emphasis action, often used in toolbars or compact interfaces.
- **Destructive:** Actions with potentially irreversible consequences, such as deleting records.

## Sizes

- **Small:** Compact interfaces, tables and toolbars.
- **Medium:** Default size for forms and standard workflows.
- **Large:** High-emphasis actions and touch-friendly layouts.

## Interaction States

- **Default:** Available for interaction.
- **Hover:** Visual feedback for pointer interaction.
- **Focus-visible:** Clear keyboard focus indicator.
- **Active:** Feedback while the button is pressed.
- **Disabled:** Unavailable action, with appropriate explanation where needed.
- **Loading:** Indicates an action is processing and prevents accidental repeated submission.

## Accessibility

- Use semantic HTML button elements for actions.
- Ensure a visible keyboard focus indicator.
- Maintain sufficient contrast for text and meaningful visual boundaries.
- Provide descriptive labels for icon-only buttons.
- Avoid relying solely on colour to communicate state.
- Aim for WCAG 2.2 AA compliance and consider minimum target sizes.

## Design Tokens

The button component will reference shared colour, typography, spacing and border-radius tokens.

## Status

Specification drafted. React implementation and interactive examples are planned.
