type RatingProps = {
    rating: number
} & React.HTMLAttributes<HTMLParagraphElement>

export default function Rating({ rating, ...props }: RatingProps): React.ReactNode {
    return (
        <p {...props}>{(Math.round(rating * 10) / 10).toString()}</p>
    )
}