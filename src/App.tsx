import { useState, useEffect } from "react"
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
        if (person) setBirthdays([...birthdays, { name: person.name, day: person.day, month: person.month, id: Date.now() + Math.random() }])
        
        /* clear inputs after save person */
        setPerson({ name: '', day: '', month: '' })
    }

    const removeBirthday = (personId: number) => setBirthdays(birthdays.filter(person => person.id !== personId))

    /* update local storage depends on birthday state changes*/
    useEffect(() => {
        localStorage.setItem('birthdays', JSON.stringify(birthdays))
    }, [birthdays])

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-3xl font-bold text-center mt-4">
                Simple Birthday Reminder
            </h1>
            <div className="h-full flex justify-center items-center gap-20">
                <Birthdays birthdays={birthdays} removeBirthday={removeBirthday}/>
                <Form person={person} setPerson={setPerson} addBirthday={addBirthday} />
            </div>
        </div>
    )
}

export default App
