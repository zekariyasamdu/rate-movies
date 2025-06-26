interface LoginProps {
    className?: string
}

function Login({className}: LoginProps) {
    return (
        <button className={`${className} text-[14px] w-25 border-2 border-L-secondary rounded-2xl ml-auto mr-5 p-2 text-D-primary bg-blue-400`}>Login</button>
    )
}

export default Login