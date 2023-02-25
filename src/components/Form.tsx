import { IPerson } from "../types"

type IForm = {
    person: IPerson
    setPerson: React.Dispatch<React.SetStateAction<IPerson>>
    addBirthday: () => void
}

const Form: React.FC<IForm> = ({ person, setPerson, addBirthday }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name: string = e.target.name
        let value: string = removeLeadingZero(e.target.value)
        setPerson({ ...person, [name]: value })
    }

    const removeLeadingZero = (value: string): string => {
        if (value.charAt(0) === "0") {
            return value.substring(1)
        } 
        return value
    }

    return (
        <div className="h-72 flex flex-col justify-center items-center gap-6 px-5 border-2 border-black rounded-md pb-1 sm:pb-0">
            <h6 className="text-sm w-72">Enter the name and date of birth of the person whose birthday you want to remember.</h6>
            <div className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border border-black rounded-md outline-none p-2 w-60 placeholder:text-sm"
                    value={person.name}
                    onChange={e => handleChange(e)}
                />
                <div className="w-full flex justify-between">
                    <input
                        type="number"
                        name="day"
                        placeholder="Day(1-31)"
                        className="border border-black rounded-md outline-none p-2 w-28 placeholder:text-sm"
                        value={person.day}
                        onChange={e => handleChange(e)}
                    />
                    <input
                        type="number"
                        name="month"
                        placeholder="Month(1-12)"
                        className="border border-black rounded-md outline-none p-2 w-28 placeholder:text-sm"
                        value={person.month}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <button
                    type="button"
                    className="border border-black rounded-md outline-none p-2 w-60 placeholder:text-sm"
                    onClick={addBirthday}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default Form