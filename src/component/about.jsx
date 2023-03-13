    import React from 'react'
    import { useNavigate, useNavigation } from 'react-router-dom'
    const About = () => {
        let navigate=useNavigate() ;
    return (

        <div className='section1'>

         <h1>title</h1>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  <br />
            Laboriosam veniam corrupti, repellat a cum voluptas! Ratione  <br />
            quo ullam neque quas eius autem, 
            minus repellat architecto exercitationem veniam facilis repellendus rerum! </p>
          <button onClick={()=>navigate('/prod')}> shop </button>

        </div>
    )
    }

    export default About