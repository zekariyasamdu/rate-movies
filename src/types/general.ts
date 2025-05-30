type aStatetWithNumber = {
    value: number,
    setterFunc: React.Dispatch<React.SetStateAction<number>>
}


type aStateWithString = {
    value: string,
    setterFunc: React.Dispatch<React.SetStateAction<string>>
}

type aStateWithBool = {
    value: string,
    setterFunc: React.Dispatch<React.SetStateAction<string>>
}


interface childrenProps {
    children: React.ReactNode
}


export type {aStateWithBool, aStateWithString, childrenProps, aStatetWithNumber }
