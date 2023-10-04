import ColorProvider from './ColorProvider';
import ColorSelector from './ColorSelector';
import LangProvider from './LangProvider';
import LangSelector from './LangSelector';

function App() {
  return (
    <>
      <LangProvider>
        <LangSelector />
      </LangProvider>
      <ColorProvider>
        <ColorSelector />
      </ColorProvider>
    </>
  );
}

export default App;
