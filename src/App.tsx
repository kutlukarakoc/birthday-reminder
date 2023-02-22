import Birthdays from "./components/Birthdays";
import Form from "./components/Form";

const App: React.FC = () => {
    return (
        <div className="flex flex-col h-full">
            <h1 className="text-3xl font-bold bg-green-400 text-center p-4">
                Birthday Reminder
            </h1>
            <div className="flex justify-around items-center flex-1">
                <Birthdays />
                <Form />
            </div>
        </div>
    );
}

export default App;
