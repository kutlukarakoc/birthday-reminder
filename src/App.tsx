import { useState } from "react"
import Birthdays from "./components/Birthdays"
import Form from "./components/Form"
import { IPerson, IBirthdays } from "./types"

const App: React.FC = () => {

    const [person, setPerson] = useState<IPerson>({ name: '', day: '', month: '' })

    /* if there are already some saved birthday in storage, set them as a initial state, else set empty array */
    const storageItem = localStorage.getItem('birthdays')
    const storageArray = storageItem ? JSON.parse(storageItem) : []
    const [birthdays, setBirthdays] = useState<IBirthdays[]>(storageArray)

    const addBirthday = () => {
        /* if there is person data, save it into birthdays state and storage */
        if (person) {
            setBirthdays([...birthdays, { name: person.name, day: person.day, month: person.month, id: birthdays.length + 1 }])
            localStorage.setItem('birthdays', JSON.stringify([...birthdays, { ...person, id: birthdays.length + 1 }]))
        }
        
        /* clear inputs after save person */
        setPerson({ name: '', day: '', month: '' })
    }

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-3xl font-bold bg-green-400 text-center p-4">
                Birthday Reminder
            </h1>
            <div className="flex justify-around items-center flex-1">
                <Birthdays birthdays={birthdays} />
                <Form person={person} setPerson={setPerson} addBirthday={addBirthday} />
            </div>
        </div>
    )
}

export default App
