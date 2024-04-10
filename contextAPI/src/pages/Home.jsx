import React, { useContext } from 'react'
import { MyContext } from '../components/MyContext'

const Home = () => {
    const {darkMode}=useContext(MyContext)
    
  return (
    <div style={{color:darkMode?'white':'black',backgroundColor:darkMode?'black':'white',padding:'2%'}}>
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab reiciendis repudiandae omnis inventore vel quidem numquam alias temporibus, quam saepe unde enim modi harum nobis, veniam ullam? Et, tempore?
        Fugit deserunt voluptatibus nihil tempora asperiores inventore nobis eos autem eum ipsam minus facilis id, fuga quidem culpa quas magni. Enim ullam nulla fuga eos magni saepe blanditiis praesentium labore!
        Assumenda voluptatibus non ut inventore error nemo aperiam animi deleniti aliquid illo aut, modi labore sunt cumque atque sapiente laboriosam id nobis exercitationem corrupti consequuntur adipisci debitis. Ad, modi alias.
        Natus, aut enim! Fugiat pariatur voluptate accusamus, consequuntur iure odit vero dolorem neque possimus minus explicabo placeat eveniet eaque totam laboriosam adipisci nostrum culpa? Dolores maiores odit distinctio placeat voluptate.
        Nostrum facere mollitia modi aperiam? Explicabo ipsum est itaque tempora illo adipisci ipsam eius similique laboriosam error rerum praesentium tempore, ab sit, ad aperiam? Excepturi nihil quidem voluptate tempore voluptas!
        Labore, laboriosam. Illum id ab, sapiente perferendis deleniti distinctio quos repellendus aperiam sed soluta sequi autem, adipisci aliquam nihil itaque at eaque quo laboriosam maxime. Animi optio sint sunt recusandae?
        Ullam vel harum totam esse minus at architecto laborum nisi, molestias nihil eum pariatur perferendis dolore officia. Suscipit natus quo accusantium laborum et ea dolore dignissimos reiciendis recusandae beatae. Nemo.
        Quos magni impedit, nulla perspiciatis officiis sunt iure rerum repellat delectus asperiores nam fuga eaque odit adipisci aspernatur ipsum veniam sit odio ratione laboriosam amet voluptatum et excepturi provident. Debitis?
        Praesentium ullam eos cupiditate, corrupti quidem facere harum. Expedita eveniet unde, dicta sed modi repellendus porro, tempore perspiciatis vero fugit error praesentium officia suscipit illum dolorum molestiae, eius ex velit?
        Repudiandae nobis, provident, accusantium voluptas deleniti earum facere quos deserunt nostrum dolor maiores atque, quia minus. Animi eius mollitia temporibus, assumenda cupiditate, omnis enim atque aliquid quisquam ad itaque aspernatur.</p>
    </div>
  )
}

export default Home
