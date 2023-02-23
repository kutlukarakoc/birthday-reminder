import { IPerson } from "../types"

type IForm = {
    person: IPerson
    setPerson: React.Dispatch<React.SetStateAction<IPerson>>
    addBirthday: () => void
}

const Form: React.FC<IForm> = ({person, setPerson, addBirthday}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name: string = e.target.name
        let value: string = e.target.value
        setPerson({...person, [name]: value})
    }

    return (
        <div className="h-72 flex flex-col justify-center items-center gap-6 px-5 border-2 border-black rounded-md">
            <h6 className="text-sm w-72">Enter the name and date of birth of the person whose birthday you want to remember.</h6>
            <div className="flex flex-col gap-4">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter name here" 
                    className="border border-black rounded-md outline-none p-2" 
                    value={person.name}
                    onChange={e => handleChange(e)}
                />
                <input 
                    type="date"
                    name="date"
                    className="border border-black rounded-md outline-none p-2"
                    value={person.date}
                    onChange={e => handleChange(e)}
                />
                <button 
                    type="button"
                    className="border border-black rounded-md outline-none p-2"
                    onClick={addBirthday}    
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default Form