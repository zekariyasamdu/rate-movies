
interface TagsProps {
    text: string
} 
function Tags({text} : TagsProps) {
    return (
        <div className="border-2 p-3 rounded-3xl text-[10px]">{text}</div>
    )
}

export default Tags