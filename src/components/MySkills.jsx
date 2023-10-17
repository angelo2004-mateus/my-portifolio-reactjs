const MySkills = ({nameTec, icon}) => {
    return (
        <section className="hover:bg-zinc-900 hover:border-#00dfd8 transition delay-100 bg-stone-950 relative flex items-center justify-center gap-x-2 w-28 h-12 rounded-lg border-2 border-white border-opacity-5 overflow-hidden ">    
            <span className="text-white opacity-40 text-2xl">{icon}</span>
            <p className="opacity-70">{nameTec}</p>
        </section>
    )
}


export default MySkills;