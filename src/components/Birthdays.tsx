

const Birthdays: React.FC = ({}) => {
    return (
        <div className="min-h-[250px] h-72 w-96 flex flex-col items-center justify-center gap-6 px-5 border-2 border-black rounded-md">
            <ul className="w-full h-full flex flex-col justify-center items-start gap-4">
                <li className="w-full flex justify-between px-7">
                    <div>Person 1</div>
                    <div>Birthday</div>
                </li>
                <li className="w-full flex justify-between px-7">
                    <div>Person 2</div>
                    <div>Birthday</div>
                </li>                
                <li className="w-full flex justify-between px-7"> 
                    <div>Person 3</div>
                    <div>Birthday</div>
                </li>
            </ul>
        </div>
    )
}

export default Birthdays