// set headers options for fetch requests


// future : do we need this line to ensure TS picks up RequestInit type from DOM?
/* global RequestInit */



export default function reqInitOptions(): RequestInit{
   return {
      method: "GET",
      mode: "cors",
      cache: "default"
  }
}


//  future : create working sep. func for POST version

export function reqInit(method: string = "POST", bearer_token: string = "",body: string = "") {
    if(typeof body === 'object') {
        body = JSON.stringify(body)
    }
    if(body !== "" && body !== undefined) {
        return {
            method: method,
            headers: { 
                'Accept':'application/json',
                'Authorization': `Bearer ${bearer_token}`,
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            mode: "cors",
            cache: "default",
            body: body
        }
    }
    else {
        return {
            method: "GET",
            mode: "cors",
            cache: "default"
        }
    }
}