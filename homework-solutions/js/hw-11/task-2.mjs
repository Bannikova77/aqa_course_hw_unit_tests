class Employee {
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value !== 'string' || !/^[A-Za-z]{2,50}$/.test(value)) {
      throw new Error('Invalid firstName');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== 'string' || !/^[A-Za-z]{2,50}$/.test(value)) {
      throw new Error('Invalid lastName');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (
      typeof value !== 'string' ||
      !/^[A-Za-z ]+$/.test(value) ||
      value.trim().length === 0
    ) {
      throw new Error('Invalid profession');
    }
    this._profession = value;
  }

  get salary() {
    return this._salary;
  }
  set salary(value) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0 || value >= 10000) {
      throw new Error('Invalid salary');
    }
    this._salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this._employees = [];
  }

  get title() {
    return this._title;
  }
  set title(value) {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error('Invalid title');
    }
    this._title = value;
  }

  get phone() {
    return this._phone;
  }
  set phone(value) {
    if ((typeof value !== 'string' && typeof value !== 'number') || String(value).trim().length === 0) {
      throw new Error('Invalid phone');
    }
    this._phone = String(value);
  }

  get address() {
    return this._address;
  }
  set address(value) {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error('Invalid address');
    }
    this._address = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Only Employee instances can be added');
    }
    this._employees.push(employee);
  }

  getEmployees() {
    return this._employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this._employees.length}`;
  }

  findEmployeeByName(firstName) {
    const employee = this._employees.find(emp => emp.firstName === firstName);
    if (!employee) throw new Error('Employee not found');
    return employee;
  }

  _getEmployeeIndex(firstName) {
    return this._employees.findIndex(emp => emp.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this._getEmployeeIndex(firstName);
    if (index === -1) throw new Error('Employee not found');
    this._employees.splice(index, 1);
  }

  getTotalSalary() {
    return this._employees.reduce((sum, emp) => sum + emp.salary, 0);
  }
}

export { Employee, Company };
