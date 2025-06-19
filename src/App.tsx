import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { QueryProvider } from "./components/context-provider/QueryProvider";


function App() {

  return (
    <QueryProvider>
        <RouterProvider router={router} />
    </QueryProvider>
  )
}

export default App;
