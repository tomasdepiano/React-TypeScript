import CourseGoal from "./components/Goals.tsx";
import Goals from "./assets/Goals.jpeg";
import Header from "./components/Header.tsx";

export default function App() {
  return (
    <main>
      <Header image={{ src: Goals, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="Learn TS">
        <p>Look at this</p>
      </CourseGoal>
    </main>
  );
}
