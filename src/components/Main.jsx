//import Card from "./Card";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiGithubBadge, DiGit } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import Card from "./Card";
import MySkills from './MySkills';
import animationNeon from '../../public/img/3D_Animation_Style_A_browncolored_neon_programmer_with_straigh_0.jpg'


const Main = () => {
    return (
        <main className="w-full h-auto bg-black flex flex-col items-center pt-20">
             
        <section className='flex items-center bg-#DFDDDE text-white w-11/12 rounded-xl max-xl:flex-col overflow-hidden'>            
            <div className="relative flex justify-center"><span className="xl:bg-none absolute bottom-0 w-full h-56 bg-gradient-to-t from-#DFDDDE to-transparent"></span><img className='w-4/4 max-md:w-11/12' src={animationNeon} alt="3dAnimationNeon" /></div>
            <div className='w-4/4 md:w-9/12 flex gap-2 flex-wrap h-11/12 items-center justify-center'>
                <span className="relative w-3/4 py-10">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-600 text-7xl font-black">About Me.</h2>
                    <h2 className="absolute text-7xl text-black text-opacity-5 font-black">About <br /> Me</h2>
                    <p className="text-black font-semibold opacity-60 mt-8 max-xl:text-justify">Since I was 12 years old, I ve been passionate about developing designs, web and native applications through websites that offered these services. In 2020, I started high school at IFMT (Instituto Federal de Mato Grosso) and graduated in 2022 with a degree in electronics. During the course, I had the opportunity to delve into the field of programming, which sparked a genuine passion for technology in me.</p>
                </span>
            </div>
        </section>

        <section className='flex items-center justify-center flex-col text-white w-11/12 flex-wrap gap-y-5 pt-5k py-10'>
            <h2 className="font-semibold opacity-60">MY SKILLS</h2>            
            <div className='w-4/4 md:w-9/12 flex gap-4 flex-wrap h-11/12 items-center justify-center'>
                <MySkills nameTec='HTML' icon={<DiHtml5 />}/>
                <MySkills nameTec='CSS' icon={<DiCss3 />}/>
                <MySkills nameTec='JavaScript' icon={<DiJavascript1 />}/>
                <MySkills nameTec='React' icon={<DiReact />}/>
                <MySkills nameTec='Tailwind' icon={<BiLogoTailwindCss />}/>
                <MySkills nameTec='GitHub' icon={<DiGithubBadge />}/>
                <MySkills nameTec='Git' icon={<DiGit />}/>

            </div>
        </section>  
                    
        <section className="flex items-center justify-center text-white w-11/12 flex-wrap gap-5 pt-5k py-10">
            <Card title='Note App' tec1={<DiHtml5 />} tec2={<DiCss3 />} tec3={<DiJavascript1 />} description='A notepad site that stores the information in localStorage.'/>
            <Card title='To-do List'  tec1={<DiHtml5 />} tec2={<DiCss3 />} tec3={<DiJavascript1 />} description='A todo list that stores the information in localStorage.'/>
            <Card title='Note App' tec1={<DiHtml5 />} tec2={<DiCss3 />} tec3={<DiJavascript1 />} description='A notepad site that stores the information in localStorage.'/>
            <Card title='To-do List'  tec1={<DiHtml5 />} tec2={<DiCss3 />} tec3={<DiJavascript1 />} description='A todo list that stores the information in localStorage.'/>
        </section>
                    
        </main>
    )
}

export default Main;