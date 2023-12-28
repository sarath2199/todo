import sty from './page.module.css'

const Headerpage=()=>{
    return(
        <>
        
        <div className={sty.nav}>
           <div className={sty.logo}>
            <h2>Todo App</h2>
            </div>
           
        <ul className={sty.navbar}>
            <li className={sty.navitem}>
                <a href='/'>Home</a>
            </li>
            <li className={sty.navitem}>
            <a href='Profile'>Profile</a>
            </li>
            <li className={sty.navitem}>
                <a href='Signup'>Login</a>
                </li>
                
        </ul>
        </div>
        

        
        </>
    )

}
export default Headerpage;