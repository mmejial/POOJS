/**
 * @author PAQUITO
 * <p> marco</p>
 * 
 * 
 */

class Comment {
    constructor({
        content,
        studendName,
        studenrRole = "estidiantes",

    }){
        this.content = content;
        this.studendName = studendName;
        this.studenrRole = studenrRole;
        this.likes = 0;
    }
    publicar(){
        console.log(this.studendName + " DSALKJDLSAJDKLSJADKL");
    }
}

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
  }
  function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
  }
  
  export class PlatziClass {
    constructor({
      name,
      videoID,
    }) {
      this.name = name;
      this.videoID = videoID;
    }
  
    reproducir() {
      videoPlay(this.videoID);
    }
    pausar() {
      videoStop(this.videoID);
    }
  }
  
  
  
  
  
  
  
  
  
  
  class Course {
    constructor({
      name,
      classes = [],
      isFree =false,
      lang = "spanish"
    }) {
      this._name = name;
      this.classes = classes;
      this.isFree = isFree;
      this.lang = lang;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (nuevoNombrecito === "Curso Malito de Programación Básica") {
        console.error("Web... no");
      } else {
        this._name = nuevoNombrecito; 
      }
    }
  }
  
  const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
  });
  
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
  });
  
  
  class LearningPath {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
  }
  
  const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      cursoProgBasica,
      cursoDefinitivoHTML,
      cursoPracticoHTML,
    ],
  });
  
  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      cursoProgBasica,
      "Curso DataBusiness",
      "Curso Dataviz",
    ],
  });
  
  const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
      cursoProgBasica,
      "Curso de Unity",
      "Curso de Unreal",
    ],
  })
  
  class Student {
    constructor({
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }
  }
/**
 * @author PAQUITO
 * @constructor hace herencia de Student
 * @returns no se que cosa
 * 
 */
  class FreeStudent extends Student{//extends hace referencia a la Herencia
      constructor(props){//se le da un parametro al constructor
        super(props);//super(parametro) envia los parametros del la clase madre
      }
      approvedCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourse.push(newCourse)
        }else{
            console.warn("no puedes tomar este curso")
        }
      }
  }
  class BasicStudent extends Student{
      constructor(props){
          super(props)
      }
  }
  
  const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  
  const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });