import React from 'react'

const Wall = () => {
    return (
        <div id="view-wall">
            <div id="user-profile">
              <img src={localStorage.getItem("profilePic")} />
              <div id="user-data">
                  <h1>{localStorage.getItem("name")}</h1>
                  <h1>{localStorage.getItem("email")}</h1>
              </div>             
            </div>
                    
        </div>
      
    )
}

export default Wall