type YearProps =  {
    date: string
} & React.HTMLAttributes<HTMLDivElement>

function Year({date, ...props}: YearProps ) {
    const year = date?.split('-')
    

    return (
        <p {...props}>{year ?year[0] : 0 }</p>
    )
}

export default Year