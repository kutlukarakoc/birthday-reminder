import { useState } from "react"
import Birthdays from "./components/Birthdays"
import Form from "./components/Form"
import { IPerson, IBirthdays } from "./types"

const App: React.FC = () => {

    const [person, setPerson] = useState<IPerson>({name: '', day: '', month: ''})
    const [birthdays, setBirthdays] = useState<IBirthdays[]>([])

    const addBirthday = () => {


        if(person) setBirthdays([...birthdays, {...person, id: birthdays.length + 1}])
        /* clear inputs after save person */
        setPerson({name: '', day: '', month: ''})
    }

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-3xl font-bold bg-green-400 text-center p-4">
                Birthday Reminder
            </h1>
            <div className="flex justify-around items-center flex-1">
                <Birthdays birthdays={birthdays}/>
                <Form person={person} setPerson={setPerson} addBirthday={addBirthday}/>
            </div>
        </div>
    )
}

export default App
