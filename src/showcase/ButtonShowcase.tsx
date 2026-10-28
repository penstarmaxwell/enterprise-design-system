import { Button } from "../components/Button/Button";
import "./ButtonShowcase.css";

export function ButtonShowcase() {
  return (
    <section className="button-showcase">
  <header>
    <h2>Buttons</h2>
    <p>
      Buttons enable users to initiate actions, submit information
      and navigate through an interface. They provide clear visual
      hierarchy through variants, sizes and interaction states.
    </p>
  </header>

  <h3>Button Variants</h3>

<div className="button-showcase__preview">
  <div className="button-showcase__row">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
    <Button variant="destructive">Destructive</Button>
  </div>
</div>

      <div className="button-showcase__section">
        <h3>Button Sizes</h3>

        <div className="button-showcase__preview">
  <div className="button-showcase__row">
    <Button variant="primary" size="sm">Small</Button>
    <Button variant="primary" size="md">Medium</Button>
    <Button variant="primary" size="lg">Large</Button>
  </div>
</div>
      </div>

      <div className="button-showcase__section">
        <h3>Button States</h3>

        <div className="button-showcase__preview">
  <div className="button-showcase__row">
    <Button variant="primary">Default</Button>
    <Button variant="primary" disabled>Disabled</Button>
    <Button variant="primary" loading>Submit</Button>
  </div>
</div>
      </div>
    </section>
  );
}