
import { useState } from 'react';
import Header from './components/Header'
import { HeaderWithButton } from './components/HeaderWithButton';
import Todo from './components/Todo';
import CardWrapper from './components/CardWrapper';

function App() {

  return (
    <div>
       
        <MyCardWrapper>
            hi in black cover
        </MyCardWrapper>
        <MyCardWrapper>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat repellat molestiae dolore, eum ex dolor delectus asperiores minima, quod commodi excepturi voluptate ipsa soluta et veniam. Quibusdam adipisci nisi repudiandae?
            Nulla totam, recusandae sed consequatur illum voluptatum, dicta tempore dolorem voluptas sapiente minima excepturi molestias vel, nobis ducimus qui repudiandae eaque. Numquam quisquam corporis laboriosam corrupti ipsum deleniti praesentium labore!
            Magnam, fuga? Cumque reprehenderit magnam rem sed corrupti perferendis temporibus assumenda nostrum facere placeat corporis qui rerum necessitatibus minima itaque a adipisci blanditiis quis tempora vitae, nulla eum exercitationem? Est!
            Illo mollitia libero eius voluptatum. Pariatur quasi reiciendis corrupti officia eum impedit nihil officiis, provident neque odit doloribus blanditiis veniam mollitia aut temporibus distinctio natus. Fuga consequuntur nisi iste quo.
            Repellat ratione, odio, totam omnis debitis neque dolores ad molestias fugiat earum, quisquam rem molestiae atque? Placeat accusantium esse aperiam sint sapiente harum repellat nobis. Culpa adipisci quod nulla rerum.
            Natus iste facilis voluptatibus aut? Voluptas, molestiae iste at dolor excepturi aspernatur temporibus beatae vitae officia deleniti odio nostrum adipisci sint fugit asperiores voluptatem reiciendis quibusdam! Quia voluptatum labore reiciendis.
            A, impedit dicta voluptatibus dolorum fugit quam temporibus, est in odit quasi maiores illum, aut vero sequi sapiente laboriosam culpa dolor necessitatibus et suscipit non aliquid id? Nostrum, deserunt? Deleniti?
            A soluta totam ipsam ad porro magnam facilis velit vel nesciunt ex adipisci esse deleniti, enim voluptatum, nemo laborum ullam praesentium! Similique totam delectus veritatis ducimus, quis deserunt quod dolorum.
            Deleniti aliquid accusantium fugiat laboriosam nemo amet, itaque quis doloribus aspernatur provident quae eveniet earum dignissimos, mollitia, ducimus magni laudantium repellendus. Veritatis officia cupiditate accusantium nemo vel quam quo recusandae?
            Voluptatibus, pariatur nostrum. Ut iusto a quibusdam fugiat dignissimos corrupti! Praesentium, incidunt temporibus suscipit labore obcaecati est nisi delectus, necessitatibus accusamus, consequuntur iste a porro excepturi rerum odit dolores voluptatibus!
          <h1>The END</h1>
        </MyCardWrapper>
    </div>
  )
}

function MyCardWrapper({children}){

  return <div style={{border:"2px solid black"}}>
{console.log(children)}
    {children}


  </div>
}


export default App
