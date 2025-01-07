import { useState } from "react"

/**
 * 
 * @param {{texte : string}} param0 
 * @returns 
 */
export default function Desciption({texte,max = 100}) {
    const [more,setMore] = useState(false);
    let textArray = texte.split("");
    textArray.length = max;
    const onSeeMore = () =>{
      setMore(!more);
    }
  return (
    <div>
        <p>
          {more ? texte : textArray}
          {texte.length > max ? <button onClick={onSeeMore}>
          <span className="flex items-start font-medium">
            {more ? '...' : '...'}
            <i className={`fi fi-rr-angle-small-down flex text-xl ${more ? 'rotate-[180deg]' : 'rotate-0'}`}></i> 
          </span>
        </button> : null}
        </p>
    </div>
  )
}
