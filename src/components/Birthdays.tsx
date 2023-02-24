import { IBirthdays } from "../types"

type IBirthdayProps = {
    birthdays: IBirthdays[]
}

const Birthdays: React.FC<IBirthdayProps> = ({ birthdays }) => {

    const countDown = (personDay: string, personMonth: string) => {
        const birthDate: string = personDay
        const birthMonth: string = personMonth
        const today: any = new Date()
        let nextYear: number
        let birthDayText: string = 'Happy birthday!!!!'

        /* if birthday already passed countdown from next year */
        /* if day and month both equals with todays time, return birthDayText */
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

        let formattedDay: string = parseInt(birthDate) < 10 ? '0' + birthDate : birthDate
        let formattedMonth: string = parseInt(birthMonth) < 10 ? '0' + birthMonth : birthMonth
        let formattedCountDownDate: string = `${formattedDay}/${formattedMonth}/${nextYear}`

        return (
            <div className="text-center">
                {days < 10 ? '0' + days : days} days left. <br />
                Next birthday: {formattedCountDownDate}
            </div>
        )
    }

    return (
        <div className="h-72 w-80 flex flex-col items-center justify-center gap-6 px-5 border-2 border-black rounded-md">
            <ul className="w-full h-full flex flex-col justify-center items-start gap-4">
                {
                    birthdays.map(person => (
                        <li className="w-full flex flex-col items-center" key={person.id}>
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