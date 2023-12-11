import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { useFormStatus} from 'react-dom'

export default function SubmitPending() {
    const { pending } = useFormStatus()
  return (
    <button className='group focus:scale-105 flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-50/80 hover:bg-gray-200/80 text-black outline-none rounded-full transition-all disabled:scale-100 disabled:bg-opacity-65' disabled={pending}>
        {
            pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-gray-600'></div> : (
                <>
                Submit
                <FaPaperPlane className="text-xs opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>
                </>
            )
        }
    </button>
  )
}
