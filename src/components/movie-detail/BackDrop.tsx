

type BackDropType = {
    src: string | undefined
}

export default function BackDrop({ src }: BackDropType) {


    return (
        <div className="max-w max-h rounded-2xl">

            <img className="h-max w-max rounded-3xl" src={`https://image.tmdb.org/t/p/w1280${src}`} />

        </div>
    )
}
