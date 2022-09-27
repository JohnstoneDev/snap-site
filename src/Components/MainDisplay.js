import DisplayImage from '../images/image-hero-desktop.png';
import DataBiz from '../images/client-databiz.svg'
import AudoPhile from '../images/client-audiophile.svg'
import Meet from '../images/client-meet.svg'
import Maker from '../images/client-maker.svg';




function MainDisplay(){
    return (
        <div className="w-full grid grid-cols-2 gap-16 my-10 px-32">
            <div className="text-left flex flex-col gap-20 items-start">
            <h1 className="text-Almost-Black font-bold text-big"> Make remote work</h1>
            <p className='text-Medium-Gray text-all'>Get your team in sync, no matter your location. Streamline processes,create team rituals, and watch productivity soar.</p>
            <button className='rounded-full border-2 border-Almost-Black p-2 hover:text-Almost-Black cursor-pointer'> Learn More </button>
            <div className='flex gap-2'>
                <img src={DataBiz} alt=""></img>
                <img src={AudoPhile} alt=""></img>
                <img src={Meet} alt=""></img>
                <img src={Maker} alt=""></img>
            </div>
            </div>
            <img src={DisplayImage} alt=""></img>
        </div>
    )
}


export default MainDisplay;