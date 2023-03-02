const Company = function (name, salary) {
  Company.addStaff({ name: name, income: 0 });
  this.name = name;
  this.salary = salary;

  this.income = function (value) {
    Company.store.money += value - this.salary;
    Company.store.staffList.map((elem) => {
      if (elem.name === this.name) {
        elem.income += value - this.salary;
      }
    });
  };
  this.spend = function (value) {
    Company.store.money -= value;
    Company.store.staffList.map((elem) => {
      if (elem.name === this.name) {
        elem.income -= value;
      }
    });
  };
};
Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,
};
Company.addStaff = function ({ name, income = 0 }) {
  this.store.staffList.push({ name, income });
  this.store.countStaff++;
};
Company.getLeaders = function () {
  const staffList = this.store.staffList;
  const incomes = staffList.map((elem) => elem.income);
  const maxValue = Math.max(...incomes);
  return staffList.filter((elem) => elem.income === maxValue);
};
