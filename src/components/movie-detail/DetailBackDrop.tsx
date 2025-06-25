

type BackDropType = {
    src: string | undefined
} & React.HTMLAttributes<HTMLImageElement>

export default function BackDrop({ src, ...props }: BackDropType) {


    return (
            <img {...props}  src={`https://image.tmdb.org/t/p/w1280${src}`} />
    )
}
