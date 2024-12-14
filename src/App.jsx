import "./App.css";
import Navbar from "./Components/Navbar";
import CourseList from "./Components/CourseList";
import Footer from "./Components/Footer";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container
      maxWidth={false}
      // Tüm genişlik boyunca uzanır

      disableGutters
    >
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          // Dikey düzen sağlanır
        }}
      >
        <CourseList />
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
