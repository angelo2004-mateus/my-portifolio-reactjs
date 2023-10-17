const Card = ({title, description, tec1, tec2, tec3, tec4}) => {

    return (
        <div className="hover:border-opacity-80 transition relative flex flex-col border-solid border w-72 h-96 rounded-xl overflow-hidden border-white border-opacity-30">
            <div className="w-full h-2/4 overflow-hidden bg-white"></div>
            <div className="w-full h-10 p-4">
                <h2 className="font-bold text-xl">{title}</h2>
                <p className="opacity-50">{description}</p>
            </div>
            <span className="absolute flex items-center justify-center gap-x-4 w-full h-10 text-2xl bottom-2 opacity-50">{tec1}{tec2}{tec3}{tec4}</span>
        </div>
    )

}

export default Card;