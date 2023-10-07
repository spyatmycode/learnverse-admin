import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Router from "./Utility/Routers/Router";
import {  Toaster } from "react-hot-toast";
import AuthProvider from "./Context/AuthContext";


function App() {
  return (
    <>
    
      <AuthProvider>
      <Router />
      <Toaster/>
      </AuthProvider>

    </>
  );
}

export default App;
