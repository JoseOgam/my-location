import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";

function App() {
  const { jobs, loading, error } = useFetchJobs();
  return (
    <Container>
      <h2>Opps under Development!!!</h2>
      <h3>GITHUB JOBS!</h3>
      {loading && <h3>loading...</h3>}
      {error && <h3>error refresh the page</h3>}
      <h1> {jobs.length} </h1>
    </Container>
  );
}

export default App;
