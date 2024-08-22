
declare module 'HomeView'
declare module 'ProjectsListView'
declare module 'ProjectView'
declare module 'projectStore'
declare module 'AppStatus'
declare module 'markdownit'


// define 'shared/common' types and interfaces in here 
// globally accessible and don't require import in indvdl client component files


// User Interfaces

interface User {
   name: string;
   id: number;
}


// Project Interfaces

interface TechItem {
   name: string
}
interface Project {
   desc:string
   file:string
   status:string
   img:string
   alt:string
   github?:string
   site?:string
   slug:string
   tagline:string
   tech:Array<TechItem>
   title:string
}