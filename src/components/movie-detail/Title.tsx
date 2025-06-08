

type TitleType = {
    titles: string | undefined
} & React.HTMLAttributes<HTMLImageElement>


export default function Title({title, ...props}: TitleType) {

    
    return (
        <p {...props}> {title}</p>
    )
}
