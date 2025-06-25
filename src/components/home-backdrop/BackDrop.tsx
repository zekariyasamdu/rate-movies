
interface BackDropProps {
    src : string
}
function BackDrop({src} : BackDropProps) {
    return (
        <div className=""> <img src={`https://image.tmdb.org/t/p/w1280${src}`} /></div>
    )
}

export default BackDrop