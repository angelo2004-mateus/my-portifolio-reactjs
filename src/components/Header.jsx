import Button from "./Button";

const Header = ()=> {
    return (
        <header className="w-full h-auto pb-10 pt-32 bg-black text-white flex justify-center items-center flex-col gap-y-5">
            <section className="w-full flex flex-col items-center justify-center gap-y-4">
            
                <div className="w-5/6 flex flex-wrap justify-center items-center gap-x-2 text-8xl max-md:text-5xl font-extrabold ">
                    <span className="">Your</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-600">Front End</span>
                    <span className="">Developer {'/>'}</span>
                </div>
                <span className="w-5/6 text-center text-2xl md:w-128 mt-5">
                    <p className="opacity-70">Im 18 years old and Im passionate about the world of programming. Scroll down and get more out of me.</p>
                </span>
                <div className="mt-8 flex items-center justify-center gap-x-7 w-5/6 font-semibold max-sm:flex-col max-sm:gap-y-7 ">
                    <Button text='Contact' className='bg-white text-black hover:opacity-80 trasition-all duration-500 max-sm:w-5/6 z-0'/>
                    <Button text='View My Github' className='text-white shadow-3xl bg-gradient-to-r from-fuchsia-500 to-pink-600 hover:opacity-90 trasition-all duration-500 max-sm:w-5/6'/>
                </div>

            </section>
        
        </header>
    )
}

export default Header;