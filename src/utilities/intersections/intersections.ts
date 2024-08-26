interface EffectOptions {
   threshold:number,
   rootMargin:string
}



// We start new filter ProjectLists w/ blurred images gradually coming into focus
// - 'unblur' is the class assigned to target elements as starting blurred
// - 'no_blur' is the class added to effect transition to clear img


export default function init_unblurs() : boolean {
   const faders = document.querySelectorAll('.unblur') as NodeListOf<Element>
   const effectOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px"
   }
   return create_observers(faders,'no_blur',effectOptions)
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

