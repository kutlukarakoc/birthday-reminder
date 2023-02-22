import { useState } from "react"
import Birthdays from "./components/Birthdays"
import Form from "./components/Form"
import { IPerson } from "./types"

const App: React.FC = () => {

    const [person, setPerson] = useState<IPerson>({name: '', date: ''})
    /*
        {
            name: string
            date: string
            id?: number
        }
    */

    const [birthdays, setBirthdays] = useState()
    /* 
        [
            {
                name: string,
                date: string
                id: number
            },
            {
                name: string,
                date: string
                id: number
            }
        ]
    */

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-3xl font-bold bg-green-400 text-center p-4">
                Birthday Reminder
            </h1>
            <div className="flex justify-around items-center flex-1">
                <Birthdays />
                <Form person={person} setPerson={setPerson}/>
            </div>
        </div>
    )
}

export default App
