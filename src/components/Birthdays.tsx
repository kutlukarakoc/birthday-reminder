import React from "react"
import { IBirthdays } from "../types"

type IBirthdayProps = {
    birthdays: IBirthdays[]
    removeBirthday: (personId: number) => void
}

const Birthdays: React.FC<IBirthdayProps> = ({ birthdays, removeBirthday }) => {

    const countDown = (personId: number, personName: string, personDay: string, personMonth: string) => {
        const birthDate: string = personDay
        const birthMonth: string = personMonth
        const today: any = new Date()
        let nextYear: number
        let birthDayText = 
        <li className="w-full flex items-center">
                <div className="w-full relative text-center">
                <div className="bg-green-400 py-6 w-full text-center">Happy Birthday {personName} !!!!</div>
                    <button type="button" className="absolute right-2 top-1 text-lg bg-black text-white rounded-full w-5 h-5 grid place-content-center pb-0.5 z-10" onClick={() => removeBirthday(personId)}>x</button>
                </div>
            </li >

        /* if birthday already passed countdown from next year */
        /* if day and month both equals with todays time, return birthDayText */
        if (today.getMonth() + 1 > birthMonth || (today.getMonth() + 1 == birthMonth && today.getDate() > birthDate)) {
            nextYear = new Date().getFullYear() + 1
        } else if (today.getMonth() + 1 == birthMonth && today.getDate() == birthDate) {
            return birthDayText
        } else {
            nextYear = new Date().getFullYear()
        }

        const countDownDate: any = new Date(`${nextYear}/${birthMonth}/${birthDate} 00:00:00`)
        const remaining: number = countDownDate - today
        let days: number = Math.floor(remaining / (1000 * 60 * 60 * 24)) + 1

        let formattedDay: string = parseInt(birthDate) < 10 ? '0' + birthDate : birthDate
        let formattedMonth: string = parseInt(birthMonth) < 10 ? '0' + birthMonth : birthMonth
        let formattedCountDownDate: string = `${formattedDay}/${formattedMonth}/${nextYear}`

        return (
            <li className="w-full flex items-center" style={{order: days}}>
                <div className="w-full relative text-center">
                    <div className={days < 7 ? 'bg-red-400' : 'bg-blue-400'}>
                        <div className="text-lg">{personName}</div>
                        <div>
                            {days < 10 ? `0${days}` : days} days left. <br />
                            Next birthday: {formattedCountDownDate}
                        </div>
                    </div>
                    <button type="button" className="absolute right-2 top-1 text-lg bg-black text-white rounded-full w-5 h-5 grid place-content-center pb-0.5 z-10" onClick={() => removeBirthday(personId)}>x</button>
                </div>
            </li >
        )
    }

    return (
        <div className=" w-80 flex flex-col items-center justify-center gap-6 border-2 border-black rounded-md">
            <ul className="w-full h-[444px] flex flex-col justify-start items-start gap-4 overflow-y-auto">
                {
                    birthdays.map(person => (
                        <React.Fragment key={person.id}>{countDown(person.id, person.name, person.day, person.month)}</React.Fragment>
                    ))
                }

                {birthdays.length === 0 && <div className="text-center p-4 w-full">Birthdays will be display here</div>}
            </ul>
        </div>
    )
}

export default Birthdays