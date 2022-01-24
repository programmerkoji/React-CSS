import { CssModules } from "./component/CssModules";
import { Emotion } from "./component/Emotion";
import { InlineStyle } from "./component/InlineStyle";
import { StyledComponents } from "./component/StyledComponents";
import { StyledJsx } from "./component/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
