import Markdown from "marked-react";
import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [textMarkdown, setTextMarkDown] = useState<string | undefined>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = () => {
    setTextMarkDown(textAreaRef.current?.value);
  };
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current?.focus();
    }
    handleChange();
  }, []);

  return (
    <div className="App">
      <div className="elements">
        <textarea
          rows={30}
          className="element"
          ref={textAreaRef}
          defaultValue="# `Prévisualisateur - Georges Neil`&#13;### Oh ! De la magie !&#13;En réalité, pas vraiment : ceci s'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !&#13;&#13;### Cas d'utilisation&#13;* *italique*&#13;* **gras**&#13;* `monospace`&#13;* ~~barré~~&#13;* # h1&#13;* ## h2&#13;* ### h3&#13;* #### etc&#13;[Georges Neil Github](https://github.com/Georges-10)"
          onChange={handleChange}
          value={textMarkdown}
        ></textarea>
        <div className="element">
          <Markdown>{textMarkdown}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default App;
