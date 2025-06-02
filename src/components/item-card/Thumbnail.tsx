

type ThumbnailProps = { 
    src: string, alt: string, opacity?: boolean 
} & React.ImgHTMLAttributes<HTMLImageElement>

export default function Thumbnail({ src, alt, ...props }: ThumbnailProps) {
    return (
        <img src={`https://image.tmdb.org/t/p/w500${src}`} width="240" alt={alt} {...props} />)
}