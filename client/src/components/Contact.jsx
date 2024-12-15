import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function Contact({listing}) {
 
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('')

  
  function onChange(e) {
    setMessage(e.target.value)
  }
  
   useEffect(() => {
     const fetchLandlOrd = async () => {
       try {
          const res = await fetch(`/api/user/${listing.userRef}`);
          const data = await res.json();
          setLandlord(data)
       } catch (error) {
         console.log(error)
       }
     }
     fetchLandlOrd()
   }, [listing.userRef])
 
  
  
  
   return (
    <>
      {
        landlord && (
          <div className="flex flex-col gap-2">
            <p>Contact <span className="font-semibold">{landlord.username}</span> for   
                 <span className="font-semibold"> {listing.name.toLowerCase()}</span>
            </p>
            <textarea onChange={onChange} 
               value={message} name="message" 
               id="message" rows="2" placeholder="Enter your message here..."
               className="w-full border border-gray-400 rounded-md p-3 mt-2"
               >

               </textarea>
               <Link
                to={`mailto:${landlord.email}?subject=Regarding 
                   ${listing.name}&body=${message}`}
                   className="bg-slate-700 text-white 
                   text-center p-3 rounded-lg uppercase hover:opacity-95"
               >
                  Send Message
               </Link>
          </div>
        )
      }
    </>
  )
}
