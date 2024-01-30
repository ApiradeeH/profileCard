import Skill from "./Skill";

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="🦾" color="blue" />
      <Skill skill="CSS" emoji="🦾" color="orange" />
      <Skill skill="JavaScrip" emoji="👶" color="yellow" />
      <Skill skill="React" emoji="🦾" color="red" />
      <Skill skill="NodeJS" emoji="🦾" color="violet" />
    </div>
  );
};
export default SkillList;
