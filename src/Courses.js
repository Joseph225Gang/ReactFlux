export class Course {
    constructor(id,author,category) {
      this.id = id;
      this.author = author;
      this.category = category;
    }
  }

  export let coursesArray = [new Course(0,"Joseph","Computer Science"), new Course(1,"Michael","English")];
  localStorage.setItem("coursesArray", JSON.stringify(coursesArray));

  export default coursesArray;
