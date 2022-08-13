import Button from "./components/template/Button";
import "./styles.css";

function App() {
  return (
    <div className="main">
      <aside></aside>

      <div>
        <h2>Buttons</h2>

        <Button>Default</Button>

        <Button variant="outline">Default</Button>
        <Button variant="text">Default</Button>
        <Button disableShadow={true}>Default</Button>
        <div className="row">
          <Button disabled={true}>Default</Button>
          <Button disabled={true} variant="text">
            Default
          </Button>
        </div>


        <div className="row">
          <Button size="sm">Default</Button>
          <Button size="md">Default</Button>
          <Button size="lg">Default</Button>
        </div>

      </div>
    </div>
  );
}

export default App;
