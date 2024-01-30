import Avatar from "./components/Avatar";
import Data from "./components/Data";
import SkillList from "./components/SkillList";

function App() {
  return (
    <main className="card">
      <Avatar />
      <div className="data">
        <Data />
        <SkillList />
      </div>
    </main>
  );
}

export default App;
