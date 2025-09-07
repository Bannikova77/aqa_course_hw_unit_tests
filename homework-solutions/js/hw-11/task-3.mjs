class Employee {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value !== 'string' || !/^[A-Za-z]{1,50}$/.test(value)) {
      throw new Error('Invalid firstName');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== 'string' || !/^[A-Za-z]{1,50}$/.test(value)) {
      throw new Error('Invalid lastName');
    }
    this._lastName = value;
  }

  get salary() {
    return this._salary;
  }
  set salary(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value < 0) {
      throw new Error('Invalid salary');
    }
    this._salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.programmingLanguages = Array.isArray(programmingLanguages)
      ? programmingLanguages.slice()
      : [];
  }

  get programmingLanguages() {
    return this._programmingLanguages;
  }
  set programmingLanguages(arr) {
    if (!Array.isArray(arr)) throw new Error('Invalid programmingLanguages');
    this._programmingLanguages = arr.slice();
  }

  addProgrammingLanguage(language) {
    if (typeof language !== 'string' || !language.trim()) {
      throw new Error('Invalid programming language');
    }
    const lang = language.trim();
    if (!this._programmingLanguages.includes(lang)) {
      this._programmingLanguages.push(lang);
    }
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize = 0) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }

  get teamSize() {
    return this._teamSize;
  }
  set teamSize(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error('Invalid teamSize');
    }
    this._teamSize = value;
  }

  increaseTeamSize() {
    this._teamSize += 1;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.designTools = Array.isArray(designTools) ? designTools.slice() : [];
  }

  get designTools() {
    return this._designTools;
  }
  set designTools(arr) {
    if (!Array.isArray(arr)) throw new Error('Invalid designTools');
    this._designTools = arr.slice();
  }

  addDesignTool(tool) {
    if (typeof tool !== 'string' || !tool.trim()) {
      throw new Error('Invalid design tool');
    }
    const t = tool.trim();
    if (!this._designTools.includes(t)) {
      this._designTools.push(t);
    }
  }
}

class Company {
  constructor(title) {
    this.title = title;
    this._employees = [];
  }

  get title() {
    return this._title;
  }
  set title(value) {
   
    this._title = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Invalid employee');
    }
    const full = employee.getFullName();
    if (this._employees.some((e) => e.getFullName() === full)) {
      throw new Error('Employee already exists');
    }
    this._employees.push(employee);
  }

  getEmployees() {
    return this._employees.slice();
  }

  getEmployeesByProfession(profession) {
    switch (profession) {
      case 'Developer':
        return this._employees.filter((e) => e instanceof Developer);
      case 'Manager':
        return this._employees.filter((e) => e instanceof Manager);
      case 'Designer':
        return this._employees.filter((e) => e instanceof Designer);
      default:
        return [];
    }
  }
}

export { Employee, Company, Designer, Developer, Manager };
