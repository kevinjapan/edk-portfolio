
declare module 'HomeView'
declare module 'ProjectsListView'
declare module 'ProjectView'
declare module 'projectStore'
declare module 'AppStatus'
declare module 'markdownit'


// define 'shared/common' types and interfaces in here 
// globally accessible and don't require import in indvdl client component files


// -----------------------------------------------------------
// User Interfaces

interface User {
   first_name: string,
   second_name: string,
   id: number
}


// -----------------------------------------------------------
// Project Interfaces

interface TechItem {
   name: string
}
interface Project {
   desc:string
   file:string
   status:string
   img:string
   img_acknowledge:string
   img_acknowledge_link:string
   alt:string
   github?:string
   site?:string
   slug:string
   tagline:string
   tech:Array<TechItem>
   title:string
}




// -----------------------------------------------------------
// ProjectSection
// we extend ProjectSection for each Block Type

interface ProjectSection {
   blockType:string
   styles:string[]
}

// CoverBlock
interface Overlay {
   heading:string
   tagline:string
}
interface CoverBlock extends ProjectSection {
   coverImg:Image
   bgImgAlt:string
   overlay?:Overlay
}

// FeatureBlock
interface FeatureBlockListItem {
   name:string
   text:string
   link:string
}
interface FeatureBlock extends ProjectSection {
   title:string
   featureImg:Image
   text:string
   list:FeatureBlockListItem[]
}

// TitleBlock
interface TitleBlock extends ProjectSection {
   level:number
   text:string
   tagline:string
}

// TextBlock
interface TextBlock extends ProjectSection {
   text:string
}



// -----------------------------------------------------------

interface ProjectDetails {
   sections:ProjectSection[]
}


// -----------------------------------------------------------
// Utility Interfaces

interface Image {
   src:string
   alt:string
}