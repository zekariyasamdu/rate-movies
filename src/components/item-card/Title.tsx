

type TitleType = {
    title: string | undefined
} & React.HTMLAttributes<HTMLElement>


export default function Title({title, ...props}: TitleType) {

    return (
        <p {...props}> {title}</p>
    )
}
