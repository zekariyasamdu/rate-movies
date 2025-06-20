

type ThumbnailProps = { 
    src: string, alt: string, opacity?: boolean 
} & React.ImgHTMLAttributes<HTMLImageElement>

export default function Thumbnail({ src, alt, ...props }: ThumbnailProps) {
    return (
        <img src={src? `https://image.tmdb.org/t/p/w500${src}` : '../../assets/Screenshot 2025-06-19 211314.png'} width="240" alt={alt} {...props} />)
}