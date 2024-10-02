// class Storage {
//   constructor(Projects) {
//     this.Projects = Projects;
//   }
// }
// const storage = new
// export default new Storage([]);
import saveToLocalStorage from "../functions/saveToLocalStorage";

const Storage = {Projects: []};

saveToLocalStorage(Storage);

export default Storage; 
