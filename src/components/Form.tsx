const Form: React.FC = () => {
    return (
        <div className="h-60 flex flex-col justify-center items-center gap-6 px-5 border-2 border-black rounded-md">
            <h6 className="text-sm w-72">Enter the name and date of birth of the person whose birthday you want to remember.</h6>
            <form action="" className="flex flex-col gap-4">
                <input type="text" placeholder="Enter name here" className="border border-black rounded-md outline-none p-2"/>
                <input type="datetime-local" className="border border-black rounded-md outline-none p-2"/>
            </form>
        </div>
    )
}

export default Form