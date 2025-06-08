
type overViewType = {
    overview: string | undefined
} & React.HTMLAttributes<HTMLImageElement>


export default function OverView({overview, ...props}: overViewType) {

    
    return (
        <p {...props}> {overview}</p>
    )
}
