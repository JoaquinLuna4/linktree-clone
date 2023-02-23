import Papa from "papaparse"
type Link =  {
    LABEL: "string";
    URL: "string";
  
  }
const api ={
    links: {
        fetch : async() => {
            const res = await fetch ("https://docs.google.com/spreadsheets/d/e/2PACX-1vSRu3Vuo3BVNcuo3m4FTgGhNPdO-cKE3l2vK35NgbBEkgJB7cf1RdwjXQiP5rjvik-uyrNAjc5NLxbb/pub?gid=0&single=true&output=csv")
            const data = await res.text()
            /*Papaparse no permite promesas directamente, no se le puede pasar el await por ende construimos newPromise para esperar el dato y que funcione como tal*/
            const parsed  = await new Promise<Link[]>((resolve, reject) => {              
              Papa.parse<Link>(data, {header: true , complete: result  => resolve(result.data), error: reject})
            })
            return parsed
            
        } 
    }
}
export default api