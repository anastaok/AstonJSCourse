const createPerson = ({ name = 'new User', skills = [] }) => {
  return {
    name,
    skills,
    addSkill(newSkill) {
      if (!this.skills.includes(newSkill)) {
        this.skills.push(newSkill);
      }
      return this;
    },
    removeSkill(deleteSkill) {
      this.skills = this.skills.filter((val) => val !== deleteSkill);
      return this;
    },
    addName(newName) {
      this.name = newName;
      return this;
    },
  };
};
