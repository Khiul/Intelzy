import React, { useContext } from 'react'
import { MyContext } from '../components/MyContext'

const About = () => {
    const {darkMode}=useContext(MyContext)
  return (
    <div style={{color:darkMode?'white':'black',backgroundColor:darkMode?'black':'white',padding:'2%'}}>
      <h1>About Page</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur repudiandae et dignissimos, excepturi, incidunt dolorum quia expedita nobis alias tempore illum sit! Commodi culpa veniam eveniet eligendi cupiditate vero possimus.
      Dolore velit vero ducimus maxime veritatis distinctio voluptatem rem, odio exercitationem deserunt et in iusto mollitia tempora iure laboriosam assumenda odit. Maiores natus perspiciatis nisi, voluptate nulla ipsam quidem ipsum.
      Natus sequi commodi eum, quod quia nihil aspernatur iste porro cumque laborum nisi sed. Placeat, aliquid! Repellat odit, sunt sed libero sapiente aliquid? Optio vel maxime, facere quos odio sapiente!
      Accusamus itaque hic ratione quia modi est quae distinctio, quam voluptate at aspernatur fuga ad blanditiis omnis corrupti. Impedit laborum architecto, ratione cum consectetur atque id modi repudiandae numquam laudantium.
      Sed est laboriosam nemo optio quia, reprehenderit ducimus a, unde illo provident cumque laudantium aut? Tempore recusandae, a reiciendis alias veniam iusto ullam quisquam optio reprehenderit aspernatur architecto sint aut?
      Eligendi, saepe, illo quam dolore doloremque veritatis perferendis numquam laboriosam neque esse voluptates? Quaerat alias nulla modi reiciendis vitae neque quasi itaque natus asperiores, tempore fugiat quas, reprehenderit nemo unde!
      Porro sint non quisquam vel voluptatem possimus sequi adipisci nihil. Aliquam, porro iure. Quis nesciunt consequuntur cum, rem ipsum doloremque aperiam quia maiores repellendus deleniti nostrum laudantium incidunt sapiente eos.
      Dignissimos consectetur quasi eligendi rem harum voluptatem tempora ea ipsam, expedita a sequi possimus magni delectus qui dolores debitis iusto animi dolore accusamus est officiis at? Dolor quia distinctio ipsa.
      Dolorum accusantium repudiandae maiores non perspiciatis quisquam accusamus sint neque esse reprehenderit tempore aut nesciunt at nihil exercitationem ut, inventore eveniet deleniti. Consectetur quia maiores mollitia commodi culpa explicabo provident.
      Velit sunt voluptatum quibusdam? Asperiores quod perspiciatis a aliquid sunt minima molestias non eius corrupti! Deleniti dolor veritatis tenetur atque officia explicabo soluta ipsam! Eveniet dignissimos sequi harum delectus illo?</p>
    </div>
  )
}

export default About
