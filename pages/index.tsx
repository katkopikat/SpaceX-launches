import MainLayout from "../components/MainLayout";
import Launches from "../components/Launches";

const URL_LAUNCHES = "https://api.spacexdata.com/v4/launches/query";

const App = ({ launches }) => (
      <MainLayout>
        <Launches launches={launches} />
      </ MainLayout>
)

export default App;

export async function getStaticProps() {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  const response = await fetch(URL_LAUNCHES, requestOptions);
  const launches = await response.json();

  return {
    props: { launches },
  };
}

