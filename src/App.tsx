import "./App.css";
import { ShopCartContext } from "./context/ShopCartContext";
import { RouterPaths } from "./routes/RouterPaths.routes";

export function App() {
  return (
    <>
      <ShopCartContext>
        <RouterPaths />
      </ShopCartContext>
    </>
  );
}
export default App;
