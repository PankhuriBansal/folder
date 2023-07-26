import React from 'react'
import { useState } from 'react'


const Folder = ({data}) => {
  // console.log(data)
  const [expand,setExpand] = useState(false)

    if(data.isFolder){
        return (
            <div>
              <span onClick={() => setExpand(!expand)}>{data.name}</span>
              <div style={{display: expand ? 'block': 'none',paddingLeft:15} }>
                {
                    data.items.map((exp) => {
                        return <Folder
                            data={exp}
                        />
                    })
                }
              </div>
            </div>
          )
    }
    else{
       return <span>{data.name}
       <br/></span>
    }
  
}

export default Folder
