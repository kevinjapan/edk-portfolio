interface EffectOptions {
   threshold:number,
   rootMargin:string
}



// We start new filter ProjectLists w/ blurred images gradually coming into focus
// - 'unblur' is the class assigned to target elements as starting blurred
// - 'no_blur' is the class added to effect transition to clear img


// .unblur
// --------------------------------------------------
export default function init_unblurs() : boolean {
   const faders = document.querySelectorAll('.unblur') as NodeListOf<Element>
   const effectOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px"
   }
   return create_observers(faders,'no_blur',effectOptions)
}



// .fade_in
// --------------------------------------------------
export const init_fade_ins = () => {

   const faders = document.querySelectorAll('.fade_in')
   const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px"
   }
   return create_observers(faders,'appear',appearOptions)
}



// .slide_up
// --------------------------------------------------
//  very subtle slide_ins for text eg on HERO 
export const init_slide_ups = () => {
   const slide_up_elems = document.querySelectorAll('.slide_up')
   const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px 200px 0px"
   }
   return create_observers(slide_up_elems,'has_slid_up',appearOptions)
}
export const reset_slide_ups = () => {
   const slide_up_elems = document.querySelectorAll('.slide_up')
   remove_class(slide_up_elems, 'has_slid_up')  
}


// .slide_in_left / .slide_in_right
// --------------------------------------------------
// subtle slide_ins for text
export const init_slide_ins = () => {

   const slide_in_left_elems = document.querySelectorAll('.slide_in_left')
   const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px"
   }
   create_observers(slide_in_left_elems,'has_slid_in',appearOptions)
   
   const slide_in_right_elems = document.querySelectorAll('.slide_in_right')
   const appearOptions_2 = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px"
   }
   return create_observers(slide_in_right_elems,'has_slid_in',appearOptions_2)
}
export const reset_slide_ins = () => {
   const slide_in_left_elems = document.querySelectorAll('.slide_in_left')
   remove_class(slide_in_left_elems, 'has_slid_in')
   const slide_in_right_elems = document.querySelectorAll('.slide_in_right')
   remove_class(slide_in_right_elems, 'has_slid_in')  
}


// utility remove_class()
// --------------------------------------------------
const remove_class = (elems: NodeListOf<Element>, class_name: string) => {
   elems.forEach(elem => {
      elem.classList.remove(class_name)
   }) 
}


const create_observers = (elements: NodeListOf<Element>,active_class: string,options : EffectOptions) : boolean => {
   let observers_created = false
   const appearOnScroll = new IntersectionObserver(
      function(entries,appearOnScroll){
         entries.forEach(entry => {
            if(!entry.isIntersecting) return
            entry.target.classList.add(active_class)
            appearOnScroll.unobserve(entry.target)
         })
   },options)
   if(elements) {
      elements.forEach(element => {
         appearOnScroll.observe(element)
      })
      observers_created = true
   }
   return observers_created
}

