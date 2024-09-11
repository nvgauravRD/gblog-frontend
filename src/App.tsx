import { FetchPostLoading } from "./components/PageComponents/Loading";
import { NavBar } from "./components/PageComponents/NavBar";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <FetchPostLoading />
    </>
  );
}
