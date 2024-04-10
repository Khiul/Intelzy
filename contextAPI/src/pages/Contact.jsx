import React, { useContext } from 'react'
import { MyContext } from '../components/MyContext'

const Contact = () => {
    const {darkMode}=useContext(MyContext)
  return (
    <div style={{color:darkMode?'white':'black',backgroundColor:darkMode?'black':'white',padding:'2%'}}>
      <h1>Contact Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nisi praesentium obcaecati expedita, est sequi et ut, dolorum nesciunt voluptatum vitae aliquam, quis temporibus distinctio earum harum a autem tempora?
      Nesciunt enim autem optio earum! Fugit nam blanditiis accusantium commodi nemo, sunt tenetur exercitationem odio tempore sed deserunt optio dolorem iste voluptate neque earum, vero totam quia aliquid. Iste, quibusdam?
      Quam repellat nam sed quisquam. In amet dolorem blanditiis repellendus, temporibus pariatur deleniti et nesciunt eveniet excepturi magnam autem impedit rerum ullam sint nulla necessitatibus minima. Sit unde dolorem eum.
      Exercitationem asperiores sunt doloribus ea recusandae, fugiat eveniet saepe in doloremque reiciendis repellat officiis, nam, suscipit consequatur! Tempore delectus culpa nobis provident cum voluptatum sit iste facere molestias, velit debitis?
      Aperiam error harum necessitatibus nisi nulla numquam, dicta tempore architecto. Dolorem eum iure adipisci blanditiis quis nisi fuga soluta. Modi possimus ducimus fuga numquam, quod consequuntur accusamus maiores cumque incidunt!
      In odit nihil quam illum, veniam tenetur neque amet tempore vitae aliquam temporibus provident quisquam deleniti rem corrupti inventore debitis laborum consequuntur cumque hic repellendus obcaecati iste recusandae accusamus. Culpa!
      Dolorum voluptatibus necessitatibus cum quia accusamus vitae harum voluptates obcaecati omnis sapiente! Laboriosam quas nobis quia odio blanditiis consectetur fugiat voluptatum modi possimus ut? Impedit odio adipisci debitis a non?
      In labore est dolores a dolorem, explicabo minima animi molestias enim corporis expedita quis reprehenderit consequuntur sint vero nemo velit esse nostrum, voluptatibus vel accusamus asperiores ullam eaque debitis! Sapiente!
      Sint nobis qui in? Perspiciatis mollitia doloribus magnam nemo quisquam blanditiis quod dolores officia at labore suscipit odio, laboriosam quae asperiores quaerat voluptas quam! Perspiciatis consequatur similique magni eum voluptas!
      Aut esse, autem, recusandae dolorum doloremque ab rem obcaecati atque magnam at repudiandae nam possimus amet dolor est nulla maxime ea accusamus asperiores? Commodi quam alias quaerat labore unde veniam.</p>
    </div>
  )
}

export default Contact
