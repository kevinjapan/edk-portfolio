
// to do : fix TS warnings herein


export default function init_unblurs() : boolean {
   const faders = document.querySelectorAll('.unblur')
   const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px"
   }
   return create_observers(faders,'no_blur',appearOptions)
}

const create_observers = (elements,active_class,options) : boolean => {
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



//
// if any issues arise with fade_in not taking effect..
// we have fixed fade_in failing on 'back' button & '#' links in wda and te projects.
//
// setTimeout(() => {
//    init_unblurs()
// },200)

