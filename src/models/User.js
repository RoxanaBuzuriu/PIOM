export default class User {
  constructor({ id, name, role, department, avatar, tags = [] }) {
    this.id = id
    this.name = name
    this.role = role
    this.department = department
    this.avatar = avatar
    this.tags = tags
  }

  get initials() {
    return this.name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()
  }
}
