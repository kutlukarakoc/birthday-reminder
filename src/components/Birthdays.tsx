import { IBirthdays } from "../types"
import { useEffect, useCallback } from "react"

type IBirthdayProps = {
    birthdays: IBirthdays[]
}

const Birthdays: React.FC<IBirthdayProps> = ({ birthdays }) => {

    const countDown = useCallback((personDay: string | number, personMonth: string | number): string => {
        const birthDate: string | number = personDay
        const birthMonth: string | number = personMonth
        const today: any = new Date()
        let nextYear: number
        let birthDayText: string = 'Happy birthday!!!!'

        /* if birthday already passed countdown from next year */
        /* if day and month both equals with todays time, return birthDay string */
        if (today.getMonth() + 1 > birthMonth || (today.getMonth() + 1 == birthMonth && today.getDate() > birthDate)) {
            nextYear = new Date().getFullYear() + 1
        } else if (today.getMonth() + 1 == birthMonth && today.getDate() == birthDate) {
            return birthDayText
        } else {
            nextYear = new Date().getFullYear()
        }

        const countDownDate: any = new Date(`${nextYear}-${birthMonth}-${birthDate} 00:00:00`)
        const remaining: number = countDownDate - today
        let days: number = Math.floor(remaining / (1000 * 60 * 60 * 24))
        let hours: number = Math.floor(remaining / (1000 * 60 * 60)) % 24
        let minutes: number = Math.floor(remaining / (1000 * 60)) % 60
        let seconds: number = Math.floor(remaining / 1000) % 60

        return `${days < 10 ? '0' + days : days} Days - ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    }, [])

    useEffect(() => {


    }, []);

    return (
        <div className="h-72 w-96 flex flex-col items-center justify-center gap-6 px-5 border-2 border-black rounded-md">
            <ul className="w-full h-full flex flex-col justify-center items-start gap-4">
                {
                    birthdays.map(person => (
                        <li className="w-full flex justify-between px-7" key={person.id}>
                            <div>{person.name}</div>
                            <div>{countDown(person.day, person.month)}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Birthdays