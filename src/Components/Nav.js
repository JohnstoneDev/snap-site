import logo from '../images/logo.svg'

function Navigation(){
    return (
        <nav className="flex flex-row space-x-44 gap-40 py-2 items-center w-screen text-Medium-Gray">
        <img src={logo} alt="logo"></img>

            <div className="flex space-x-9 items-center">
                <select name="Features">                
                    <option value="">Features</option>
                    <option value="Todo List">Todo</option>
                    <option value="Calendar">Calendar</option>
                    <option value="Reminders">Reminders</option>
                    <option value="Planning">Planning</option>
                </select>

                <select name="Company">
                    <option value="">Company</option>
                    <option value="History">History</option>
                    <option value="Our Team">Our Team</option>
                    <option value="Blog">Blog</option>
                </select>

                <div className="flex space-x-9">
                    <h3>Careers</h3>
                    <h3>About</h3>
                </div>

             </div>


            <div className="flex space-x-9 items-center  hover:border-Almost-Black">
                <button className='hover:text-Almost-Black'>Login</button>
                <button className='rounded-full border-2 border-Almost-Black p-2 hover:text-Almost-Black cursor-pointer'>Register</button>
            </div>

        </nav>
    )
}

export default Navigation;